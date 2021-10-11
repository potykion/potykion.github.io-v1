<template>
  <article>
    <article-heading :article="article"></article-heading>
    <hr>

    <template v-if="article.showToc">
      <article-toc :toc="article.content.toc"></article-toc>
    </template>

    <nuxt-content :document="article.content"/>
  </article>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";
import {CoreArticle} from "~/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";
import {fixIds} from "~/logic/core/id";


@Component({
  async asyncData({$content, params}: Context) {
    let page = await $content(params.pathMatch).fetch() as IContentDocument;
    fixIds(page.body.children);
    fixIds(page.toc);
    return {page: page};
  }
})
export default class ArticlePage extends Vue {
  page!: IContentDocument;

  get article(): CoreArticle {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }
}
</script>

<style scoped>

</style>
