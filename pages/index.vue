<template>
  <main>
    <div
      class="bg-black my-auto h-screen px-3 lg:px-32 xl:px-64 2xl:px-96 grid grid-rows-4 grid-flow-col items-center justify-items-center">
      <div class="self-end">
        <div class="header ">Блог из-под палк<span class="last">И</span></div>
      </div>

      <div class="row-span-2 flex flex-col space-y-2">
        <nuxt-link to="/cool-story">
          <img src="/images/index/cool-story.png" alt="Кулстори">
        </nuxt-link>
        <nuxt-link to="/dev">
          <img src="/images/index/dev.png" alt="Разработка">
        </nuxt-link>
        <nuxt-link to="/food">
          <img src="/images/index/food.png" alt="Про еду">
        </nuxt-link>
        <nuxt-link to="/n">
          <img src="/images/index/n.png" alt="Обо мне">
        </nuxt-link>
        <!--        <nuxt-link  to="/archive">-->
        <!--          <img src="/images/index/archive.png" alt="Архив">-->
        <!--        </nuxt-link>-->
        <nuxt-link to="/changelog">
          <img src="/images/index/changelog.png" alt="Ченжлог">
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {CoreArticle} from "~/logic/core/models";

@Component(
  {
    layout: "blank"
  }
)
export default class IndexPage extends Vue {
  article = new CoreArticle(
    null,
    "/",
    "Блог из-под палки",
    "Блог с кулсторями, заметками про разработку и экспериенс жизненный",
    new Date("2021-01-03"),
    [],
    false,
    "/images/n/blog.png",
  )

  head() {
    return this.article.seoHead;
  }
}
</script>


<style scoped>
.header {
  font-family: AmazDooMLeft;
  @apply text-6xl lg:text-8xl text-center text-white;
}

.last {
  font-family: AmazDooMRight;
}

img {
  @apply h-11
}

</style>
