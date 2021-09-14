<template>
  <div class="p-4 bg-yellow-50 font-bold  font-mono rounded flex space-x-2">
    <div>🧾</div>

    <div>
      <template v-for="p in positions">
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
} from "nuxt-property-decorator"


interface ReceiptPosition {
  title: string;
  price?: number;
}

@Component({})
export default class receipt extends Vue {
  @Prop({required: true}) positions!: ReceiptPosition[];
  @Prop({default: null}) sum!: number | null;

  sum_ = this.sum;

  created() {
    if (this.sum_ === null) {
      this.sum_ = this.positions
        .reduce(
          (previousValue, currentValue) => previousValue + (currentValue.price ?? 0),
          0
        );
    }
  }
}
</script>

<style scoped>
</style>
