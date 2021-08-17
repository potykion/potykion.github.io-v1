<template>
  <cool-story-article :article="article" :full="true"/>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {Context} from "@nuxt/types";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";
import {IContentDocument} from "@nuxt/content/types/content";
import {generateSeoHead} from "~/logic/core/seo";

@Component({
  async asyncData({$content, params}: Context) {
    return {
      article: buildArticleVM(await $content(`/cool-story/${params.pathMatch}`).fetch() as IContentDocument)
    }
  }

})
export default class SingleCoolStoryPage extends Vue {
  article!: ArticleVM;

  head() {
    return generateSeoHead(
      this.article.title,
      this.article.description,
      this.article.link,
      this.article.createdAtStr,
    );
  };
}
</script>

<style scoped>
</style>
