<template>
  <nuxt-content :document="page.rawArticle"/>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {IContentDocument} from "@nuxt/content/types/content";
import {ArticleVM, articleVMToSeoHead, buildArticleVM} from "~/logic/cool-story/vms";
import {generateSeoHead} from "~/logic/core/seo";

@Component({
  async asyncData({$content, params}) {
    return {page: buildArticleVM(await $content("food/outside/mendel").fetch() as IContentDocument)};
  },
})
export default class mendel extends Vue {
  page!: ArticleVM;

  head() {
    return articleVMToSeoHead(this.page);
  }

}
</script>

<style scoped>
.card {
  @apply bg-white rounded py-4 px-2 md:px-6
}

</style>
