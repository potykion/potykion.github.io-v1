<template>
  <div v-viewer="{title: true, toolbar: false, navbar: false}">
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

/**
 * Свайпер/каруселька картинок
 * Работает только с ImgBlock
 *
 * Пример использования content/n/index.md:
 * <img-swiper>
 *  <img-block src="/images/n/blog.png" alt="Главная бложика"></img-block>
 * </img-swiper>
 */
@Component({})
export default class ImgSwiper extends Vue {
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
