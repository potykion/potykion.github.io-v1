<template>
  <div v-viewer="{title: false, toolbar: false, navbar: false}" class="images">
    <swiper ref="mySwiper" :options="swiperOptions">
      <slot></slot>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {SwiperOptions} from "swiper";

@Component
export default class NewImgRow extends Vue {
  get swiperOptions(): SwiperOptions {
    const slides = this.$slots.default?.filter(t => !!t.tag).length ?? 0;
    return {
      pagination: {
        el: '.swiper-pagination',
      },
      // Если одна картинка, то убираем пагинацию
      enabled: slides > 1,
    };
  }

}
</script>

<style scoped>

</style>
