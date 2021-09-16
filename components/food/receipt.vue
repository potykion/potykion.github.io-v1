<template>
  <div class="p-4 bg-yellow-50 font-bold  font-mono rounded flex space-x-2">
    <div>🧾</div>

    <div>
      <template v-for="p in positions_">
        <span>{{ p.title }}<span v-if="p.price"> - {{ p.price }}р</span></span><br>
      </template>
      ---<br>
      Итог {{ sum_ }}р
    </div>

  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
  PropSync
} from "nuxt-property-decorator"


interface ReceiptPosition {
  title: string;
  price?: number;
}

@Component({})
export default class receipt extends Vue {
  @Prop({required: true}) positions!: ReceiptPosition[];
  @Prop({default: null}) sum!: number | null;
  @Prop({default: false}) guessPrices!: boolean;

  positions_ = this.positions;
  sum_ = this.sum;


  created() {
    if (this.guessPrices) {
      this.positions_ = this.positions_
        .map(
          p => ({
            ...p,
            price: p.price ?? this._guessPrice(p)
          })
        );
    }

    if (this.sum_ === null) {
      this.sum_ = this.positions_
        .reduce(
          (previousValue, currentValue) => previousValue + (currentValue.price ?? 0),
          0
        );
    }
  }

  _guessPrice(p: ReceiptPosition): number | undefined {
    switch (p.title) {
      case "Яйца":
        return 80;
      case "Мука":
        return 100;
      case "Молоко":
        return 100;
      case "Ветчина":
        return 60;
      case "Хлеб тостовый":
        return 40;
      case "Помидоры":
        return 100;
      case "Мазик":
        return 70;
      case "Бекон":
        return 130;
      case "Колбаски":
        return 100;
      case "Фасоль в томатном соусе":
        return 140;
      case "Шампиньоны":
        return 100;
      default:
        return undefined;
    }
  }
}
</script>

<style scoped>
</style>
