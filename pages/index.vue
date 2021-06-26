<template>
  <main class="flex h-screen ">
    <div class="m-auto text-center p-2">
      <nuxt-content :document="page" />
    </div>
  </main>
</template>

<script>
export default {
  layout: "blank",
  async asyncData({$content, params}) {
    const page = await $content("index").fetch();
    return {page};
  },
  head() {
    return {
      title: this.page.title,
    }
  },
}
</script>


