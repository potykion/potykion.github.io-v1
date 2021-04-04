<template>
  <div>


    <h2>Как блог делается</h2>

    <p>Тут будут описано чем и как я пилю блог</p>

    <ul>

      <li>
        <b>Стек:</b> <a href="https://nuxtjs.org/">Nuxtjs</a> + <a href="https://tailwindcss.com/">Tailwindcss</a>
      </li>
      <li>
        <b>Анимашка подчеркивания:</b> <a href="https://github.com/rough-stuff/rough-notation">rough-notation </a>
      </li>
      <li>
        <b>Подсветка кода:</b> <a href="https://highlightjs.org/">highlightjs</a>
      </li>

      <li>
        <b>Просмотрщик картинок:</b> <a href="https://github.com/mirari/v-viewer">v-viewer</a>
      </li>
      <li>
        <b>Свайпер:</b> <a
        href="https://github.com/surmon-china/vue-awesome-swiper">vue-awesome-swiper</a>

      </li>

      <li>

        <b>Копирование текста</b>: <a href="https://clipboardjs.com/">clipboardjs</a>

      </li>
      <li>
        <b>Favicon:</b>
        <a href="https://favicon.io/favicon-converter/">https://favicon.io/favicon-converter/</a>
      </li>
      <li>
        <b>Рендер маркдауна в хтмл:</b>
        <a href="https://markdown-it.github.io/">https://markdown-it.github.io/</a>
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
