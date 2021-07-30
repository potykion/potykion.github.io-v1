<template>
  <nav class="bg-pink-400 ">
    <div class="mx-auto px-4 h-14">
      <div v-if="!showSearch" class="flex justify-between space-x-2 lg:space-x-6">
        <brand/>
        <div class="flex-grow flex justify-between space-x-2 lg:space-x-6">
          <nav-item class="flex-grow lg:flex-grow-0" to="/cool-story" title="Кулстори" emote="coolstorybob"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/exp" title="Экспериенс" emote="5Head"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/dev" title="Разработка" emote="support"/>
          <div class="hidden lg:inline lg:flex-grow"></div>

          <button class="border-none flex-grow lg:flex-grow-0 flex items-center justify-center" @click="showSearch = true">
            🔍
          </button>

          <nav-item to="/changelog" title="v2.6.0"/>
        </div>
      </div>

      <form v-else class="flex h-full space-x-2" method="get" action="/search">
        <button type="submit" class="border-none flex flex-grow-0 items-center justify-center">🔍</button>
        <input class="my-2 px-2 flex-grow rounded outline-none" autofocus placeholder="Поиск (пока ток по кулсторям)" name="q" v-model="q"/>
        <button class="border-none flex flex-grow-0 items-center justify-center" @click="showSearch = false">❌</button>
      </form>

      <ul
        v-if="articles.length"
        class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"
      >
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black"
          >
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>


    </div>


  </nav>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue, Watch,
} from "nuxt-property-decorator"
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";

@Component({})
export default class CoreNav extends Vue {
  showSearch = false;

  articles: ArticleVM[] = [];

  q: string = "";

  @Watch("q")
  async onQuery() {
    if (!this.q) {
      this.articles = [];
      return
    }

    this.articles = (await this.$content('cool-story')
      .limit(6)
      .search(this.q)
      .fetch()).map(buildArticleVM);
  }

}
</script>

