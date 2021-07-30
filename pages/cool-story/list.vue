<template>
  <div>
    <h2>Список всех кулстори</h2>
    <ul>
      <li v-for="a in listArticles">
        <a :href="a.link"> {{ a.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {IContentDocument} from "@nuxt/content/types/content";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";
import {generateSeoHead} from "~/logic/core/seo";

@Component({
  head() {
    return generateSeoHead(
      "Список всех кулстори",
      "Только заголовки и даты"
    );
  },
  async asyncData({$content}) {
    const articles = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")
        .fetch() as IContentDocument
    ).map(buildArticleVM);
    return {articles};
  }
})
export default class spisok extends Vue {
  articles!: ArticleVM[];

  get listArticles() {
    return this.articles.map(a => ({
      link: a.link,
      title: [a.title, a.createdAtStr].filter(a => a).join(" · ")
    }));
  }
}
</script>

<style scoped>
</style>
