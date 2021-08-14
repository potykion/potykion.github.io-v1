<template>
  <article>
    <article-heading :title="page.title" :description="page.description" emote="kappa" />
    <hr/>
    <nuxt-content :document="page"/>
  </article>
</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  async asyncData({$content, params}) {
    const page = await $content("n/index").fetch();
    return {page};
  },
  head() {
    return generateSeoHead(this.page.title, this.page.description);
  },
}
</script>
