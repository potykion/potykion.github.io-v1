<template>
  <nuxt-link :to="article.path" class="no-underline ">
    <div class="rounded shadow px-3 py-3 my-1 hover:bg-pink-200 bg-white">
      <template v-if="showExtra">

        <template v-if="article.tagStrings.length">
          <template v-for="tag in article.tagStrings">
            <span class="text-gray-500 text-sm">{{ tag }}</span>
          </template>
          ·
        </template>

        <span class="text-gray-500 text-sm">{{ article.createdAtStr }}</span>
      </template>

      <h4>
        {{ article.title }}
      </h4>
      <span class="text-gray-500 text-sm">{{ article.description }}</span>
    </div>
  </nuxt-link>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {CoreArticle} from "~/logic/core/models";

@Component({})
export default class ArticlePreview extends Vue {
  @Prop({required: true}) article!: CoreArticle;
  @Prop({default: false}) showExtra!: boolean;
}
</script>

<style scoped>
</style>
