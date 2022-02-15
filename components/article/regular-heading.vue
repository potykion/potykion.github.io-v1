<template>
  <nuxt-link :to="article.path" class="no-style">
    <div :class="[' rounded', preview ? 'px-4 py-2 hover:border-pink-300 border-gray-100 border-2' : 'py-2', article.content.color]">
      <h1 v-if="article.big">
        {{ article.title }}
        <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
      </h1>
      <h3 v-else-if="preview">
        {{ article.title }}
        <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
      </h3>
      <h2 v-else>
        {{ article.title }}
        <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
      </h2>

      <article-caption :class="[article.big ? 'text-center' : '']" :text="article.description"></article-caption>
    </div>
  </nuxt-link>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {CoreArticle} from "~/logic/core/models";

@Component({})
export default class ArticleRegularHeading
  extends Vue {
  @Prop({required: true}) article!: CoreArticle;
  @Prop({default: false}) preview!: boolean;
}
</script>

<style scoped>
</style>
