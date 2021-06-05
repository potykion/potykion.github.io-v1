<!--
todo перенести в how.vue
Чвич эмоуты тут
https://www.streamscheme.com/resources/twitch-emotes-meaning-complete-list-monkas-pogchamp-omegalul-kappa/
-->

<!--      @formatter:off -->

<template lang="md">

Привет, я [Никита](/me) и ето мой бложек.

Здесь будут кулстори, заметки про разработку и экспериенс жизненный.

И еще здесь может встречаться <b>мат</b> и <b>звенящая пошлость</b>.

Что нового в блоге, можно посмотреть в [ченжлоге](/changelog).

### Кулстори <img src="~/assets/coolstorybob.png.webp" class="emote" alt="coolstorybob">

- [Свалка маленьких кулстори](/cool-story/small)
- [Pure](/cool-story/pure)
- [Фрут Ниндзя](/cool-story/fruit-ninja)

#### Кукинг

- [Мечта гурмана](/cool-story/cooking/gourmet)
- [Про приложухи](/cool-story/cooking/apps)
- [Готовка по фасту](/cool-story/cooking/fast)
- [Аэрогриль](/cool-story/cooking/air-cooker)
- [Баранья корейка](/cool-story/cooking/rack-of-lamb)
- [Утка и рукав](/cool-story/cooking/my-duck-vision)
- [Джейми Оливер](/cool-story/cooking/jamie-oliver)
- [Малютки](/cool-story/cooking/other)

### Экспериенс жизненный <img src="~/assets/5Head-Emote.png.webp" class="emote" alt="5Head-Emote">

- [Вишлист](/wishlist)
- [Рисовач](/art)
- [Ютуб](/yt)
- [Цели 2021](/goals2021)
- [Бабос](/money)
- [Денс](/dance)
- [Гиги](/gigs)
- [Нечего делать](/nothing-to-do)
- [Кукинг](/cooking)
- [Слипинг](/sleep)

#### Инглиш

- [Артикли](/exp/eng/articles)

### Заметки про разработку <img src="~/assets/Vohiyo.png.webp" class="emote" alt="Vohiyo">

- [Как блог делается](/dev/how)
- [Общие штучки для вебчика](/dev/base)
- [Идеи для проектов](/dev/ideas)

#### Python

- [Тесты](/dev/python/tests)
- [SQL](/dev/python/sql)
- [Любимые либы](/dev/python/libs)

#### Flutter

- [Firebase](/dev/flutter/firebase)
- [Кодогенерация](/dev/flutter/codegen)
- [Любимые либы](/dev/flutter/libs)
- [Штуки, которые часто забываются](/dev/flutter/faq)
- [Релиз приложух в гугл-плее](/dev/flutter/release)
- [Реклама с Admobs](/dev/flutter/ads)

#### Vue

- [Любимые либы](/dev/vue/libs)

</template>

<!--      @formatter:off -->

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
