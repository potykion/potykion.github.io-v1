<template>
  <div>
    <h1>Поиск 🔍🔍🔍</h1>
    <hr>

    <input @input="search" :value="$route.query.q" />

    <template v-if="allArticles.length > 0">
      <cool-story-viewer :all-articles="allArticles"/>

    </template>
    <template v-else>
      <div>
        Чувак, ты думал что-то здесь будет? О, нет. От тебя воняет говном, даже отсюда чувствую. Закрывай, закрывай блог
        и
        иди нахуй. Я крутой, а ты лоханулся, сука.
      </div>
    </template>

  </div>


</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue, Watch,
} from "nuxt-property-decorator"
import {Context} from "@nuxt/types";
import {IContentDocument} from "@nuxt/content/types/content";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";
import {generateSeoHead} from "~/logic/core/seo";

@Component({
  head() {
    return generateSeoHead(
      "Поиск",
      "Чувак, ты думал что-то здесь будет? О, нет. От тебя воняет говном, даже отсюда чувствую. Закрывай, закрывай блог и иди нахуй. Я крутой, а ты лоханулся, сука."
    );
  },
  async asyncData({$content, query}: Context) {
    let searchQuery = $content("/cool-story")
      .sortBy("createdAt", "desc");
    if (query.q) {
      searchQuery = searchQuery.search(query.q);
    }
    if (query.tag) {
      searchQuery = searchQuery.where({"tags": {$contains: query.tag}});
    }

    return {
      allArticles: (await searchQuery.fetch() as IContentDocument).map(buildArticleVM)
    };
  }
})
export default class search extends Vue {
  allArticles: ArticleVM[] = [];


  async search() {
    const query = this.$route.query;
    let searchQuery = this.$content("/cool-story")
      .sortBy("createdAt", "desc");
    searchQuery = query.q ? searchQuery.search(query.q) : searchQuery;
    searchQuery = query.tag ? searchQuery.where({"tags": {$contains: query.tag}}) : searchQuery;


    this.allArticles = (await searchQuery.fetch() as IContentDocument).map(buildArticleVM);
  }
}
</script>

<style scoped>
</style>
