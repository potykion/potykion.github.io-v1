<template>
  <div>
    <article-heading :article="article"></article-heading>

    <article-preview v-for="a in articles" :article="a" :key="a.title"></article-preview>
    <article-preview :article="artArticle"></article-preview>
    <article-preview :article="gigsArticle"></article-preview>
    <article-preview :article="ytArticle"></article-preview>
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

  artArticle = new CoreArticle(
    null,
    "/archive/art",
    'Рисовач',
    'Как научится рисовать, что делать если лень, куда я хожу',
    new Date("2021-06-18"),
    [],
    true,
  );
  gigsArticle = new CoreArticle(
    null,
    "/archive/gigs",
    'Гиги',
    'Концертики, которые я планирую посетить в этом году (если конечно они состоятся в такие ковидные времена)',
    new Date("2021-06-18"),
    [],
    true,
  );
  ytArticle = new CoreArticle(
    null,
    "/archive/yt",
    'Ютуб',
    'Моя история познания ютуба и каналы, которые я смотрю',
    new Date("2021-06-18"),
    [],
    true,
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
