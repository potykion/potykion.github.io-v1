<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="img in images" :key="img">
      <div class=" flex justify-center">
        <template v-if="imgIsObj(img)">
          <div>
            <img v-img="{group: imgGroup}" :src="require(`~/assets${img.img}`)" :alt="img.img">
            <div class="text-sm italic">{{ img.caption }}</div>
          </div>
        </template>
        <template v-else>
          <img v-img="{group: imgGroup}" :src="require(`~/assets${img}`)" :alt="img">
        </template>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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

  swiperOptions = {
    pagination: {
      el: '.swiper-pagination'
    },
    // Some Swiper option/callback...
  }

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
