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
  Watch
} from "nuxt-property-decorator"
import {ArticleVM} from "~/logic/cool-story/vms";

@Component({})
export default class CoolStoryViewer extends Vue {
  @Prop() allArticles!: ArticleVM[];
  @Prop({default: 6}) pageLimit!: number;

  limit = this.pageLimit;

  get articlesToShow() {
    return this.allArticles.slice(0, this.limit);

  }

  get moreArticles() {
    return this.allArticles.length > this.articlesToShow.length;
  }

  async loadMoreArticles() {
    this.limit += this.pageLimit;
  }

}
</script>

<style scoped>
</style>
