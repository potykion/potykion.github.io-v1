<template>
  <div class="bg">
    <div class="container">
      <h1>FIN / Цели</h1>


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
import {GoogleSpreadsheet} from "google-spreadsheet";


interface FinGoal {
  name: string;
  reqSum: number;
  curSum: number;
  deadline: Date;
}

@Component({
  layout: 'private',
  async asyncData(ctx: Context) {

    const doc = new GoogleSpreadsheet(ctx.$config.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: ctx.$config.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: ctx.$config.GOOGLE_PRIVATE_KEY,
    });

    await doc.loadInfo();

    const sheet = doc.sheetsById[540559671];
    // await sheet.loadHeaderRow();

    const goalRows = await sheet.getRows();
    const goals = goalRows.map(r => ({
      name: r.name,
      reqSum: r.reqSum,
      curSum: r.curSum,
      deadline: r.deadline,

    }));

    return {goals};
  }
})
export default class fin extends Vue {
  goals!: FinGoal[];
  // = [
    // {name: 'Абик', reqSum: 90 * 1000, curSum: 7173.42, deadline: new Date(2023, 3 - 1, 24)},
    // {name: 'Хата', reqSum: 75 * 1000, curSum: 75369.59, deadline: new Date(2022, 6 - 1, 30)},
    // {name: 'Отпуск', reqSum: 100 * 1000, curSum: 35132.28, deadline: new Date(2022, 8 - 1, 23)},
    // {name: 'Новая хаточка', reqSum: 170 * 1000, curSum: 42 * 1000, deadline: new Date(2022, 11 - 1, 5)},
    // {name: 'Колечко', reqSum: 45 * 1000, curSum: 24 * 1000, deadline: new Date(2022, 11 - 1, 15)},
    // {name: 'Инвестиции', reqSum: 50 * 1000, curSum: 0, deadline: new Date(2022, 6 - 1, 30)},
  // ]
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

</style>
