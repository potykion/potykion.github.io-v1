<template>
  <main class="flex h-screen">
    <div class="mx-auto text-center p-2 ">

      <div class="h-full flex flex-col between space-y-2">


        <div class="flex-grow"></div>

        <h1 class="tracking-widest uppercase">блог из-под палки</h1>

        <div class="flex flex-col space-y-2">
          <nuxt-link to="/cool-story">
            <button>
              Кулстори
              <twitch-emote small emote="coolstorybob"></twitch-emote>
            </button>
          </nuxt-link>

          <nuxt-link to="/dev">
            <button>
              Разработка
              <twitch-emote small emote="support"></twitch-emote>
            </button>
          </nuxt-link>
          <nuxt-link to="/cooking">
            <button>
              Кукинг
              <twitch-emote small emote="salt"></twitch-emote>
            </button>
          </nuxt-link>

          <nuxt-link to="/n">
            <button>
              Обо мне
              <twitch-emote small emote="kappa"></twitch-emote>
            </button>
          </nuxt-link>
          <nuxt-link to="/archive">
            <button>
              Архив
              <twitch-emote small emote="sleep"></twitch-emote>
            </button>
          </nuxt-link>
        </div>

        <div class="flex-grow"></div>

        <div class="py-4">
          <nuxt-link to="/changelog">v2.7.0</nuxt-link>
          ©
          <nuxt-link to="/n">потикон</nuxt-link>
        </div>

      </div>

    </div>


  </main>
</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  layout: "blank",
  head() {
    return generateSeoHead(
      "Блог из-под палки",
      "Блог с кулсторями, заметками про разработку и экспериенс жизненный"
    );
  },
}
</script>


<style scoped>
button {
  @apply w-full py-2
}
</style>
