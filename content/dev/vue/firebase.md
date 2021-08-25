---
title: Vue / Firebase Auth
description: Немного про Firebase, а также про Firebase Auth во Vue, точнее в Nuxt
---

[Firebase](https://firebase.google.com/) - BAAS (Backend As A Service) решение от Google, тут есть всё необходимое для разработки приложений, например, бд, аутентификация, cdn и тд.

Рассмотрим один из сервисов Firebase - Firebase Auth - сервис для аутентификации (другие в вебчике пока не трогал).

Преимущество Firebase Auth - поддержка множества вариантов аутентификации: через Google, через Facebook, через почту, через телефон и тд.

### Настройка Firebase стаффа 

1. Заходим в [Firebase Console](https://console.firebase.google.com/) и создаем проект:

<img-swiper>
  <img-block src="/images/dev/vue/firebase/project-creation-1.jpg" alt="Firebase Console"></img-block>
  <img-block src="/images/dev/vue/firebase/project-creation-2.jpg" alt="Обзываем проект"></img-block>
  <img-block src="/images/dev/vue/firebase/project-creation-3.jpg" alt="Подключаем Google Analytics"></img-block>
  <img-block src="/images/dev/vue/firebase/project-creation-4.jpg" alt="Выбираем дефолтовый GA-акк"></img-block>
</img-swiper>

2. Создаем приложение типа Web, после создания которого получаем доступы для подключения Firebase JS SDK:

<img-swiper>
  <img-block src="/images/dev/vue/firebase/web-app-creation-1.jpg" alt="Обзываем приложение"></img-block>
  <img-block src="/images/dev/vue/firebase/web-app-creation-2.jpg" alt="Получаем доступы"></img-block>
</img-swiper>

3. Наконец, подключаем аутентификацию через Google:

<img-swiper>
  <img-block src="/images/dev/vue/firebase/auth-panel.jpg" alt="Панель провайдеров аутентификации"></img-block>
</img-swiper>



3. Мы работаем с Nuxt.js, для него есть либа для работы с Firebase - [Nuxt Firebase](https://firebase.nuxtjs.org/); ставим [Firebase JS SDK](https://firebase.google.com/docs/reference/js) + либу:

```
npm i firebase @nuxtjs/firebase
```


4. В `nuxt.config.js` пишем доступы, полученные ранее + подключаем сервисы, с которыми будем работать (в нашем случаем - это Firebase Auth):

```
modules: [
  [
    '@nuxtjs/firebase',
    {
      config: {
        apiKey: '<apiKey>',
        authDomain: '<authDomain>',
        projectId: '<projectId>',
        storageBucket: '<storageBucket>',
        messagingSenderId: '<messagingSenderId>',
        appId: '<appId>',
        measurementId: '<measurementId>'
      },
      services: {
        auth: true
      }
    }
  ]
],
```

5. (опционально) Можно добавить TypeScript определения типов для `nuxt-firebase`, для этого в `tsconfig.json` в `types` пишем типы:

```json
"types": [
  ...
  "@nuxtjs/firebase",
]
```

Всё, можно, начинать работать с Firebase Auth.

### Работа с Firebase Auth

Помимо того, что в Firebase всё есть, с этим еще и просто работать. Убедимся в этом на примере аутентификации через Google.

1. Определим кнопочку, которая по клику будет открывать окошко с Google-аутентификацией:

```vue
<template>
  <div class="flex justify-center items-center h-screen">
    <div>
      <div class="text-center border rounded cursor-pointer py-2" @click="auth">
        Войди в меня
      </div>
      <textarea class="w-96 h-52 ">{{ user }}</textarea>
    </div>
  </div>
</template>
```

  - `user` - это данные о юзере, полученные в результате аутентификации; изначально = `null`
  - *(классы, указанные в div-ах, - это [TailwindCSS](https://tailwindcss.com/)-классы)*

2. Пишем код для Google-аутентификации:

```vue

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
import firebase from "firebase";

@Component({})
export default class index extends Vue {
  user!: object | null = null;

  async auth() {
    // Если юзер уже вошел - то выходим из метода
    this.user = this.$fire.auth.currentUser;
    if (this.user) return;
  
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.$fire.auth.signInWithPopup(provider);
    
    this.user = this.$fire.auth.currentUser;
  }
}
</script>
```
  
  - Либа `nuxt-firebase` инжектит в Nuxt-context (`this`) поле `$fire`, которое предоставляет доступ к Firebase-сервисам
  - `$fire.auth` содержит метод `signInWithPopup`, который выводит попап с формочкой аутентификации; формочка предоставляется провайдером, соответственно для Google-аутентификации, это будет `GoogleAuthProvider` 
  - После успешной аутентификации, [данные о входе записываются в память браузера](https://firebase.google.com/docs/auth/web/auth-state-persistence); получить их можно из `$fire.auth.currentUser`
  - *(используется [TypeScript-обертка над Nuxt](https://github.com/nuxt-community/nuxt-property-decorator))* 
  
Всё, в пару строчек получили кнопку для аутентификации через Google!

### Ссылочки

- [Nuxt Firebase](https://firebase.nuxtjs.org/)
- [Вход через попап](https://dev.to/thomas_ph35/google-login-with-firebase-and-nuxt-31kk)
- Еще есть какой-то [firebase-ui](https://firebase.google.com/docs/auth/web/firebaseui) - типа уже сразу набор кнопочек для входа, но чет запарно интегрировать в Nuxt
  - Вот есть [гайдик по интеграции в Nuxt](https://www.reddit.com/r/Nuxt/comments/9ja4jt/firebaseui_in_nuxt/), но он не использует `nuxt-firebase`
  
