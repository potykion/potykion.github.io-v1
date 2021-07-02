<template>
  <article class="py-2">
    <template v-if="article.title">
      <h2>{{ article.title }}</h2>
    </template>

    <template v-if="article.tags.length">
      <div v-for="tag in article.tags"
           :class="[tag, 'rounded-full', 'px-3', 'py-1', 'inline-block']">
        {{ tagToStr(tag) }}
      </div>
      <span>·</span>
    </template>

    <span class="text-gray-500 text-sm">{{ article.createdAtStr }}</span>

    <template v-if="!full">
      <span>·</span>
      <nuxt-link :to="article.link">Фулл</nuxt-link>
    </template>

    <nuxt-content :document="article.rawArticle"/>

  </article>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {ArticleVM, tagToStr} from "~/logic/cool-story/vms";

@Component({})
export default class CoolStoryArticle extends Vue {
  @Prop() article!: ArticleVM;
  @Prop({default: false}) full!: boolean;
  tagToStr = tagToStr;
}
</script>

<style scoped>
.epic {
  @apply bg-purple-600 text-yellow-400
}

.cooking {
  @apply bg-yellow-300 text-yellow-600
}

</style>
