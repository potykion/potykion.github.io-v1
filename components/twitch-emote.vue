<template>
  <img :src="emotePath" :class="small ? 'emote-small': 'emote'" :alt="emote">
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
  @Prop({default: false}) small!: boolean;

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
.emote {
  @apply h-8 inline-block;
}

.emote-small {
  @apply h-6 inline-block;
}

</style>
