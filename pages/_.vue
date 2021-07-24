<template>
  <nuxt-content :document="page"/>

</template>

<script>
export default {
  async asyncData({$content, params}) {
    const page = await $content(params.pathMatch).fetch();
    return {page};
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          name: 'description',
          content: this.page.description
        },
      ],

    }
  },
}
</script>
