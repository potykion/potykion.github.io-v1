<template>
  <article>

    <template v-if="article.tags.length">
      <span v-for="tag in article.tags" class="font-bold">{{ tagToStr[tag] || tag }}</span>
      <span>·</span>
    </template>
    <span class="text-gray-500 text-sm">{{ article.createdAtStr }}</span>


    <template v-if="article.title">
      <nuxt-link class="no-underline" :to="article.link"><h2>{{ article.title }}</h2></nuxt-link>
    </template>


    <template v-if="full || !article.rawArticle.excerpt">
      <nuxt-content :document="article.rawArticle"/>
    </template>
    <template v-else>
      <nuxt-content :document="{ body: article.rawArticle.excerpt }"/>
      <nuxt-link :to="article.link">Читать далее</nuxt-link>
    </template>


  </article>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {ArticleVM, tagToStr} from "~/logic/cool-story/vms";

@Component({})
export default class CoolStoryArticle extends Vue {
  @Prop() article!: ArticleVM;
  @Prop({default: false}) full!: boolean;
  tagToStr = tagToStr;
}
</script>

<style scoped>

</style>
