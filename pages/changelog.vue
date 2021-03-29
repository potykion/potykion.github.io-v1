<template>
  <div>
    <h1>Ченжлог</h1>

    <h2>1.3.2 - 2021-03-29</h2>
    <ul>
      <li>
        <nuxt-link to="/small">/small:</nuxt-link>
        фикс опечатки (стол > ствол)
      </li>
      <li>
        Анимашка подчеркивания в хедере
      </li>
    </ul>

    <h2>1.3.1 - 2021-03-25</h2>
    <ul>
      <li>
        <nuxt-link to="/small">/small:</nuxt-link>
        киберпанк
      </li>
      <li>
        <nuxt-link to="/cooking">/cooking:</nuxt-link>
        терияки с помидорами
      </li>
      <li>
        <nuxt-link to="/goals2021">/goals2021:</nuxt-link>
        друзья в оригинале
      </li>
      <li>
        Нормальный свайпер и просмотрщик картинок
      </li>
    </ul>

    <h2>1.3.0 - 2021-03-17</h2>
    <ul>
      <li>
        <nuxt-link to="/gigs">/gigs:</nuxt-link>
        про концики
      </li>
      <li>
        Сжал картинки где имело смысл
      </li>
      <li>
        <nuxt-link to="/dance">/dance:</nuxt-link>
        пару слов про плейлисты
      </li>
      <li>
        <nuxt-link to="/goals2021">/goals2021:</nuxt-link>
        цели на лето
      </li>
      <li>
        <nuxt-link to="/wishlist">/wishlist:</nuxt-link>
        Худи
      </li>
    </ul>

    <h2>1.2.0 - 2021-03-16</h2>
    <ul>
      <li>
        <nuxt-link to="/goals2021">/goals2021:</nuxt-link>
        про цели на 2021
      </li>
    </ul>

    <h2>1.1.0 - 2021-03-11</h2>
    <ul>
      <li>
        <nuxt-link to="/pure">/pure:</nuxt-link>
        аутро с благодарностью
      </li>
      <li>
        <nuxt-link to="/small">/small:</nuxt-link>
        Пучача и циан
      </li>
    </ul>

    <h2>1.0.0 - 2021-03-11</h2>
    <ul>
      <li>
        Все, что есть на данный момент
      </li>
    </ul>

  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Ченжлог"
  }),
})
export default class changelog extends Vue {

}
</script>

<style scoped>
</style>
