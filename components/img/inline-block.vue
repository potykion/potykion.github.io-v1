<template>
  <div  style="display: inline-block">
    <figure v-viewer="{title: true, toolbar: false, navbar: false}" style="cursor: zoom-in"
            class="flex justify-center flex-col h-full">
      <img :src="src" :alt="alt" class="rounded object-contain h-full" loading="lazy"/>
      <figcaption class="pt-4" v-if="showCaption">{{ alt }}</figcaption>
    </figure>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";

/**
 * Просто картинка
 * Обычно, размещается вместе с другими данными во флекс-боксе
 *
 * Пример использования content/n/index.md:
 * <div class="flex justify-between">
 *   <div>...</div>
 *   <img-inline-block src="/images/n/risovach.jpg" alt="@poty_risovach"></img-inline-block>
 * </div>
 */
@Component({})
export default class ImgInlineBlock extends Vue {
  @Prop({required: true}) src!: string;
  @Prop({required: true}) alt!: string;
  @Prop({default: false}) showCaption!: boolean;
}
</script>

<style scoped>

</style>
