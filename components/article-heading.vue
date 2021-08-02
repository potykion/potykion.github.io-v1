<template>
  <div>
    <template v-if="small">
      <h2>
        {{ title }}
        <twitch-emote v-if="emote" :emote="emote"></twitch-emote>
      </h2>
    </template>
    <template v-else>
      <h1>
        {{ title }}
        <twitch-emote v-if="emote" :emote="emote"></twitch-emote>
      </h1>

    </template>
    <p :class="['text-gray-500', 'text-sm', small ? '' : 'text-center']">{{ description }}</p>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class ArticleHeading extends Vue {
  @Prop() title!: string;
  @Prop() description!: string;
  @Prop() emote!: string;
  @Prop({default: false}) small!: boolean;
}
</script>

<style scoped>
</style>
