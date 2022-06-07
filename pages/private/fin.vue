<template>
  <div class="bg">
    <div class="container">
      <div class="flex justify-between">
        <div>
          <h1>FIN / Цели</h1>
        </div>
        <div>
          <button class="btn" @click="updateGoals">🔃 Синхронуть</button>
        </div>

      </div>


      <div class="goal-container">
        <div v-for="g in goals" :key="g.name" class="">
          <div>


            <div class="p-2 ">
              <div class="flex justify-between">
                <div></div>
                <div class="">{{ g.name }}</div>
                <div></div>
              </div>

              <div
                :style="{background: `linear-gradient(to right, #41d453 ${Math.round(Math.min(g.curSum / g.reqSum * 100, 100))}%, transparent 0)`}"
                class="text-xl text-center font-bold py-1 rounded border bg-gray-50">{{ g.curSum }}
                ({{ Math.round(g.curSum / g.reqSum * 100) }}%)
              </div>

              <div class="flex ">
                <div class="flex-1">0</div>
                <div class="flex-1 text-center">{{ Math.round((g.deadline - new Date()) / 1000 / 3600 / 24) }} дней
                  осталось
                </div>
                <div class="flex-1 text-right">{{ g.reqSum }}</div>
              </div>
            </div>


          </div>


        </div>
      </div>


    </div>
  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {Context} from "@nuxt/types";
import {loadFinGoals} from "~/logic/private/fin/cases";
import {FinGoal} from "~/logic/private/fin/models";
import {getGoalsFromCache, loadFinGoalsFromGSheets} from "~/logic/private/fin/utils";

@Component({
  layout: 'private',
  async asyncData({$config}) {
    return {goals: await loadFinGoalsFromGSheets($config)};
  },
  fetchKey: "goals",
  fetchOnServer: false,
})
export default class fin extends Vue {
  goals: FinGoal[] = [];

}
</script>

<style scoped>
.bg {
  @apply bg-gray-50;
}

.container {
  @apply bg-white mx-auto w-4/5 rounded-xl p-4 mt-2;
}

h1 {
  @apply text-left font-normal text-3xl p-0;
}


.goal-container {
  @apply space-y-2;
}

.btn {
  @apply bg-transparent hover:bg-green-100 p-3 rounded-3xl border-4 border-gray-100;
}

</style>
