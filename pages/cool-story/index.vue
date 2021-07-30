<template>
  <div>
    <div class="flex justify-between ">
      <div></div>
      <div>
        <h1>
          Кулстори
          <twitch-emote emote="coolstorybob"></twitch-emote>
        </h1>
        <p class="text-center text-gray-500">Свалка историй для пацанов</p>
      </div>
      <div><nuxt-link class="no-underline" to="/cool-story/list">📖</nuxt-link></div>
    </div>


    <hr/>

    <cool-story-viewer :all-articles="allArticles"/>

  </div>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {Context} from "@nuxt/types";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";
import {generateSeoHead} from "~/logic/core/seo";


@Component({
  async asyncData({$content, query}: Context) {
    const allArticles = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")
        .fetch() as IContentDocument
    ).map(buildArticleVM);

    return {allArticles};
  },
  // fetchOnServer: false,
  head() {
    return generateSeoHead(
      "Кулстори",
      "Свалка историй для пацанов"
    );
  }
})
export default class coolStory extends Vue {
  allArticles!: ArticleVM[];
}

</script>
