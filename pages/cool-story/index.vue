<template>
  <div>
    <h1>
      Кулстори
      <twitch-emote emote="coolstorybob"></twitch-emote>
    </h1>

    <template v-for="(article, index) in articles">
      <cool-story-article :article="article"/>
      <hr v-if="index !== articles.length - 1">
    </template>

    <div class="flex justify-center">
      <button v-if="moreArticles" @click="loadMoreArticles">Еще</button>
      <!--       todo ералаш -->
      <span v-else>Все!</span>
    </div>
  </div>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {Context} from "@nuxt/types";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";


@Component({
  async asyncData({$content, query}: Context) {
    const articlesLimit = 5;

    const articles = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")
        .limit(articlesLimit)
        .fetch() as IContentDocument
    ).map(buildArticleVM);

    return {
      articles,
      articlesLimit,
      fromArticles: 0,
      moreArticles: articles.length === articlesLimit
    };
  },
  // fetchOnServer: false,
  head() {
    return {
      title: "Кулстори",
    }
  }
})
export default class coolStory extends Vue {
  articles!: ArticleVM[];

  fromArticles!: number;
  articlesLimit!: number;
  moreArticles = true;

  async loadMoreArticles() {
    this.fromArticles += this.articlesLimit;
    const articles = (
      await this.$content("/cool-story")
        .sortBy("createdAt", "desc")
        .limit(this.articlesLimit)
        .skip(this.fromArticles)
        .fetch() as IContentDocument[]
    ).map(buildArticleVM);
    this.articles = [...this.articles, ...articles];
    this.moreArticles = articles.length === this.articlesLimit;
  }
}

</script>
