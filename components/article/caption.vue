<template>
  <p class="text-gray-500 text-sm">{{ text }}</p>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class ArticleCaption extends Vue {
  @Prop({required: true}) text!: string;
}
</script>

<style scoped>
</style>
