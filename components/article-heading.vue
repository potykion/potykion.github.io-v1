<template>
  <div>
    <template v-if="small">
      <h2>
        {{ title }}
        <img-emote v-if="emote" :emote="emote"></img-emote>
      </h2>
    </template>
    <template v-else>
      <h1>
        {{ title }}
        <img-emote v-if="emote" :emote="emote"></img-emote>
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
