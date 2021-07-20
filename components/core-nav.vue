<template>
  <nav class="bg-pink-400 ">
    <div class="mx-auto px-4 h-14">
      <div v-if="!showSearch" class="flex justify-between space-x-2 lg:space-x-6">
        <brand/>
        <div class="flex-grow flex justify-between space-x-2 lg:space-x-6">
          <nav-item class="flex-grow lg:flex-grow-0" to="/cool-story" title="Кулстори" emote="coolstorybob"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/exp" title="Экспериенс" emote="5Head"/>
          <nav-item class="flex-grow lg:flex-grow-0" to="/dev" title="Разработка" emote="support"/>
          <div class="hidden lg:inline lg:flex-grow"></div>

          <button class="border-none flex-grow lg:flex-grow-0 flex items-center justify-center" @click="showSearch = true">
            🔍
          </button>

          <nav-item to="/changelog" title="v2.5.0"/>
        </div>
      </div>

      <form v-else class="flex h-full space-x-2" method="get" action="/search">
        <button type="submit" class="border-none flex flex-grow-0 items-center justify-center">🔍</button>
        <input class="my-2 px-2 flex-grow rounded outline-none" autofocus placeholder="Поиск (пока ток по кулсторям)" name="q"/>
        <button class="border-none flex flex-grow-0 items-center justify-center" @click="showSearch = false">❌</button>
      </form>


    </div>


  </nav>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class CoreNav extends Vue {
  showSearch = false;
}
</script>

