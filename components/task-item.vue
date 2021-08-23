<template>
  <div class="border rounded bg-white p-2 mb-2">
    <div class="flex space-x-2">
      <textarea ref="task-textarea" class="w-4/5 flex-grow" v-model="doneTask"/>
    </div>
    <div v-if="showAnswer" :class="[doneTaskIsCorrect ? 'text-green-400' : 'text-red-400' ]"
         v-html="fullAnswer">
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch, ProvideReactive, InjectReactive} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";
import {replaceWithArray} from "~/logic/core/str";
import {ExerciseProgressRepo} from "~/logic/eng/db";
import {debounce} from "ts-debounce";

@Component({})
export default class TaskItem extends Vue {
  @Prop() exercise!: GrammarExercises.Exercise;
  @Prop() task!: string;
  @Prop() answer!: string;


  doneTask: string = this.task;
  @InjectReactive() exerciseProgressRepo!: ExerciseProgressRepo;

  @Prop({default: false}) showAnswer!: boolean;


  get taskTextarea() {
    return this.$refs["task-textarea"] as HTMLElement;
  }

  /**
   * Является ли упражнение упражнением на заполнение пропусков
   *
   * Нужно, чтобы подставлять ответ в пропуски и сравнивать с введенным текстом
   *
   * Не является заполнением пропусков:
   * Поставьте следующие предложения в отрицательную и вопросительную форму.
   * Переведите на английский язык.
   */
  get isFillTheGapsExercise() {
    return (
      // Вставьте some, any или по.
      this.exercise.exerciseText.startsWith("Вставьте") ||
      // Заполните пропуски, вставив одно из слов, данных в скобках.
      this.exercise.exerciseText.startsWith("Заполните")
    );
  }

  get doneTaskIsCorrect(): boolean {
    const normalizedAnswer = this.fullAnswer
      .replaceAll("<b>", "")
      .replaceAll("</b>", "");
    return normalizedAnswer === this.doneTask;
  }

  get fullAnswer() {
    if (!this.isFillTheGapsExercise) {
      return this.answer;
    } else {
      // There are _ pictures in the book. + "some" =
      // There are some pictures in the book. + "some" =
      return replaceWithArray(
        this.task,
        this.answer.split(",").map(a => a.trim()).map(a => `<b>${a}</b>`)
      );
    }
  }

  mounted() {

    // Изменение высоты текстового поля в зависимости от контента
    // https://stackoverflow.com/questions/995168/textarea-to-resize-based-on-content-length
    this.taskTextarea.addEventListener(
      "input",
      function () {
        this.style.height = "15px";
        this.style.height = (this.scrollHeight || 40) + "px";
      },
    );
    // Когда ответы скрыты, то проставляем высоты текстовым полям
    if (!this.showAnswer) {
      this.taskTextarea.dispatchEvent(new Event("input"));

    }

    this.doneTask = this.exerciseProgressRepo.tryGetTask(this.exercise.exerciseNumber, this.task) ?? this.task;

  }

  @Watch("showAnswer")
  onShowAnswer() {
    // Когда ответы скрыты, то проставляем высоты текстовым полям
    if (!this.showAnswer) {
      this.taskTextarea.dispatchEvent(new Event("input"));
      this.doneTask = this.task;
    }
  }

  @Watch("doneTask")
  onDoneTaskChange() {
    console.log("heyyyy")
    this.saveTaskDebounce();
  }

  saveTask() {

    this.exerciseProgressRepo.save(
      this.exercise.exerciseNumber,
      this.task,
      this.doneTask
    )
  }

  saveTaskDebounce = debounce(
    () => this.saveTask(),
    100
  );


}
</script>

<style scoped>
textarea {
  height: 40px;
}
</style>
