<template>


  <div class="flex flex-col h-screen">
    <nav class="bg-pink-400">
      <div class="mx-auto px-4 ">
        <nav class="h-14 flex  justify-between space-x-4 lg:space-x-6">
          <brand/>
          <div class="flex flex-grow lg:space-x-6">
            <nav-item class="flex-grow lg:flex-grow-0" to="/cool-story" title="Кулстори" emote="coolstorybob"/>
            <nav-item class="flex-grow lg:flex-grow-0" to="/exp" title="Экспериенс" emote="5Head"/>
            <nav-item class="flex-grow lg:flex-grow-0" to="/dev" title="Разработка" emote="support"/>
          </div>
          <nav-item to="/changelog" title="v2.5.0"/>
        </nav>
      </div>

    </nav>

    <main class="flex-grow mt-2">
      <div class="article-container">
        <Nuxt/>
      </div>
    </main>

    <footer>
      <div class="article-container">
        <hr/>
        <div class="h-12 ">
          Есть что сказать? <a href="https://t.me/potykion">Напиши мне!</a>
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

@Component
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
  @apply container mx-auto px-3 lg:px-32 xl:px-64 2xl:px-96;
}
</style>
