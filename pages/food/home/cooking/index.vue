<template>
  <section>
    <article-heading :article="article"></article-heading>

    <article-preview v-for="a in cookingArticles" :key="a.title" :article="a"></article-preview>
  </section>

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {CoreArticle} from "~/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData(ctx) {
    const cookingPages = (await ctx.$content("food/home/cooking").fetch());
    return {cookingPages};
  }
})
export default class CookingPage extends Vue {
  cookingPages!: IContentDocument[];

  get cookingArticles() {
    return this.cookingPages.map(p => CoreArticle.fromNuxtContent(p));
  }

  article = new CoreArticle(
    null,
    "/food/home/cooking",
    "Кукинг",
    "Несложные, опробованные рецепты",
    new Date("2021-08-11"),
    [],
    false,
  );

  head() {
    return this.article.seoHead;
  }
}
</script>

<style scoped>
</style>
