<template>
  <img :src="emotePath" class="emote" :alt="emote">
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class TwitchEmote
  extends Vue {

  @Prop() emote!: string;

  get emotePath() {
    if (this.emote === "coolstorybob") {
      return "/images/coolstorybob.png.webp";
    }
    if (this.emote === "5Head") {
      return "/images/5Head-Emote.png.webp";
    }
    if (this.emote === "support") {
      return "/images/Vohiyo.png.webp";
    }
  }
}
</script>

<style scoped>
</style>
