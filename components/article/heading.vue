<template>
  <article-cover-heading v-if="article_.cover" :article="article_" :small="small"></article-cover-heading>
  <article-regular-heading v-else :article="article_"></article-regular-heading>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {CoreArticle} from "~/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({})
export default class ArticleHeading extends Vue {
  @Prop() article!: CoreArticle;
  @Prop() page!: IContentDocument;
  @Prop({default: false}) small!: boolean;

  article_ = this.article;

  created() {
    if (!this.article_) {
      this.article_ = CoreArticle.fromNuxtContent(this.page);
    }
  }
}
</script>

<style scoped>
</style>
