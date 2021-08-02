<template>
  <nuxt-content :document="page"/>

</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  async asyncData({$content, params}) {
    const page = await $content("archive/index").fetch();
    return {page};
  },
  head() {
    return generateSeoHead(this.page.title, this.page.description);
  },
}
</script>
