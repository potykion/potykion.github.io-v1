<template>
  <div class="inline">
    <slot></slot>

    <span @click="open = !open" class="cursor-pointer ">
      <template v-if="open">🔼</template>
      <template v-else>🔽</template>
    </span>

    <template v-if="open">
      <div class="ml-8">
        <slot name="spoiled"></slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class Spoiler extends Vue {
  open = false;

}
</script>

<style scoped>


</style>
