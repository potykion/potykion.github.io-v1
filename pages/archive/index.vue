<template>
  <div>
    <article-heading :article="article"></article-heading>

    <article-preview v-for="a in articles" :article="a" :key="a.title"></article-preview>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CoreArticle} from "~/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}) {
    const pages = (await $content("archive", {deep: true}).fetch() as IContentDocument[])
      .filter(a => a.title);
    return {pages};
  }
})
export default class ArchivePage extends Vue {
  article = new CoreArticle(
    null,
    "/archive",
    "Архив",
    "Всякое недописанное/бесполезное, то, что нуждается в доработке/переработке",
    new Date(2021, 8, 2),
    [],
    true,
    undefined,
    "sleep",
  );


  pages!: IContentDocument[];

  get articles() {
    return this.pages.map(p => CoreArticle.fromNuxtContent(p));
  }

  head() {
    return this.article.seoHead;
  }
}
</script>
