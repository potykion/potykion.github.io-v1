<template>
  <section>
    <article-heading title="Кукинг" description="Несложные, опробованные рецепты" :small="true"></article-heading>

    <article-preview v-for="page in cookingPages" :key="page.title" :article="page"></article-preview>
  </section>

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {generateSeoHead} from "~/logic/core/seo";
import {Context} from "@nuxt/types";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";

@Component({
  head() {
    return generateSeoHead(
      "Кукинг",
      "Несложные, опробованные рецепты",
      "/food/home/cooking",
      "2021-08-11"
    );
  },
  async asyncData(ctx) {
    const cookingPages = (await ctx.$content("food/home/cooking").fetch()).map(buildArticleVM);
    return {cookingPages};
  }
})
export default class CookingPage extends Vue {
  cookingPages!: ArticleVM[];
}
</script>

<style scoped>
</style>
