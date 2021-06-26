<template>
  <nuxt-content :document="page"/>

</template>

<script>
export default {
  async asyncData({$content, params}) {
    const page = await $content("exp/index").fetch();
    return {page};
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>
