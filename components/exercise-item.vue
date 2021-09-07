<template>
  <div>
    <div v-if="ex.rules" class="italic whitespace-pre-line">{{ ex.rules }}</div>

    <details :open="exerciseDone">
      <summary>
            <h3 :class="['inline-block',  showAnswer ? 'line-through' : '']" :id="ex.exerciseNumber">
              Упражнение {{ ex.exerciseNumber }}
            </h3>
      </summary>

      <div>
        <div class="py-1 italic">{{ ex.exerciseText }}</div>

        <template v-for="(task, taskIndex) in ex.tasks">
          <template v-if="typeof task === 'object'">
            <!-- Таски могут быть вложенными -->

            <div class="py-1 italic">{{ `${taskIndex + 1}. ${task.exerciseText || ''}` }}</div>

            <template v-for="(t, tIndex) in task.tasks">

              <template v-if="typeof t === 'object'">
                <!-- Таски могут быть вложенными дважды -->

                <div class="py-1 italic">{{ `${"abcdef"[tIndex]}) ${t.exerciseText || ''}` }}</div>

                <template v-for="(t_, tIndex_) in t.tasks">
                  <task-item :key="taskIndex.toString() + tIndex.toString() + tIndex_.toString()" :task="t_"
                             :answer="answer.tasks[taskIndex].tasks[tIndex].tasks[tIndex_]" :exercise="ex"
                             :show-answer="showAnswer"/>
                </template>


              </template>
              <template v-else>
                <task-item :key="taskIndex.toString() + tIndex.toString()" :task="t"
                           :answer="answer.tasks[taskIndex].tasks[tIndex]" :exercise="ex"
                           :show-answer="showAnswer"/>
              </template>

            </template>


          </template>
          <template v-else>
            <task-item :key="taskIndex" :task="task" :answer="answer.tasks[taskIndex]" :exercise="ex"
                       :show-answer="showAnswer"/>
          </template>
        </template>

      </div>

    </details>

    <div class="flex justify-center">
      <button @click="toggleExercise(ex.exerciseNumber)" class="w-full py-3">
        <span v-if="!showAnswer">Проверить ✔️</span>
        <span v-else>Заново 🔁</span>
      </button>
    </div>


  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, ProvideReactive} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";
import {DoneExerciseRepo, ExerciseProgressRepo} from "~/logic/eng/db";
import Task = GrammarExercises.Task;


@Component({})
export default class ExerciseItem
  extends Vue {
  @Prop() ex!: GrammarExercises.Exercise;
  @Prop() answer!: GrammarExercises.Exercise;
  showAnswer = false;
  exerciseDone = false;

  doneExerciseRepo!: DoneExerciseRepo;
  @ProvideReactive() exerciseProgressRepo!: ExerciseProgressRepo;

  toggleExercise(exerciseNumber: number) {
    document.getElementById(exerciseNumber.toString())!.scrollIntoView();

    // Выполнение таски
    if (!this.showAnswer) {
      this.showAnswer = true;
      this.doneExerciseRepo.doExercise(exerciseNumber);
    }
    // Откат таски
    else {
      this.exerciseProgressRepo.reset(exerciseNumber);
      this.showAnswer = false;
      this.doneExerciseRepo.undoExercise(exerciseNumber);
    }
  }

  mounted() {
    this.exerciseProgressRepo = new ExerciseProgressRepo(localStorage);
    this.doneExerciseRepo = new DoneExerciseRepo(localStorage);
    this.showAnswer = this.doneExerciseRepo.isExerciseDone(this.ex.exerciseNumber);
    this.exerciseDone = !this.showAnswer;
  }
}
</script>

<style scoped lang="scss">

</style>
