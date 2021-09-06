<template>
  <article>
    <article-heading :article="article" />
    <nuxt-content :document="article.content"/>
  </article>
</template>

<script lang="ts">
import {IContentDocument} from "@nuxt/content/types/content";
import {Component, Vue} from "nuxt-property-decorator";
import {CoreArticle} from "~/logic/core/models";

@Component({
  async asyncData({$content, params}) {
    const page = await $content("n/index").fetch();
    return {page};
  },
})
export default class NPages extends Vue {
  page!: IContentDocument;

  get article() {
    let article_ = CoreArticle.fromNuxtContent(this.page);
    article_.big = true;
    article_.emote = "kappa";
    article_.ldjson = {"@type": "Person", "name": "Nikita Leybovich",};
    return article_;
  }

  head() {
    return this.article.seoHead;
  }
}
</script>

<style scoped>
.card {
  @apply px-4 md:px-4 py-4 rounded my-4 shadow;

}

.white-text {
  @apply text-white;
}

.white-text a {
  @apply text-white;
}

.white-text a:visited {
  @apply text-white;
}

.white-text figcaption {
  @apply text-white !important;
}

/* Custom */

.steam {
  position: relative;
}


.spotify {
  @apply card white-text;
  background-color: rgb(80, 40, 240);
  --background-noise: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=");
  background-image: linear-gradient(rgba(0, 0, 0, .6) 0, #121212 100%), var(--background-noise);
}

.spotify > iframe {
  @apply h-60 w-full;
}


.kp-card {
  @apply my-4 rounded shadow;
  background: linear-gradient(90deg, #fff, #f9f9f9 5%, #f9f9f9 95%, #fff);
}

/* region: kp */
.kp-card > h3 {
  @apply text-white py-4 px-4;
  background: #1F1F1F;
}

.kp-card > .kp-body {
  @apply px-3 md:px-4 pb-1;
}

.kp-card a {
  @apply no-underline;
  color: #060077;
}

.kp-card a:hover {
  color: #f60;
}

.kp-card a:visited {
  color: #060077;
}
/* endregion */

.casino {
  @apply card;
  position: relative;
}


.vdud {
  @apply card white-text bg-black;
}


.programmer {
  @apply card;
  background: rgb(185, 255, 216);
  background: linear-gradient(180deg, rgba(185, 255, 216, 1) 0%, rgba(90, 114, 152, 1) 100%);
}

.aim {
  @apply text-center h-52 rounded flex justify-center flex-col py-6 shadow;
}

.aim a {
  @apply text-black no-underline;
}

</style>
