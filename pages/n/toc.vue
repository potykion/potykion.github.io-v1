<template>
  <div>
    <article-heading :article="article"></article-heading>
    <hr>
    <nuxt-content :document="article.content"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CoreArticle} from "~/logic/core/models";
import {Context} from "@nuxt/types";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}: Context) {
    let page = await $content("n/toc").fetch() as IContentDocument;

    page.pages = {
      n: {...await $content("n/index").fetch() as IContentDocument, path: "/n"},
      rent: await $content("n/rent").fetch() as IContentDocument,
      principles: await $content("n/principles").fetch() as IContentDocument,
      goals: await $content("n/goals2021").fetch() as IContentDocument,
    }

    return {page};
  }

})
export default class IndexPage extends Vue {
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
