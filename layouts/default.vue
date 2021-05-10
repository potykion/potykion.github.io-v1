<template>


  <div class="flex flex-col h-screen ">
    <nav class="bg-pink-400">
      <div class="mx-auto px-4 ">
        <div class="h-12 flex items-center justify-between">


          <nuxt-link to="/" class="nav-link">
            <div class="nav-link-text">
              блог из-под палки
            </div>
          </nuxt-link>

          <nuxt-link to="/changelog" class="nav-link">
            <div class="nav-link-text">
              v1.6.4
            </div>
          </nuxt-link>

        </div>
      </div>

    </nav>

    <main class="flex-grow">
      <div class="article-container">
        <Nuxt/>
        <!-- Чуток спейса для удобства -->
        <div class="h-4">

        </div>
      </div>

    </main>

    <footer>
      <div class="article-container">
        <hr/>
        <div class="  h-12 flex ">
          Все права защищены законом © 2021
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
    annotationGroup(
      Array.from(document.querySelectorAll(".nav-link-text"))
        .map(l => annotate(l as HTMLElement, {type: 'underline'}))
    )
      .show();

    document.querySelectorAll("code").forEach(e => e.innerHTML = e.innerHTML.trim());

  }
}
</script>

<style>
.nav-link {
  @apply no-underline text-white visited:text-white py-1 ;
}

.nav-link-text {
  @apply leading-none;
}

.article-container {
  @apply container mx-auto px-3 lg:px-32 xl:px-64 2xl:px-96;
}
</style>
