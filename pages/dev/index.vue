<template>
  <div>
    <article-heading :article="article"></article-heading>

    <article-preview card-class="border-4 border-black" v-for="a in jobArticles" :article="a" :key="a.title"></article-preview>

    <h2>Python</h2>
    <article-preview v-for="a in pythonArticles" :article="a" :key="a.title"></article-preview>

    <h2>Flutter</h2>
    <article-preview v-for="a in flutterArticles" :article="a" :key="a.title"></article-preview>

    <h2>Vue</h2>
    <article-preview v-for="a in vueArticles" :article="a" :key="a.title"></article-preview>

    <h2>Прочее</h2>
    <article-preview v-for="a in otherArticles" :article="a" :key="a.title"></article-preview>
  </div>

</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {CoreArticle} from "~/logic/core/models";

@Component({
  async asyncData({$content, params}) {
    const jobPages = (await Promise.all([
      $content("/dev/cv").fetch(),
    ]) as IContentDocument[]);

    const pythonPages = (await Promise.all([
      $content("/dev/python/gsheets").fetch(),
      $content("/dev/python/libs").fetch(),
    ]) as IContentDocument[]);

    const flutterPages = (await Promise.all([
      $content("/dev/flutter/ads").fetch(),
      $content("/dev/flutter/apk").fetch(),
      $content("/dev/flutter/firebase").fetch(),
      $content("/dev/flutter/subscriptions").fetch(),
      $content("/dev/flutter/libs").fetch(),
    ]) as IContentDocument[]);

    const vuePages = (await Promise.all([
      $content("/dev/vue/firebase").fetch(),
      $content("/dev/vue/libs").fetch(),
    ]) as IContentDocument[]);

    const otherPages = (await Promise.all([
      $content("/dev/how").fetch(),
      $content("/dev/base").fetch(),
    ]) as IContentDocument[]);

    return {
      jobPages,
      pythonPages,
      flutterPages,
      vuePages,
      otherPages,
    };
  },
})
export default class DevIndex extends Vue {
  article = new CoreArticle(
    null,
    "/dev",
    "Разработка",
    "Тут можно почитать про мои разработческие навыки",
    new Date(2021, 6, 26),
    [],
    true,
    undefined,
    "support",
    undefined,
  );

  jobPages    !: IContentDocument[];
  pythonPages !: IContentDocument[];
  flutterPages!: IContentDocument[];
  vuePages    !: IContentDocument[];
  otherPages  !: IContentDocument[];

  get jobArticles() {
    return this.jobPages.map(p => CoreArticle.fromNuxtContent(p));
  };

  get pythonArticles() {
    return this.pythonPages.map(p => CoreArticle.fromNuxtContent(p));
  };

  get flutterArticles() {
    return this.flutterPages.map(p => CoreArticle.fromNuxtContent(p));
  };

  get vueArticles() {
    return this.vuePages.map(p => CoreArticle.fromNuxtContent(p));
  };

  get otherArticles() {
    return this.otherPages.map(p => CoreArticle.fromNuxtContent(p));
  };

  head() {
    return this.article.seoHead;
  }

}


</script>
