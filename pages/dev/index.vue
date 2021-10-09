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

@Component({
  async asyncData({$content, params}) {
    let page = await $content("dev/index").fetch() as IContentDocument;
    page.pages = {
      python: {
        gsheets: await $content("/dev/python/gsheets").fetch(),
        libs:    await $content("/dev/python/libs").fetch(),
      },
      vue: {
        firebase: await $content("/dev/vue/firebase").fetch(),
        libs:     await $content("/dev/vue/libs").fetch(),
      },
      flutter: {
        ads:           await $content("/dev/flutter/ads").fetch(),
        apk:           await $content("/dev/flutter/apk").fetch(),
        firebase:      await $content("/dev/flutter/firebase").fetch(),
        subscriptions: await $content("/dev/flutter/subscriptions").fetch(),
        libs:          await $content("/dev/flutter/libs").fetch(),
      },
      other: {
        cv:   await $content("/dev/cv").fetch(),
        how:  await $content("/dev/how").fetch(),
        base: await $content("/dev/base").fetch(),
      },
    }

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
