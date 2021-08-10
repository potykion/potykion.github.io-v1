<template>
  <div class="rounded shadow bg-white w-32 h-40 flex hover:bg-pink-200 align-middle justify-center py-2 cursor-pointer flex-shrink-0">
    <div class="grid grid-rows-4 justify-items-center">
      <img class="object-scale-down row-span-3 h-full p-3"  :src="img" :alt="title">
      <div class="row-span-1 m-auto">
        <div class="text-center text-sm">{{ title }}</div>
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

@Component({
})
export default class entity extends Vue {
  @Prop() title!: string;
  @Prop() img!: string;

}
</script>

<style scoped>
</style>
