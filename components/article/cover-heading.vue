<template>
  <img-bg :src="article.cover" alt="cover" :opacity="0.2">
    <div class="px-4 py-8">
      <h1>
        {{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
      </h1>
      <article-caption class="text-center" :text="article.description" ></article-caption>
    </div>
  </img-bg>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {CoreArticle} from "~/logic/core/models";

@Component({})
export default class ArticleCoverHeading extends Vue {
  @Prop({required: true}) article!: CoreArticle;
}
</script>

<style scoped>
</style>
