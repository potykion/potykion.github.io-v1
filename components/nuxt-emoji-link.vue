<template>
  <a :href="to">
    <img v-if="isVue" src="/images/dev/vue.png" class=" emote-small" alt="vue">
    <img v-else src="/images/dev/nuxt.png" class=" emote-small" alt="nuxt">
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
  @Prop({default: false}) isVue!: boolean;

}
</script>

<style scoped>
.emote-small {
  @apply h-6 inline-block;
}

</style>
