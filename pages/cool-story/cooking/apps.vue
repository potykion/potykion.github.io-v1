<template>
  <article>
    <h2 id="apps">Кукинг / Про приложухи</h2>

    <b>2020-12-06</b>

    <p>
      Книгу я отложил в долгий ящик, а желание готовить не отпало. Не помню зачем, но я купил себе тортильи, а на них
      есть
      рецептики, причем ряльна простые, и без граммовок - то есть готовишь как подсказывает чутье. Таким образом я
      сделал
      кесадильи! Бтв переворачивать их - дело непростое.
    </p>

    <p>
      И вот у меня остались куриные грудки после кесадильи, и надо было чето с ними сделать и я стал искать рецептики
      в приложухе
      <a href="https://play.google.com/store/apps/details?id=com.ajnsnewmedia.kitchenstories">kitchen stories</a>
    </p>

    <p>
      Вообще проблема с тем, что приготовить, растет именно из приложух и сайтов с рецептами. Типа
      рецептов
      тысячи. Как из них выбрать что я хочу? Да и приложухи всратенькие
    </p>

    <img-row :images="[
    '/cooking/app-1.jpg',
    '/cooking/app-2.jpg',
    '/cooking/app-3.jpg',
    ]"/>

    <p>
      Другое дело kitchen stories - оно ахуеть как выглядит
    </p>

    <img-row :images="[
      '/cooking/ks-1.jpg',
      '/cooking/ks-2.jpg',
      '/cooking/ks-3.jpg',
      ]"/>

    <p>
      Есть куча топ фич типа ГРАММОВКИ ИНГРЕДИЕНТОВ ПО ПОРЦИЯМ: типа обычно рецепты блюд пишут на 4, 5, 6 и тд порций,
      а тут можно на 1, 2 порции - ахуенно. Прикольная фича - просмотр приготовленного хрючева в разных странах.
      Россия узнаваема)))
    </p>

    <img-row :images="[
        '/cooking/ks-country-1.jpg',
        '/cooking/ks-country-2.jpg',
        '/cooking/ks-country-3.jpg',
    ]"/>

    <p>
      Крч все круто, но 19 ИНГРЕДИЕНТОВ ДЛЯ БЛЮДА ИЗ КУРИЦЫ ВЫ ЕБНУЛИСЬ???
    </p>

    <img-row :images="['/cooking/19.jpg']"></img-row>


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
    title: "Кукинг / Про приложухи"
  }),
})
export default class AppsPage extends Vue {

}
</script>

<style scoped>
</style>
