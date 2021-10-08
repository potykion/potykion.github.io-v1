<template>
  <div>
    <article-heading :article="article"></article-heading>
    <hr/>

    <article-preview v-for="article in allArticles" :key="article.title" :article="article"
                     :show-extra="true"></article-preview>
  </div>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {Context} from "@nuxt/types";
import {generateSeoHead} from "~/logic/core/seo";
import {CoreArticle} from "~/logic/core/models";


@Component({
  async asyncData({$content}: Context) {
    const allPages = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")
        .fetch() as IContentDocument
    );

    const topPages = (await Promise.all([
      $content("cool-story/sosedi").fetch(),
      $content("cool-story/fruit-ninja").fetch(),
      $content("cool-story/pure").fetch(),
    ]) as IContentDocument[]);

    return {allPages, topPages};
  },
})
export default class coolStory extends Vue {
  allPages!: IContentDocument[];
  topPages!: IContentDocument[];

  get allArticles() {
    return this.allPages.map(p => CoreArticle.fromNuxtContent(p));
  }

  get topArticles() {
    return this.topPages.map(p => CoreArticle.fromNuxtContent(p));
  }

  article = new CoreArticle(
    null,
    "/cool-story",
    "Кулстори",
    "Свалка историй для пацанов",
    new Date(2021, 6, 26),
    [],
    true,
    undefined,
    "coolstorybob",
  )

  head() {
    return this.article.seoHead;
  }


}

</script>
