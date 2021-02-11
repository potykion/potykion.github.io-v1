<template>


  <div>
    <nav class="bg-pink-400">
      <div class="mx-auto px-4 ">
        <div class="h-12 flex items-center">


          <template v-if="$route.path === '/'">
            <nuxt-link to="/" class="nav-link">Блог из-под палки</nuxt-link>
          </template>
          <template v-else>
            <nuxt-link to="/" class="nav-link hidden md:block">Блог из-под палки
            </nuxt-link>
            <nuxt-link to="/" class="nav-link md:hidden">Би—пП</nuxt-link>
          </template>
        </div>
      </div>

    </nav>


    <div class="container mx-auto px-4">
      <Nuxt/>
    </div>
  </div>

</template>

<style>
.nav-link {
  @apply no-underline text-white visited:text-white;
}
</style>
