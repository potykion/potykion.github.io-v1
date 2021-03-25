<template>
  <div>


    <h2>Как блог делается</h2>

    <p>Тут будут описано чем и как я пилю блог</p>

    <h3>Стек</h3>
    <ul>
      <li><a href="https://nuxtjs.org/">Nuxtjs</a></li>
      <li><a href="https://tailwindcss.com/">Tailwindcss</a></li>
    </ul>


    <h3>Подсветка кода</h3>
    <ul>
      <li>
        <a href="https://highlightjs.org/">https://highlightjs.org/</a>
      </li>
      <li>
        <a href="https://www.npmjs.com/package/nuxt-highlightjs">
          https://www.npmjs.com/package/nuxt-highlightjs
        </a>
      </li>
    </ul>


    <h3>Картинки</h3>

    <ul>
      <li>
        <a href="https://github.com/mirari/v-viewer">https://github.com/mirari/v-viewer</a> - крутой просмотрщик
        картинок
      </li>
      <li>
        <a
          href="https://github.com/surmon-china/vue-awesome-swiper">https://github.com/surmon-china/vue-awesome-swiper</a>
        - крутой свайпер
      </li>
    </ul>

    <h3>Копирование текста</h3>

    <ul>
      <li>
        <a href="https://clipboardjs.com/">https://clipboardjs.com/</a>
      </li>
      <li>
        <a href="https://www.npmjs.com/package/vue-clipboard2">https://www.npmjs.com/package/vue-clipboard2</a>
      </li>
    </ul>


    <h3>Favicon</h3>

    <ul>
      <li>
        <a href="https://favicon.io/favicon-converter/">https://favicon.io/favicon-converter/</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">

import {
  Component,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Как блог делается"
  })
})
export default class cookingGuide extends Vue {

}
</script>
