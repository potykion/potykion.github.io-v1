<template>
  <div class="flex flex-col h-screen">
    <core-nav/>

    <main class="flex-grow mt-2">
      <div class="article-container">
        <Nuxt/>
      </div>
    </main>

    <footer>
      <div class="article-container">
        <hr/>
        <div class="h-12 ">
          Есть что сказать? Напиши мне в <a href="https://t.me/potykion">тг</a> или <a href="https://new.donatepay.ru/@potyk">анонимно</a>!
        </div>
      </div>
    </footer>
  </div>

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

import {annotate, annotationGroup} from 'rough-notation';

@Component({
  middleware: 'auth'
})
export default class Default extends Vue {

  mounted() {
    // annotationGroup(
    //   Array.from(document.querySelectorAll(".nav-link-text"))
    //     .map(l => annotate(l as HTMLElement, {type: 'underline'}))
    // )
    //   .show();


  }
}
</script>

<style>

.article-container {
  @apply container mx-auto px-2 lg:px-32 xl:px-64 2xl:px-96;
}
</style>
