<template>
  <article class="py-2">
    <div class="flex justify-between items-center">
      <div>
        <template v-if="article.title">
          <h2 class="inline-block">{{ article.title }}</h2>
          <span>·</span>
        </template>
        <span class="text-gray-500 text-sm">{{ article.createdAtStr }}</span>

        <template v-if="article.tags.length">
          <span>·</span>
          <div v-for="tag in article.tags"
               :class="[tag.bgColor, tag.textColor, 'rounded-full', 'px-3', 'py-1', 'inline-block']">
            {{ tag.text }}
          </div>
        </template>
      </div>

      <div>
        <nuxt-link v-if="!full" :to="article.link">Фулл</nuxt-link>
      </div>
    </div>
    <div>
    </div>


    <nuxt-content :document="article.rawArticle"/>

  </article>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {ArticleVM} from "~/logic/cool-story/vms";

@Component({})
export default class CoolStoryArticle extends Vue {
  @Prop() article!: ArticleVM;
  @Prop({default: false}) full!: boolean;
}
</script>

<style scoped>
</style>
