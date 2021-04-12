<template>

  <div>

    <p>
      Привет, я
      <nuxt-link to="/me">Никита</nuxt-link>
      и ето мой бложек.
    </p>

    <p>Здесь будут кулстори, заметки про разработку и экспериенс жизненный.</p>

    <p>И еще здесь может встречаться <b>мат</b> и <b>звенящая пошлость</b>.</p>

    <p>
      Что нового в блоге, можно посмотреть в
      <nuxt-link to="/changelog">ченжлоге</nuxt-link>
      .
    </p>

    <!--      @formatter:off -->
    <h3>
      Кулстори
      <!--
      todo перенести в how.vue
      Чвич эмоуты тут
      https://www.streamscheme.com/resources/twitch-emotes-meaning-complete-list-monkas-pogchamp-omegalul-kappa/
      -->
      <img src="~/assets/coolstorybob.png.webp" class="emote" alt="coolstorybob">
    </h3>
    <ul>
      <li><nuxt-link to="/cooking">Кукинг</nuxt-link></li>
      <li><nuxt-link to="/small">Свалка маленьких кулстори</nuxt-link></li>
      <li><nuxt-link to="/pure">Pure</nuxt-link></li>
      <li><nuxt-link to="/fruit-ninja">Фрут Ниндзя</nuxt-link></li>
    </ul>

    <h3>
      Экспериенс жизненный
      <img src="~/assets/5Head-Emote.png.webp" class="emote" alt="5Head-Emote">
    </h3>
    <ul>
      <li><nuxt-link to="/wishlist">Вишлист</nuxt-link></li>
      <li><nuxt-link to="/art">Рисовач</nuxt-link></li>
      <li><nuxt-link to="/yt">Ютуб</nuxt-link></li>
      <li><nuxt-link to="/goals2021">Цели 2021</nuxt-link></li>
      <li><nuxt-link to="/money">Бабос</nuxt-link></li>
      <li><nuxt-link to="/dance">Денс</nuxt-link></li>
      <li><nuxt-link to="/gigs">Гиги</nuxt-link></li>
      <li><nuxt-link to="/nothing-to-do">Нечего делать</nuxt-link></li>
      <li><nuxt-link to="/sleep">Слипинг</nuxt-link></li>
    </ul>

    <h3>
      Заметки про разработку
      <img src="~/assets/Vohiyo.png.webp" class="emote" alt="Vohiyo">
    </h3>
    <ul>
      <li><nuxt-link to="/how">Как блог делается</nuxt-link></li>
      <li><nuxt-link to="/gh-stars">ГХ старс</nuxt-link></li>
    </ul>

    <h4>Python</h4>
    <ul>
      <li><nuxt-link to="/python/tests">Тесты</nuxt-link></li>
      <li><nuxt-link to="/python/sql">SQL</nuxt-link></li>
      <li><nuxt-link to="/python/libs">Любимые либы</nuxt-link></li>
    </ul>

    <h4>Flutter</h4>
    <ul>
      <li><nuxt-link to="/flutter/firebase">Firebase</nuxt-link></li>
      <li><nuxt-link to="/flutter/codegen">Кодогенерация</nuxt-link></li>
      <li><nuxt-link to="/flutter/libs">Любимые либы</nuxt-link></li>
    </ul>
    <!--      @formatter:off -->

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
    title: "Блог из-под палки"
  })
})
export default class index extends Vue {

}
</script>
