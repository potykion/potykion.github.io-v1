<template>
  <article>

    <h2>Vue / Любимые либы</h2>

    <h3>UI</h3>

    <ul>
      <li>
        <a href="https://github.com/vuetifyjs/vuetify">vuetify</a>
        <nuxt-emoji-link to="https://github.com/nuxt-community/vuetify-module"/>

        - лучший ui фреймворк про материал дезигн, все
        что надо есть: сетка, дейтпикеры, селекты и тд
      </li>
      <li>
        <a href="https://github.com/tailwindlabs/tailwindcss">tailwindcss</a>
        <nuxt-emoji-link
          to="https://github.com/nuxt-community/tailwindcss-module"/>

        - лучший css фреймворк, если не
        разрешили пользоваться vuetify
      </li>
      <li>
        <a href="https://github.com/charliekassel/vuejs-datepicker">vuejs-datepicker</a> - нормальный дейтпикер;
        альтернативы: <a href="https://github.com/ankurk91/vue-flatpickr-component">vue-flatpickr-component</a>
      </li>
      <li>
        <a href="https://github.com/shentao/vue-multiselect">vue-multiselect</a> - лучший селект
      </li>
      <li>
        <a href="https://github.com/rstacruz/nprogress">nprogress</a> - прогрессбар-полосочка; в Nuxt есть из коробки
      </li>
      <li>
        <a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a> - нормальный драг-н-дроп
      </li>
      <li>
        <a href="https://github.com/mirari/v-viewer">v-viewer</a> - крутой просмотрщик
        картинок
      </li>
      <li>
        <a
          href="https://github.com/surmon-china/vue-awesome-swiper">vue-awesome-swiper</a>
        - крутой свайпер
      </li>
      <li>
        <a href="https://github.com/PNKBizz/vue-yandex-map">vue-yandex-map</a> - яндекс карточки
      </li>
      <li>
        <a href="https://github.com/vuejs-tips/vue-the-mask">vue-the-mask</a> - маски для инпутов, напр. для
        телефонных номеров
      </li>

      <li>
        <a href="https://highlightjs.org/">highlightjs</a>
        <nuxt-emoji-link to="https://www.npmjs.com/package/nuxt-highlightjs"/>
        - подсветка кода
      </li>

      <li>
        <a href="https://clipboardjs.com/">clipboardjs</a>
        <nuxt-emoji-link to="https://www.npmjs.com/package/vue-clipboard2" :is-vue="true"/>
        - копирование текста
      </li>

      <li>
        <a href="https://github.com/rough-stuff/rough-notation">rough-notation</a> - стилизовачка текста
      </li>

      <li>
        <a href="https://github.com/sw-yx/spark-joy">spark-joy</a> - подборочка дезигн приколюх
      </li>


    </ul>

    <h3>Тестирование</h3>

    <ul>
      <li>
        <a href="https://github.com/facebook/jest">jest</a> - лучший фреймворк для юнит и интегрейшн тестов
      </li>

      <li>
        <a href="https://github.com/cypress-io/cypress">cypress</a> - аналог Selenium - позволяет писать ui тесты для
        джс + куча плюшек, типа моканья хттп-запросов
      </li>

      <li>
        <a href="https://github.com/typicode/husky">husky</a> - коммит хуки
      </li>
    </ul>

    <h3>TS + Vue/Nuxt</h3>

    <ul>
      <li>
        <a href="https://github.com/vuejs/vue-class-component">vue-class-component</a>, <a
        href="https://github.com/kaorun343/vue-property-decorator">vue-property-decorator</a>
        <nuxt-emoji-link to="https://github.com/nuxt-community/nuxt-property-decorator"/>
        - позволяет писать
        vue-компоненты в виде тс-классов
      </li>

      <li>
        <a href="https://github.com/sascha245/vuex-simple">vuex-simple</a> - работа с vuex на классах - код читаемее +
        стейт типизирован - не надо писать <code>mapState</code>, <code>mapGetters</code> и проч.
      </li>

      <li>
        <a href="https://github.com/sascha245/vue-typedi">vue-typedi</a> - диайчик, плотно интегрируется с либой выше
      </li>
    </ul>


    <h3>Прочее</h3>

    <ul>
      <li>
        <a href="https://github.com/axios/axios">axios</a>
        <nuxt-emoji-link to="https://github.com/nuxt-community/axios-module"/>
        - лучшая либа для http запросов
      </li>
      <li>
        <a href="https://github.com/iamkun/dayjs">dayjs</a> - лучшая либа для работы с датами
      </li>

      <li>
        <a href="https://github.com/chodorowicz/ts-debounce">ts-debounce</a> - рабочий дебаунс для тс
      </li>

      <li>
        <a href="https://github.com/uuidjs/uuid">uuid</a> - ююидики
      </li>
      <li>
        <a href="https://github.com/lodash/lodash">lodash</a> - утилитки
      </li>

      <li>
        <a href="https://github.com/domchristie/humps">humps</a> - конвертит данные из одного нейминга в другой, напр.
        из camelCase в under_score
      </li>
      <li>
        <a href="https://github.com/ramda/ramda">ramda</a> - фп утилитки
      </li>

      <li>
        <a href="https://github.com/typicode/json-server">json-server</a> - превращает json файл в сервер! - оч удобно
        для моков
      </li>

      <li>
        <a href="https://github.com/responsively-org/responsively-app">responsively-app</a> - просмотрщик сайта на
        браузерах разного размера
      </li>


    </ul>

  </article>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Vue / Любимые либы"
  }),
})
export default class libs extends Vue {

}
</script>

<style scoped>
</style>
