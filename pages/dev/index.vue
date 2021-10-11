<template>
  <div>
    <article-heading :article="article"></article-heading>
    <hr>
    <nuxt-content :document="article.content"/>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {CoreArticle} from "~/logic/core/models";
import {replaceAll} from "~/logic/core/str";

@Component({
  async asyncData({$content, params}) {
    let page = await $content("dev/index").fetch() as IContentDocument;
    page.pages = Object.fromEntries(
      (await $content("dev", {deep: true}).fetch() as IContentDocument[])
        .map(p => [p.path.substr("/dev/".length), p])
    );
    console.log(Object.keys(page.pages))

    return {page};
  },
})
export default class DevIndex extends Vue {
  page!: IContentDocument;

  get article(): CoreArticle {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }
}


</script>
