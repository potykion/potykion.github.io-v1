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
      food: {
        breakfast: await $content("food/home/breakfast").fetch() as IContentDocument,
        mendel: await $content("food/outside/mendel").fetch() as IContentDocument,
      },
      dev: {
        pythonGsheets: await $content("dev/python/gsheets").fetch() as IContentDocument,
        vueFirebaseAuth: await $content("dev/vue/firebase").fetch() as IContentDocument,
        flutterAds: await $content("dev/flutter/ads").fetch() as IContentDocument,
      },
      n: {
        principles: await $content("n/principles").fetch() as IContentDocument,
        n: {...await $content("n/index").fetch() as IContentDocument, path: "/n"},
        goals: await $content("n/goals2021").fetch() as IContentDocument,
      },
      "cool-story": {
        gigs: await $content("cool-story/gigs-08-21").fetch() as IContentDocument,
        badDay: await $content("cool-story/bad-day").fetch() as IContentDocument,
        pure: await $content("cool-story/pure").fetch() as IContentDocument,
      }
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
