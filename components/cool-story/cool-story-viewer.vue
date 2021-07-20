<template>
  <div>
    <template v-for="(article, index) in articlesToShow">
      <cool-story-article :article="article"/>
      <hr v-if="index !== articlesToShow.length - 1">
    </template>

    <div class="flex justify-center">
      <button v-if="moreArticles" @click="loadMoreArticles">Еще</button>
      <span v-else>Все!</span>
    </div>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {ArticleVM} from "~/logic/cool-story/vms";

@Component({})
export default class CoolStoryViewer extends Vue {
  @Prop() allArticles!: ArticleVM[];
  @Prop({default: 5}) articlesLimit!: number;

  fromArticles: number = 0;
  articlesToShow: ArticleVM[] = [];
  moreArticles = true;

  mounted() {
    this.loadMoreArticles();

  }

  async loadMoreArticles() {
    let articlesPage = this.allArticles.slice(this.fromArticles, this.fromArticles + this.articlesLimit);
    this.articlesToShow = [...this.articlesToShow, ...articlesPage];
    this.moreArticles = articlesPage.length === this.articlesLimit;
    this.fromArticles += this.articlesLimit;
  }

}
</script>

<style scoped>
</style>
