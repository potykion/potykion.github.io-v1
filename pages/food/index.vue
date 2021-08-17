<template>
  <div>
    <article-heading title="Про еду" description='Пробую решить проблему "бля что поесть"'
                     emote="salt"></article-heading>

    <h2>Едим дома</h2>

    <article-preview v-for="page in homePages" :article="page" :key="page.title"></article-preview>

    <h2>Едим не дома</h2>

    <article-preview v-for="page in outsidePages" :article="page" :key="page.title"></article-preview>

  </div>

</template>

<script lang="ts">
import {generateSeoHead} from "@/logic/core/seo";
import {Component, Vue} from "nuxt-property-decorator";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}) {
    const homePages = (await Promise.all([
      {title: "Кукинг", description: "Несложные, опробованные рецепты", path: "/food/home/cooking"},
      $content("food/home/products").fetch(),
      $content("food/home/delivery").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    const outsidePages = (await Promise.all([
      $content("food/outside").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    return {homePages, outsidePages};
  },
  head() {
    return generateSeoHead(
      "Про еду",
      'Пробую решить проблему "бля что поесть"',
      "/food",
      "2021-08-11"
    );
  }
})
export default class Food extends Vue {
  homePages!: ArticleVM[];
  outsidePages!: ArticleVM[];
}
</script>

<style scoped>

</style>

