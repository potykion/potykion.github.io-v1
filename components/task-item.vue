<template>
  <div class="border rounded bg-white p-2 mb-2">
    <div class="flex space-x-2">
      <!-- ~135 вмещается на одну строку => doneTask.length / 135 + 1 = кол-во строк, занимаемое инпутом -->
      <textarea ref="task-textarea" class="w-4/5 flex-grow" v-model="doneTask"/>

      <!--        <button v-if="!showAnswer" @click="showAnswer = !showAnswer">✔️</button>-->
    </div>
    <div v-if="showAnswer" :class="['italic', doneTask === answer ? 'text-green-400' : 'text-red-400' ]">
      {{ answer }}
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Watch} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";

@Component({})
export default class TaskItem extends Vue {
  @Prop() task!: string;
  @Prop() answer!: string;

  doneTask = this.task;

  @Prop({default: false}) showAnswer!: boolean;

  get taskTextarea() {
    return this.$refs["task-textarea"] as HTMLElement;
  }

  mounted() {
    this.taskTextarea.addEventListener(
      "input",
      function () {
        this.style.height = "15px";
        this.style.height = (this.scrollHeight) + "px";
      },
    );
    if (!this.showAnswer) {
      this.taskTextarea.dispatchEvent(new Event("input"));

    }
  }

  @Watch("showAnswer")
  onShowAnswer() {
    if (!this.showAnswer) {
      this.taskTextarea.dispatchEvent(new Event("input"));
    }
  }

}
</script>

<style scoped>
textarea {
  height: 40px;
}
</style>
