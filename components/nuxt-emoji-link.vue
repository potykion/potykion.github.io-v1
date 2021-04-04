<template>
  <a :href="to">
    <img src="~/assets/nuxt.png" class=" emote-small" alt="nuxt">
  </a>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class NuxtEmojiLink extends Vue {
  @Prop() to!: string;

}
</script>

<style scoped>
</style>
