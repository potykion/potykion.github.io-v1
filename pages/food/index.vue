<template>
  <div>
    <article-heading :article="article"></article-heading>

    <h2>Едим дома</h2>
    <article-preview v-for="a in homeArticles" :article="a" :key="a.title"></article-preview>


    <h2>Едим не дома</h2>
    <article-preview v-for="a in outsideArticles" :article="a" :key="a.title"></article-preview>


  </div>

</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {CoreArticle} from "~/logic/core/models";

@Component({
  async asyncData({$content, params}) {
    const homePages = (await Promise.all([
      $content("food/home/breakfast").fetch(),

      $content("food/home/delivery").fetch(),
    ]) as IContentDocument[]);

    const outsidePages = (await Promise.all([
      $content("food/outside/mendel").fetch(),
    ]) as IContentDocument[]);

    return {homePages, outsidePages};
  },
})
export default class Food extends Vue {
  homePages!: IContentDocument[];
  outsidePages!: IContentDocument[];

  get homeArticles() {
    return this.homePages.map(p => CoreArticle.fromNuxtContent(p));
  }

  get outsideArticles() {
    return this.outsidePages.map(p => CoreArticle.fromNuxtContent(p));
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

