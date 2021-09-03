<template>
  <img loading="lazy" :src="emotePath" :alt="emote"
       class="inline-block"
       :width="size === 'small' ? 24 : size === 'big' ? 60 : 32"
       :height="size === 'small' ? 24 : size === 'big' ? 60 : 32"
  >
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

/**
 * Картинка-эмоут - иконочка, используемая в тексте
 * Сами картинки находятся в static/images/emote
 *
 * Пример использования:
 * <img-emote size="small" emote="coolstorybob"></img-emote>
 */
@Component({})
export default class ImgEmote extends Vue {
  // Название эмоута
  @Prop({required: true}) emote!: string;
  // Размер эмоута
  @Prop({default: "default"}) size!: "small" | "big" | "default"

  get emotePath(): string {
    switch (this.emote.toLowerCase()) {
      case "coolstorybob":
        return "/images/emote/coolstorybob.webp";
      case "5head":
        return "/images/emote/5head.webp";
      case "support":
      case "vohiyo":
        return "/images/emote/vohiyo.webp";
      case "kappa":
        return "/images/emote/kappa.webp";
      case "seemsgood":
      case "good":
        return "/images/emote/seemsgood.png";
      case "sleep":
      case "sleeper":
      case "residentsleeper":
      case "resident-sleeper":
        return "/images/emote/resident-sleeper.webp";
      case "salt":
      case "pjsalt":
        return "/images/emote/pjsalt.png";
      case "casino":
        return "/images/emote/casino-dude.png";
      case "isaac":
        return "/images/emote/isaac.png";
      case "vdud":
        return "/images/emote/vdud.gif";
    }
    throw `Хз че за эмоут такой: ${this.emote}`;
  }
}
</script>

<style scoped>
</style>
