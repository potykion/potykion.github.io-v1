<template>
  <div>
    <h1>
      Кулстори
      <twitch-emote emote="coolstorybob"></twitch-emote>
    </h1>

    <template v-for="(article, index) in articlesToShow">
      <cool-story-article :article="article"/>
      <hr v-if="index !== articlesToShow.length - 1">
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
    const allArticles = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")

        .fetch() as IContentDocument
    ).map(buildArticleVM);

    const articlesLimit = 5;

    return {
      allArticles,
      articlesLimit,
      fromArticles: articlesLimit,
      articlesToShow: allArticles.slice(0, articlesLimit),
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
  allArticles!: ArticleVM[];
  articlesToShow!: ArticleVM[];

  fromArticles!: number;
  articlesLimit!: number;
  moreArticles = true;

  async loadMoreArticles() {
    let articlesPage = this.allArticles.slice(this.fromArticles, this.fromArticles + this.articlesLimit);
    this.articlesToShow = [...this.articlesToShow, ...articlesPage];
    this.moreArticles = articlesPage.length === this.articlesLimit;
    this.fromArticles += this.articlesLimit;
  }
}

</script>
