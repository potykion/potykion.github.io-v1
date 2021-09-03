<template>
  <article-cover-heading v-if="article.cover" :article="article"></article-cover-heading>
  <article-regular-heading v-else :article="article"></article-regular-heading>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import {CoreArticle} from "~/logic/core/models";

@Component({})
export default class ArticleHeading extends Vue {
  @Prop({required: true}) article!: CoreArticle;
}
</script>

<style scoped>
</style>
