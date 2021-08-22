<template>
  <div>

    <article-heading title="Кулстори" emote="coolstorybob" description="Свалка историй для пацанов"></article-heading>
    <hr>

    <h3 class=" text-center ">Витрина эпичных кулстори</h3>
    <div class="flex justify-between space-x-2 ">
      <template v-for="a in topArticles">
        <nuxt-link :key="a.link" :to="a.link" class="no-underline flex-1 ">
          <div class="bg-white rounded p-2 shadow text-center h-24 md:h-32 hover:bg-pink-200">
            <div class="text-gray-500 text-sm">{{ a.createdAtStr }}</div>
            <div class="py-1 font-bold  flex    justify-center  ">
              <span>{{ a.title }}</span>
            </div>
            <div class="hidden md:block text-gray-500 text-sm">{{ a.description }}</div>
          </div>

        </nuxt-link>

      </template>
    </div>

    <hr/>
    <article-preview v-for="article in allArticles" :key="article.title" :article="article"
                     :show-extra="true"></article-preview>
  </div>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {Context} from "@nuxt/types";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";
import {generateSeoHead} from "~/logic/core/seo";


@Component({
  async asyncData({$content}: Context) {
    const allArticles = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")
        .fetch() as IContentDocument
    ).map(buildArticleVM);

    const topArticles = (await Promise.all([
      $content("cool-story/sosedi").fetch(),
      $content("cool-story/fruit-ninja").fetch(),
      $content("cool-story/pure").fetch(),
    ]) as IContentDocument[]).map(buildArticleVM);

    return {allArticles, topArticles};
  },
  // fetchOnServer: false,
  head() {
    return generateSeoHead(
      "Кулстори",
      "Свалка историй для пацанов",
      "/cool-story",
      "2021-06-26",
    );
  }
})
export default class coolStory extends Vue {
  allArticles!: ArticleVM[];
  topArticles!: ArticleVM[];

}

</script>
