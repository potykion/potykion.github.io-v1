<template>
  <nav class="bg-pink-400 ">
    <div class="mx-auto px-2 lg:px-4 h-14">
      <div v-if="!showSearch" class="flex justify-between space-x-2 lg:space-x-6">
        <brand/>
        <div class="flex-grow flex justify-between space-x-2 lg:space-x-6">
          <nav-item class="flex-grow lg:flex-grow-0" to="/cool-story" title="Кулстори" emote="coolstorybob"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/dev" title="Разработка" emote="support"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/cooking" title="Кукинг" emote="salt"/>

          <nav-item class="flex-grow lg:flex-grow-0" to="/n" title="Обо мне" emote="kappa"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/archive" title="Архив" emote="sleeper"/>
          <div class="hidden lg:inline lg:flex-grow"></div>

          <button class="border-none flex-grow lg:flex-grow-0 flex items-center justify-center"
                  @click="showSearch = true">
            🔍
          </button>

          <nav-item class="hidden lg:block" to="/changelog" title="v2.6.0"/>
        </div>
      </div>

      <div v-else class="flex h-full space-x-2">
        <div type="submit" class=" px-2 border-none flex flex-grow-0 items-center justify-center">🔍</div>
        <input class="my-2 px-2 flex-grow rounded outline-none" autofocus placeholder="Поиск"
               v-model="q" autocomplete="off"/>
        <button class="border-none flex flex-grow-0 items-center justify-center" @click="closeSearch">❌</button>
      </div>


    </div>

    <div
      v-if="articles"
      class="z-10 absolute w-full  top-14 bg-white rounded-md border  overflow-hidden"
    >
      <template v-if="articles.length">
        <template v-for="article of articles">
          <NuxtLink
            :to="article.link"
            @click.native="closeSearch"
            class="flex px-4 py-2 items-center  hover:text-black visited:text-pink-400 no-underline"
            :key="article.slug"
          >
            <div>
              <div>{{ article.title }}</div>
              <div class="text-sm text-gray-500">{{ article.description }}</div>
            </div>
          </NuxtLink>
        </template>

      </template>
      <template v-else-if="q">
        <div class="px-4 py-2">
          Чувак, ты думал что-то здесь будет? О, нет. От тебя воняет говном, даже отсюда чувствую.
          Закрывай, закрывай блог и иди нахуй. Я крутой, а ты лоханулся, сука.
        </div>
      </template>
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

  articles: ArticleVM[] | null = null;

  q: string = "";

  @Watch("q")
  async onQuery() {
    if (!this.q) {
      this.articles = [];
      return
    }

    this.articles = (await this.$content(["cool-story", "dev", "cooking", "n", "archive"], {deep: true})
      .limit(10)
      .search(this.q)
      .fetch()).map(buildArticleVM);
  }

  closeSearch() {
    this.q = "";
    this.showSearch = false;
    this.articles = [];
  }

}
</script>

