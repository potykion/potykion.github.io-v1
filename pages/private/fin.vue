<template>
  <div class="bg">
    <div class="container">
      <h1>FIN CALC</h1>

      <h2>Текущие цели</h2>

      <div class="goal-container">
        <div v-for="g in goals" :key="g.name" class="goal">
          <div class="relative z-10">
            <div class="opacity-40 z-0 absolute top-0 bg-green-400 h-full" :style="{width: `${Math.min(g.curSum / g.reqSum * 100, 100)}%`}"></div>


            <div class="p-2 ">
              <div class="flex justify-between">
                <div></div>
                <div class="text-sm">{{ g.name }}</div>
                <div></div>
              </div>

              <div class="text-xl text-center">{{ g.curSum }} ({{ Math.round(g.curSum / g.reqSum * 100) }} %)</div>
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

interface FinGoal {
  name: string;
  reqSum: number;
  curSum: number;
  deadline: Date;
}

@Component({
  layout: 'private'

})
export default class fin extends Vue {
  goals: FinGoal[] = [
    {name: 'Абик', reqSum: 90 * 1000, curSum: 7173.42, deadline: new Date(2023, 3 - 1, 24)},
    {name: 'Хата', reqSum: 75 * 1000, curSum: 75369.59, deadline: new Date(2022, 6 - 1, 30)},
    {name: 'Отпуск', reqSum: 100 * 1000, curSum: 35132.28, deadline: new Date(2022, 8 - 1, 23)},
    {name: 'Новая хаточка', reqSum: 170 * 1000, curSum: 42 * 1000, deadline: new Date(2022, 11 - 1, 5)},
    {name: 'Колечко', reqSum: 45 * 1000, curSum: 24 * 1000, deadline: new Date(2022, 11 - 1, 15)},
    {name: 'Инвестиции', reqSum: 50 * 1000, curSum: 0, deadline: new Date(2022, 6 - 1, 30)},
  ]
}
</script>

<style scoped>
.bg {
  @apply bg-gray-50;
}

.container {
  @apply bg-white mx-auto w-4/5 rounded-l p-4 mt-2;
}

h1 {
  @apply text-left;
}

.goal {
  @apply border  rounded;
}

.goal-container {
  @apply space-y-2;
}

</style>
