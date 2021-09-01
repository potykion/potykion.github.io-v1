<template>
  <video :src="src" :about="alt" muted autoplay loop :controls="controls" @dblclick="requestFullScreen"></video>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class CoreVideo
  extends Vue {
  @Prop({required: true}) src!: string;
  @Prop({required: true}) alt!: string;
  @Prop({default: true}) controls!: boolean;

  requestFullScreen(e: Event) {
    (e.target as HTMLVideoElement).requestFullscreen();
  }
}
</script>

<style scoped>
video {
  @apply max-h-96 w-full;
}
</style>
