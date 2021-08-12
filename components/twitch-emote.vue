<template>
  <img :src="emotePath" :alt="emote"
       :class="small ? 'emote-small': 'emote'"
       :width="small ? 24 : 32" :height="small ? 24 : 32">
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
    const normalized = this.emote.toLowerCase();

    if (normalized === "coolstorybob") {
      return "/images/twitch-emote/coolstorybob.webp";
    }
    if (normalized === "5head") {
      return "/images/twitch-emote/5head.webp";
    }
    if (normalized === "support" || normalized === "vohiyo") {
      return "/images/twitch-emote/vohiyo.webp";
    }
    if (normalized === "kappa") {
      return "/images/twitch-emote/kappa.webp";
    }
    if (normalized === "seemsgood" || normalized === "good") {
      return "/images/twitch-emote/seemsgood.png";
    }
    if (normalized === "sleep" || normalized === "sleeper" || normalized === "residentsleeper" || normalized === "resident-sleeper") {
      return "/images/twitch-emote/resident-sleeper.webp";
    }
    if (normalized === "salt" || normalized === "pjsalt") {
      return "/images/twitch-emote/pjsalt.png";
    }
    if (normalized === "casino") {
      return "/images/n/Чувак_из_казино.png";
    }
  }
}
</script>

<style scoped>
.emote {
  @apply h-8 w-8 inline-block;
}

.emote-small {
  @apply h-6 w-6 inline-block;
}

</style>
