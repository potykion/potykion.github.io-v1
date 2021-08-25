<template>
  <div class="relative">
    <img loading="lazy" class="bg" :src="src" :alt="alt" :style="{opacity}"/>
    <slot></slot>
  </div>

</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";

/**
 * Картинка-бекграунд
 * Можно использовать background-image, но он не лениво подгружается, так что лучше это использовать
 *
 * Пример использования content/n/index.md:
 * <img-bg src="/images/n/berew-i-risyew.png" alt="risovach-bg" :opacity="0.2">
 *    <div>
 *      ...
 *    </div>
 * </img-bg>
 *
 * ImgBg использует внешний div с position:relative, так что контент нужно вкладывать в ImgBg как слот
 */
@Component({})
export default class ImgBg extends Vue {
  // Путь к картинке
  @Prop({required: true}) src!: string;
  // Текст картинки
  @Prop({required: true}) alt!: string;
  // Прозрачность бекграунда
  @Prop({default: 1}) opacity!: number;
}
</script>

<style scoped>
.bg {
  @apply rounded object-cover;
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
