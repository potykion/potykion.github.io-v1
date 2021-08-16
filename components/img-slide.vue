<template>
  <swiper-slide>
    <div class=" flex justify-center ">
      <figure class="flex flex-col items-center  ">
        <img :src="src" :alt="alt" :class="['rounded', imgClass]" loading="lazy" :width="width" :height="height" />
        <figcaption v-if="showCaption">{{ alt }}</figcaption>
      </figure>
    </div>
  </swiper-slide>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {SwiperOptions} from "swiper";

@Component
export default class ImgSlide extends Vue {
  @Prop({required: true}) src!: string;
  @Prop({required: true}) alt!: string;
  @Prop() imgClass!: string;

  @Prop({default: true}) showCaption!: boolean;

  @Prop() width!: number;
  @Prop() height!: number;
}
</script>

<style scoped>
img {
  @apply max-w-full max-h-96 object-cover;
}

</style>
