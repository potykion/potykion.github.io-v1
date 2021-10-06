<template>
  <nuxt-content :document="article.content"/>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CoreArticle} from "~/logic/core/models";
import {Context} from "@nuxt/types";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}: Context) {
    let page = await $content("index").fetch() as IContentDocument;

    page.pages = {
      breakfast: await $content("food/home/breakfast").fetch() as IContentDocument,
      pythonGsheets: await $content("dev/python/gsheets").fetch() as IContentDocument,
      principles: await $content("n/principles").fetch() as IContentDocument,
      gigs: await $content("cool-story/gigs-08-21").fetch() as IContentDocument,
    }

    return {page};
  }

})
export default class IndexPage extends Vue {
  page!: IContentDocument;

  get article(): CoreArticle {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }

}
</script>


<style scoped>

</style>
