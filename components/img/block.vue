<template>
  <swiper-slide>
    <div class="flex justify-center" style="cursor: zoom-in">
      <figure class="flex flex-col items-center  ">
        <img loading="lazy" :src="src" :alt="alt" :class="['rounded', imgClass]" />
        <figcaption class="pt-2 md:pt-5" v-if="showCaption">{{ alt }}</figcaption>
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

/**
 * Картинка-блок - занимает всю строку
 * Обычно, используется вместе с ImgSwiper - так получается свайпер/каруселька картинок
 *
 * Пример использования content/n/index.md:
 * <img-swiper>
 *  <img-block src="/images/n/blog.png" alt="Главная бложика"></img-block>
 * </img-swiper>
 */
@Component({})
export default class ImgBlock extends Vue {
  // Путь к картинке
  @Prop({required: true}) src!: string;
  // Текст картинки
  @Prop({required: true}) alt!: string;
  // CSS-класс(ы), применяемый к картинке
  @Prop() imgClass!: string;
  // Показывать {alt} как подпись к картинке
  @Prop({default: true}) showCaption!: boolean;
}
</script>

<style scoped>
img {
  @apply max-w-full max-h-96 object-cover;
}

</style>
