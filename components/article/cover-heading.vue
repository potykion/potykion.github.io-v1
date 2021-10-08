<template>
  <nuxt-link :to="article.path" class="no-style">
    <div :class="preview ? 'rounded border-2 border-gray-100 hover:border-pink-300' : ''">
    <img-bg :src="article.cover" alt="cover" :opacity="0.15" style="z-index: 0" :blur="true">
      <div :class="['px-4', preview ? 'py-4' : 'py-8']" >
        <template v-if="article.big">
          <h1>{{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote></h1>
          <article-caption class="text-center" :text="article.description"></article-caption>
        </template>
        <template v-else>
            <h3 v-if="preview">{{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote></h3>
            <h2 v-else>{{ article.title }} <img-emote v-if="article.emote" :emote="article.emote"></img-emote></h2>
          <article-caption :text="article.description"></article-caption>
        </template>
      </div>
    </img-bg>
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
export default class ArticleCoverHeading extends Vue {
  @Prop({required: true}) article!: CoreArticle;
  @Prop({default: true}) preview!: boolean;
}
</script>

<style scoped>
</style>
