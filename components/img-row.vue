<template>
  <div class="flex space-x-1 overflow-x-auto">
    <template v-for="img in images">
      <img v-img="{group: imgGroup}" :src="require(`~/assets${img}`)" :alt="img">
    </template>
  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {strToHash} from "~/logic/core/utils/hash";

@Component
export default class ImgRow extends Vue {
  @Prop() images!: string[];


  get imgGroup() {
    return strToHash(this.images.join());
  }
}
</script>
