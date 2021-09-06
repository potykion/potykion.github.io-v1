<template>
  <img-bg :src="article.cover" alt="cover" :opacity="0.2" class="shadow">
    <div class="px-4 py-8">
      <template v-if="article.big">
        <h1>
          {{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
        </h1>
        <article-caption class="text-center" :text="article.description" ></article-caption>
      </template>
      <template v-else>
        <h2>
          {{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
        </h2>
        <article-caption :text="article.description" ></article-caption>
      </template>

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
