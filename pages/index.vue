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

    page.pages = Object.fromEntries(
      (await Promise.all([
        $content("dev/postman").fetch(),
        $content("dev/py/gsheets").fetch(),
        $content("dev/py/pyenv").fetch(),
        $content("dev/py/test-gae").fetch(),
        $content("dev/py/test").fetch(),
        $content("dev/py/xlsx").fetch(),
        $content("n/rent").fetch(),
        $content("n/principles").fetch(),
        $content("n/index").fetch(),
        $content("n/goals-2022").fetch(),
        $content("cool-story/gigs-08-21").fetch(),
        $content("cool-story/bad-day").fetch(),
        $content("cool-story/pure").fetch(),
      ]) as IContentDocument[]).map(p => [p.path.substr("/".length), p])
    );
    page.pages["n"] = {...page.pages["n/index"], path: "n"};

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
