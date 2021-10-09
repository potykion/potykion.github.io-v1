<template>
  <div>
    <article-heading :article="article"></article-heading>
    <hr>
    <nuxt-content :document="article.content"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {CoreArticle} from "~/logic/core/models";

@Component({
  async asyncData({$content, params}) {
    let page = await $content("food/index").fetch() as IContentDocument;
    page.pages = {
      breakfast: await $content("food/home/breakfast").fetch(),
      mendel: await $content("food/outside/mendel").fetch(),
      delivery: await $content("food/home/delivery").fetch(),
    }

    return {page};
  },
})
export default class Food extends Vue {
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

