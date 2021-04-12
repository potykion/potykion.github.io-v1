<template>
  <article>
    <h2>Flutter / Любимые либы</h2>

    <section>
      <!--      @formatter:off -->

      <h3>Мастхев</h3>
      <ul>
        <li><a href="https://pub.dev/packages/freezed">freezed</a> - юнионы и иммутабельные датаклассы; есть интеграция с json_serializable</li>
        <li><a href="https://pub.dev/packages/json_serializable">json_serializable</a> - json (де)сериализация</li>

        <li><a href="https://pub.dev/packages/tuple">tuple</a> - тьюплы</li>
        <li><a href="https://pub.dev/packages/collection">collection</a> - утилитки для работы с коллекциями, типа <code>groupBy</code>

        <li><a href="https://pub.dev/packages/intl">intl</a> - форматирование дат</li>
        <li><a href="https://pub.dev/packages/flutter_hooks">flutter_hooks</a> - хуки - позволяют делать логику реюзабельной, напр. позволяет добавлять стейт в стейтлес-виджеты</li>
      </ul>

      <h3>Стейт-менеджмент и диай</h3>
      <ul>
        <li><a href="https://pub.dev/packages/riverpod">river_pod</a> - самый любимый стейт-менеджмент + диай; есть <a href="https://pub.dev/packages/hooks_riverpod">версия с хуками</a></li>
        <li><a href="https://pub.dev/packages/bloc">bloc</a> - стейт-менеджмент на событиях / иммутабельности / стримах - говорят, что высокий порог входа, но если знать концепции, то все норм</li>
        <li><a href="https://pub.dev/packages/provider">provider</a> - диайчик на случай если стейт-менеджмент не riverpod - типа есть интеграция с bloc</li>
        <li><a href="https://pub.dev/packages/get">get</a> - стейт-менеджмент / роутинг / диай / утилиты - звучит круто, но дока бедная</li>
      </ul>

      <h3>БДшки</h3>
      <ul>
        <li><a href="https://pub.dev/packages/cloud_firestore">cloud_firestore</a> - интеграция с FireStore - онлайн бдшка из Firebase</li>
        <li><a href="https://pub.dev/packages/hive">hive</a> - nosql</li>
        <li><a href="https://pub.dev/packages/shared_preferences">shared_preferences</a> - лайтовый персистенс</li>
        <li><a href="https://pub.dev/packages/moor">moor</a> - sqlite орм</li>
      </ul>

      <h3>QA / Тестирование</h3>
      <ul>
        <li><a href="https://pub.dev/packages/effective_dart">effective_dart</a> - линтер</li>
        <li><a href="https://pub.dev/packages/mocktail">mocktail</a> - либа для моков; апи похож на <a href="https://pub.dev/packages/mockito">mockito</a>, но нет кодогенерации - что упрощает использование; еще есть возможность мокать <code>Image.network</code></li>
        <li><a href="https://pub.dev/packages/cloud_firestore_mocks">cloud_firestore_mocks</a> - фаерстор моки</li>
      </ul>

      <h3>Веб клиенты / Аутентификация</h3>
      <ul>
        <li><a href="https://pub.dev/packages/http">http</a> - http запросики</li>
        <li><a href="https://pub.dev/packages/dio">dio</a> - высокоуровневая обертка над http</li>
        <li><a href="https://pub.dev/packages/retrofit">retrofit.dart</a> - еще более высокоуровневая обертка над http</li>
        <li><a href="https://pub.dev/packages/firebase_auth">firebase_auth</a> - фаербейз ауф; есть интеграция с <a href="https://pub.dev/packages/google_sign_in">гугл аутентификацией</a></li>
      </ul>

      <h3>UI / Компоненты</h3>
      <ul>
        <li><a href="https://pub.dev/packages/indexed_list_view">indexed_list_view</a> - лист-вью с отрицательным скролом</li>
        <li><a href="https://pub.dev/packages/flutter_slidable">flutter_slidable</a> - слайдабл экшены</li>
        <li><a href="https://pub.dev/packages/page_transition">page_transition</a> - транзишны между страницами</li>
        <li><a href="https://pub.dev/packages/flutter_typeahead">flutter_typeahead</a> - автокомплит</li>
        <li><a href="https://pub.dev/packages/flutter_swiper">flutter_swiper</a> - свайпер, если PageView недостаточно
        <li><a href="https://pub.dev/packages/flutter_colorpicker">flutter_colorpicker</a> - колор-пикер</li>
        <li><a href="https://pub.dev/packages/file_picker">file_picker</a> - выбор файла</li>
        <li><a href="https://pub.dev/packages/camera">camera</a> - работа с камерой</li>
        <li><a href="https://pub.dev/packages/google_fonts">google_fonts</a> - гугл шрифты</li>
        <li><a href="https://pub.dev/packages/url_launcher">url_launcher</a> - открытие ссылочек</li>
        <li><a href="https://pub.dev/packages/webview_flutter">webview_flutter</a> - вебвьюшка</li>

      </ul>

      <h3>Прочее</h3>

      <ul>
        <li><a href="https://pub.dev/packages/flutter_local_notifications">flutter_local_notifications</a> - локальные пуши</li>
        <li><a href="https://pub.dev/packages/uuid">uuid</a> - uuid</li>
        <li><a href="https://pub.dev/packages/device_info">device_info</a> - инфа о девайсе</li>
        <li><a href="https://pub.dev/packages/flutter_launcher_icons">flutter_launcher_icons</a> - генерация иконочек аппа</li>
        <li><a href="https://pub.dev/packages/path_provider">path_provider</a> - получение часто используемых путей</li>
        <li><a href="https://pub.dev/packages/image">image</a> - работа с картинками</li>
      </ul>

      <!--      @formatter:on -->
    </section>
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
    title: "Flutter / Любимые либы"
  }),
})
export default class libs extends Vue {

}
</script>

<style scoped>
</style>
