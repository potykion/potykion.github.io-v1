<template>
  <article>
    <article-heading :article="article"></article-heading>
    <nuxt-content :document="article.content"/>
  </article>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";
import {CoreArticle} from "~/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}: Context) {
    return {page: await $content(params.pathMatch).fetch() as IContentDocument};
  }
})
export default class ArticlePage extends Vue {
  // article!: CoreArticle;
  page!: IContentDocument;

  get article(): CoreArticle {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }
}
</script>
