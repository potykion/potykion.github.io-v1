<template>
  <main class="flex h-screen">
    <div class="mx-auto text-center p-2 ">

      <div class="h-full flex flex-col between space-y-2">


        <div class="flex-grow"></div>

        <h1 class="tracking-widest uppercase">блог из-под палки</h1>

        <div class="flex flex-col space-y-2">
          <nuxt-link to="/cool-story">
            <button >
              Что со мной происходит
              <twitch-emote small emote="coolstorybob"></twitch-emote>
            </button>
          </nuxt-link>
          <nuxt-link to="/exp">
            <button >
              Как я живу
              <twitch-emote small emote="5Head"></twitch-emote>
            </button>
          </nuxt-link>
          <nuxt-link to="/dev">
            <button >
              Про разработку
              <twitch-emote small emote="support"></twitch-emote>
            </button>
          </nuxt-link>

        </div>

        <div class="flex-grow"></div>

        <div>
          <nuxt-link to="/changelog">v2.6.0</nuxt-link> © <nuxt-link to="/n">потикон</nuxt-link>
        </div>

      </div>

    </div>



  </main>
</template>

<script>
export default {
  layout: "blank",
  head() {
    return {
      title: "Блог из-под палки",
      meta: [
        {
          name: 'description',
          content: "Блог с кулсторями, заметками про разработку и экспериенс жизненный"
        },
      ],
    }
  },
}
</script>


<style scoped>
button {
  @apply w-full py-2
}
</style>
