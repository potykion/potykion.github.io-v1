<template>
  <div>
    <article-heading
      title="Разработка"
      description="Тут можно почитать про мои разработческие навыки"
      emote="support"
    ></article-heading>

        <h2>Работадателю</h2>
        <template v-for="page in jobPages">
          <article-preview :article="page"></article-preview>
        </template>

        <h2>Python</h2>
        <template v-for="page in pythonPages">
          <article-preview :article="page"></article-preview>
        </template>

        <h2>Flutter</h2>
        <template v-for="page in flutterPages">
          <article-preview :article="page"></article-preview>
        </template>

        <h2>Vue</h2>
        <template v-for="page in vuePages">
          <article-preview :article="page"></article-preview>
        </template>

        <h2>Прочее</h2>
        <template v-for="page in otherPages">
          <article-preview :article="page"></article-preview>
        </template>
  </div>

</template>

<script lang="ts">
import {generateSeoHead} from "@/logic/core/seo";
import {ArticleVM, buildArticleVM} from "@/logic/cool-story/vms";
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  async asyncData({$content, params}) {
    const jobPages = (await Promise.all([
      $content("/dev/cv").fetch(),
      $content("/dev/work-expectations").fetch(),
      $content("/dev/vue/bio").fetch(),
      $content("/dev/algo").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    const pythonPages = (await Promise.all([
      $content("/dev/python/gsheets").fetch(),
      $content("/dev/python/libs").fetch(),
      $content("/dev/python/tests").fetch(),
      $content("/dev/python/faq").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    const flutterPages = (await Promise.all([
      $content("/dev/flutter/libs").fetch(),
      $content("/dev/flutter/apk").fetch(),
      $content("/dev/flutter/subscriptions").fetch(),
      $content("/dev/flutter/firebase").fetch(),
      $content("/dev/flutter/ads").fetch(),
      $content("/dev/flutter/codegen").fetch(),
      $content("/dev/flutter/faq").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    const vuePages = (await Promise.all([
      $content("/dev/vue/libs").fetch(),
      $content("/dev/vue/seo").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    const otherPages = (await Promise.all([
      $content("/dev/how").fetch(),
      $content("/dev/base").fetch(),
      $content("/dev/ideas").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    return {
      jobPages,
      pythonPages,
      flutterPages,
      vuePages,
      otherPages,
    };
  },
  head() {
    return generateSeoHead(
      "Разработка",
      "Тут можно почитать про мои разработческие навыки",
      "/dev",
      "2021-06-26",

    );
  },
})
export default class DevIndex extends Vue {
  jobPages!: ArticleVM[];
  pythonPages!: ArticleVM[];
  flutterPages!: ArticleVM[];
  vuePages!: ArticleVM[];
  otherPages!: ArticleVM[];
}


</script>
