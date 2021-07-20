<template>
  <div>
    <h1>
      Кулстори
      <twitch-emote emote="coolstorybob"></twitch-emote>
    </h1>

    <hr/>

    <cool-story-viewer :all-articles="allArticles"/>

  </div>


</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import {IContentDocument} from "@nuxt/content/types/content";
import {Context} from "@nuxt/types";
import {ArticleVM, buildArticleVM} from "~/logic/cool-story/vms";


@Component({
  async asyncData({$content, query}: Context) {
    const allArticles = (
      await $content("/cool-story")
        .sortBy("createdAt", "desc")
        .fetch() as IContentDocument
    ).map(buildArticleVM);

    return {allArticles};
  },
  fetchOnServer: false,
  head() {
    return {
      title: "Кулстори"
    }
  }
})
export default class coolStory extends Vue {
  allArticles!: ArticleVM[];
}

</script>
