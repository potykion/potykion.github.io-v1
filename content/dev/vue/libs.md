---
title: Vue / Любимые либы
description: Vue и JS библиотеки на все случаи фронтенд разработки 
---

## Vue / Любимые либы

---

### UI

-  [vuetify](https://github.com/vuetifyjs/vuetify) <nuxt-emoji-link to="https://github.com/nuxt-community/vuetify-module"></nuxt-emoji-link>  - лучший ui фреймворк про материал дезигн, все что надо есть: сетка, дейтпикеры, селекты и тд
- [tailwindcss](https://github.com/tailwindlabs/tailwindcss) <nuxt-emoji-link to="https://github.com/nuxt-community/tailwindcss-module"></nuxt-emoji-link> - 
  лучший css фреймворк, если не разрешили пользоваться vuetify
- [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker) - нормальный дейтпикер; альтернативы: [vue-flatpickr-component](https://github.com/ankurk91/vue-flatpickr-component)
- [vue-multiselect](https://github.com/shentao/vue-multiselect) - лучший селект
- [nprogress](https://github.com/rstacruz/nprogress) - прогрессбар-полосочка; в Nuxt есть из коробки
- [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable) - нормальный драг-н-дроп
- [v-viewer](https://github.com/mirari/v-viewer) - крутой просмотрщик картинок
- [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper) - крутой свайпер
- [vue-yandex-map](https://github.com/PNKBizz/vue-yandex-map) - яндекс карточки
- [vue-the-mask](https://github.com/vuejs-tips/vue-the-mask) - маски для инпутов, напр. для телефонных номеров
- [highlightjs](https://highlightjs.org/) <nuxt-emoji-link to="https://www.npmjs.com/package/nuxt-highlightjs"></nuxt-emoji-link> - подсветка кода
- [clipboardjs](https://clipboardjs.com/) <nuxt-emoji-link to="https://www.npmjs.com/package/vue-clipboard2" :is-vue="true"></nuxt-emoji-link> - копирование текста
- [rough-notation](https://github.com/rough-stuff/rough-notation) - стилизовачка текста
- [spark-joy](https://github.com/sw-yx/spark-joy) - подборочка дезигн приколюх

---

### Тестирование

- [jest](https://github.com/facebook/jest) - лучший фреймворк для юнит и интегрейшн тестов
- [cypress](https://github.com/cypress-io/cypress) - аналог Selenium - позволяет писать ui тесты для джс + куча плюшек,
  типа моканья хттп-запросов
- [husky](https://github.com/typicode/husky) - коммит хуки

---

### TS + Vue/Nuxt

- [vue-class-component](https://github.com/vuejs/vue-class-component), [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) <nuxt-emoji-link to="https://github.com/nuxt-community/nuxt-property-decorator"></nuxt-emoji-link> - позволяет писать vue-компоненты в виде тс-классов
- [vuex-simple](https://github.com/sascha245/vuex-simple)  - работа с vuex на классах - код читаемее + стейт типизирован
  - не надо писать <code>mapState</code>, <code>mapGetters</code> и проч.
- [vue-typedi](https://github.com/sascha245/vue-typedi) - диайчик, плотно интегрируется с либой выше

---

### Прочее

- [nvm](https://github.com/nvm-sh/nvm) ([nvm-windows](https://github.com/coreybutler/nvm-windows) для винды) - Node
  Version Manager - позволяет ставить и менеджерить несколько версий ноды. 
  - Полезно, когда работаешь с легаси, напр. с gulp 3, который [не робит с нодой 12+](https://github.com/gulpjs/gulp/issues/2324) => легче поставить себе ноду 10.
- [axios           ](https://github.com/axios/axios) <nuxt-emoji-link to="https://github.com/nuxt-community/axios-module"></nuxt-emoji-link> - лучшая либа для http запросов
- [dayjs           ](https://github.com/iamkun/dayjs) - лучшая либа для работы с датами
- [ts-debounce     ](https://github.com/chodorowicz/ts-debounce) - рабочий дебаунс для тс
- [remark](https://github.com/remarkjs/remark) <nuxt-emoji-link to="https://content.nuxtjs.org/"></nuxt-emoji-link> - лучший рендер маркдауна (альтернатива [markdown-it     ](https://github.com/markdown-it/markdown-it) <nuxt-emoji-link to="https://github.com/nuxt-community/markdownit-module"></nuxt-emoji-link>)
- [uuid            ](https://github.com/uuidjs/uuid) - ююидики
- [lodash          ](https://github.com/lodash/lodash) - утилитки
- [humps           ](https://github.com/domchristie/humps) - конвертит данные из одного нейминга в другой, напр. из camelCase в under_score
- [ramda           ](https://github.com/ramda/ramda) - фп утилитки
- [json-server     ](https://github.com/typicode/json-server) - превращает json файл в сервер! - оч удобно для моков
- [libphonenumber-js](https://www.npmjs.com/package/libphonenumber-js) - парс и форматирование телефонов
