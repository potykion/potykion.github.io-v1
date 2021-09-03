<template>
  <article>
    <article-heading :article="article"/>

    <nuxt-content :document="page"/>
  </article>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CoreArticle} from "@/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}) {
    const page = await $content("food/outside/index").fetch();
    return {page};
  }
})
export default class OutsidePage extends Vue {
  page!: IContentDocument;

  get article() {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }
}
</script>
