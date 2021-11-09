<template>
  <table>
    <thead>
    <tr>
      <th>На что?</th>
      <th>Сколько?</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in itemsSorted">
      <td>
        <span>{{ item.title }}</span>
        <template v-if="item.description">
          <br><span class="text-sm italic">{{ item.description }}</span>
        </template>
      </td>
      <td>{{ formatPrice(item.price) }}</td>
    </tr>
    <tr>
      <th>Итого</th>
      <th>{{ formatPrice(itemsSum) }}</th>
    </tr>

    </tbody>
  </table>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

export interface ExpensesItem {
  title: string;
  price: number;
}

@Component({})
export default class ExpensesTable extends Vue {

  @Prop() items!: ExpensesItem[];


  get itemsSorted() {
    return this.items.sort((i1, i2) => i2.price - i1.price);
  }

  get itemsSum() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  formatPrice(price: number) {
    return `${price.toLocaleString('ru-RU')} ₽`;
  }
}
</script>

<style scoped>
td, th {
  @apply border p-2;
}

td {
  @apply text-center;
}

table {
  @apply w-full;
}

</style>

