<template>
  <nav class="bg-pink-400 ">
    <div class="mx-auto px-2 lg:px-4 h-14">
      <div v-if="!showSearch" class="flex justify-between space-x-2 lg:space-x-6">
        <brand/>
        <div class="flex-grow flex justify-between space-x-2 lg:space-x-6">
          <nav-item class="flex-grow lg:flex-grow-0" to="/dev" title="Разработка" emote="support"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/food" title="Еда" emote="salt"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/n/toc" title="Лайфстайл" emote="kappa"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/cool-story" title="Кулстори" emote="coolstorybob"/>
          <div class="hidden lg:inline lg:flex-grow"></div>

<!--          <button class="border-none flex-grow lg:flex-grow-0 flex items-center justify-center"-->
<!--                  @click="showSearch = true">-->
<!--            🔍-->
<!--          </button>-->

          <nav-item class="hidden lg:block" to="/changelog" title="v3.0.0"/>
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
            :to="article.path"
            @click.native="closeSearch"
            class="flex px-4 py-2 items-center  hover:text-black visited:text-pink-400 no-underline"
            :key="article.path"
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
import {CoreArticle} from "~/logic/core/models";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({})
export default class CoreNav extends Vue {
  showSearch = false;

  articles: CoreArticle[] | null = null;

  q: string = "";

  @Watch("q")
  async onQuery() {
    if (!this.q) {
      this.articles = [];
      return
    }

    this.articles = (
      await this.$content(["cool-story", "dev", "cooking", "n", "archive"], {deep: true})
      .limit(10)
      .search(this.q)
      .fetch() as IContentDocument[]
    ).map(p => CoreArticle.fromNuxtContent(p));
  }

  closeSearch() {
    this.q = "";
    this.showSearch = false;
    this.articles = [];
  }

}
</script>

