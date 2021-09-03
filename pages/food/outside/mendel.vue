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
import {CoreArticle} from "../../../logic/core/models";

@Component({
  async asyncData({$content, params}) {
    return {page: await $content("food/outside/mendel").fetch() as IContentDocument};
  },
})
export default class mendel extends Vue {
  page!: IContentDocument;

  get article() {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }

}
</script>

<style scoped>
.card {
  @apply bg-white rounded py-4 px-2 md:px-6
}

</style>
