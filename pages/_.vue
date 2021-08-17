<template>
  <article>
    <article-heading :title="page.title" :description="page.description" :small="!page.big" />
    <hr />
    <nuxt-content :document="page"/>
  </article>


</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  async asyncData({$content, params}) {
    const page = await $content(params.pathMatch).fetch();
    return {page};
  },
  head() {
    return generateSeoHead(
      this.page.title,
      this.page.description,
      this.page.path,
      this.page.createdAt,
    );
  },
}
</script>
