<template>
  <video ref="video" :src="src" :about="alt" muted autoplay loop :controls="controls"
         @dblclick="requestFullScreen"></video>
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

  mounted() {
    const video = this.$refs.video as HTMLVideoElement;
    // Если звук видео был включен в фулскрине,
    // то отрубаем его при выходе из фулскрина
    video.addEventListener(
      "fullscreenchange",
      ev => video.muted = true,
    );
  }

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
