<template>
  <div>
    <h1 v-if="article.big">
      {{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
    </h1>
    <h2 v-else>
      {{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote>
    </h2>

    <article-caption :class="[article.big ? 'text-center' : '']" :text="article.description"></article-caption>
    <hr/>
  </div>
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
}
</script>

<style scoped>
</style>
