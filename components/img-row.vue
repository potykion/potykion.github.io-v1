<template>
  <div class="flex space-x-1 overflow-x-auto ">
    <template v-for="img in images">
      <template v-if="imgIsObj(img)">
        <div>
          <img v-img="{group: imgGroup}" :src="require(`~/assets${img.img}`)" :alt="img.img">
          <div class="text-sm italic">{{ img.caption }}</div>
        </div>
      </template>
      <template v-else>
        <img v-img="{group: imgGroup}" :src="require(`~/assets${img}`)" :alt="img">
      </template>

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
  @Prop() images!: string[] | { img: string, caption: string }[];


  get imgGroup() {
    return strToHash(this.images.join());
  }

  imgIsObj(img: any): boolean {
    return typeof img !== "string";
  }
}
</script>

<style scoped>
img {
  @apply max-w-full lg:max-w-3xl;
  max-height: 48rem;

}
</style>
