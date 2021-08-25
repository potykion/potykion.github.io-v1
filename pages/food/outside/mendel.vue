<template>
  <nuxt-content :document="page"/>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {IContentDocument} from "@nuxt/content/types/content";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";

@Component({
  async asyncData({$content, params}) {
    return {page: await $content("food/outside/mendel").fetch()};
  }
})
export default class mendel extends Vue {
  page!: ArticleVM;
}
</script>

<style scoped>
.card {
  @apply bg-white rounded py-4 px-2 md:p-6
}

</style>
