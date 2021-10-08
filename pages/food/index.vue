<template>
  <div>
    <article-heading :article="article"></article-heading>
    <hr>

    <article-preview v-for="a in articles" :article="a" :key="a.title"></article-preview>



  </div>

</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {CoreArticle} from "~/logic/core/models";

@Component({
  async asyncData({$content, params}) {
    const pages = (await Promise.all([
      $content("food/home/breakfast").fetch(),
      $content("food/outside/mendel").fetch(),

      $content("food/home/delivery").fetch(),
    ]) as IContentDocument[])

    return {pages};
  },
})
export default class Food extends Vue {

  get articles() {
    return this.pages.map(p => CoreArticle.fromNuxtContent(p));
  }

  article = new CoreArticle(
    null,
    "/food",
    "Про еду",
    'Пробую решить проблему "бля что поесть"',
    new Date(2021, 8, 11),
    [],
    true,
    undefined,
    "salt"
  );

  head() {
    return this.article.seoHead;
  }
}
</script>

<style scoped>

</style>

