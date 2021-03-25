<template>
  <div>
    <h1>хто я?</h1>

    <div>
      <img src="~/assets/me.jpg" alt="ebalo" class="w-full max-h-52 md:max-h-96"/>
      <span class="text-sm italic">Це Їбало</span>
    </div>

    <h3>Био</h3>

    <ul>
      <li><b>ФИО:</b> Лейбович Никита Максимович</li>
      <li><b>Дата рождения:</b> 1996-12-18</li>
      <li><b>Место проживания:</b> Москва</li>
      <li><b>Работа:</b> фулстак разраб в <a href="https://rbcn.mobi/">rbcn</a></li>
      <li><b>Рост:</b> 183 см; <b>вес:</b> 90 кг</li>
      <li><b>Размер одежды:</b> XL / 54; <b>обуви:</b> 45 / 46</li>
    </ul>

    <h3>Интересы</h3>
    <ul>
      <li><a href="https://vk.com/peplix">приколы</a></li>
      <li><a href="https://github.com/potykion">разработка</a></li>
      <li><a href="https://www.instagram.com/poty_risovach">рисование</a></li>
      <li>
        еда,
        <a href="https://www.instagram.com/potykion/">алкоголь</a>,
        <nuxt-link to="/cooking">готовка</nuxt-link>
      </li>
      <!--      <li> шоппинг</li>-->
      <!--      <li> психология</li>-->
      <!--      <li> книги</li>-->
      <!--      <li> спорт</li>-->
      <li> танцы</li>
      <li><a href="https://open.spotify.com/user/1srdxgefrloip7wopd30dntkd?si=1nyoyb-fQOi4OIq6s9IHmA">музычка</a></li>
      <li><a href="https://www.kinopoisk.ru/user/4445656/">кинчики</a></li>
      <li><a href="https://steamcommunity.com/id/potykion">игрушки</a></li>
    </ul>

    <!--    <h3>В планах</h3>-->
    <!--    <ul>-->
    <!--      <li> инвестирование</li>-->
    <!--      <li> английский</li>-->
    <!--    </ul>-->


    <h3>Cсылочки</h3>
    <ul>
      <li><a href="https://t.me/potykion">тележка</a></li>
      <li><a href="mailto:potykion@gmail.com">почтамт </a></li>
      <li><a href="https://calendly.com/potykion/vstrechalovo">встретиться</a></li>
      <li><a href="https://www.tinkoff.ru/rm/leybovich.nikita1/8PkYa74332"> дать денег</a></li>
      <li>
        <nuxt-link to="/wishlist">вишлист</nuxt-link>
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
    title: "О себе"
  })
})
export default class me extends Vue {

}
</script>


