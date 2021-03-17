<template>


  <div class="flex flex-col h-screen ">
    <nav class="bg-pink-400">
      <div class="mx-auto px-4 ">
        <div class="h-12 flex items-center justify-between">


          <nuxt-link to="/" class="nav-link">блог из-под палки</nuxt-link>

          <nuxt-link to="/changelog" class="nav-link">
            v1.3.0
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

<style>
.nav-link {
  @apply no-underline text-white visited:text-white py-1 font-light ;
}

.article-container {
  @apply container mx-auto px-4 lg:px-32 xl:px-64 2xl:px-96;
}
</style>
