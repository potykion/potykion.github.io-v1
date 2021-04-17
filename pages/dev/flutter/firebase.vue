<template>
  <article>
    <h2>Flutter / Firebase</h2>

    <p>
      <a href="https://firebase.google.com/">Firebase</a> - baas решение от гугл. BAAS - backend as a service - то
      есть
      есть все необходимое, что нужно
      фронту/мобилке от сервера: цдн, бд, аутентификация, бизнес логика и тд.
    </p>

    <h3>Установка</h3>

    <ol>
      <li>
        Сначала создаем проект в <a href="https://console.firebase.google.com/">Firebase Console</a>
        + создаем Android приложение в проекте
      </li>
      <li>
        <b>Register app:</b>
        <code>Android package name</code>, <code>App nickname</code> - тут понятно, а с <code>Debug signing
        certificate
        SHA-1</code>, который нужен для аутентификации, надо чуток попотеть.

        <p>
          Подробная инструкция по генерации SHA-1 <a
          href="https://developers.google.com/android/guides/client-auth">тут</a>, а если попроще, то вот:
        </p>
        <ol>
          <li>Если <code>java</code> нет в <code>PATH</code>, то переходим в директорию с ней:
            <pre><code v-highlight class="bash">
cd C:\Program Files\Java\jre1.8.0_271\bin
          </code></pre>
          </li>
          <li>
            Генерим хеш

            <pre><code v-highlight class="bash">
keytool -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
        </code></pre>
          </li>
          <li><code>Enter keystore password</code> оставляем пустым, затем копируем <code>SHA1</code> из <code>Certificate
            fingerprints</code></li>
          <li>
            <b>ВАЖНО:</b> Если работа с проектом осуществляется на нескольких машинах, то для каждой машины нужно
            генерить свой хеш
          </li>
        </ol>

      </li>


      <li>
        <b>Download config file:</b> Качаем <code>google-services.json</code> и закидываем в проект: <code>android/app/google-services.json</code>
      </li>

      <li>
        <b>Add Firebase SDK:</b> Добавляем SDK в <code>android/build.gradle</code> и в
        <code>android/app/build.gradle</code>
      </li>

      <li>Ставим необходимые <a href="https://firebase.flutter.dev/">либы для флаттера</a></li>
    </ol>

    <h4>Дополнительные телодвижения для аутентификации</h4>

    <ol>
      <li>
        Для начала аутентификацию надо включить: Authentication > Sign-in method
      </li>
      <li>
        Затем нужно задать настройки доступпа к Firestore: Firestore > Rules:

        <pre><code v-highlight >
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
        </code></pre>

      </li>
    </ol>

    <h4>А еще</h4>

    <p>Может такое вылезать:</p>

    <pre><code v-highlight>
W/Firestore( 8432): (22.1.2) [WriteStream]: (86b47da) Stream closed with status: Status{code=NOT_FOUND, description=The project dnew-b9468 does not exist or it does not contain an active Cloud Datastore or Cloud Firestore database. Please visit http://console.cloud.google.com to create a project or https://console.cloud.google.com/datastore/setup?project=dnew-b9468 to add a Cloud Datastore or Cloud Firestore database. Note that Cloud Datastore or Cloud Firestore always have an associated App Engine app and this app must not be disabled., cause=null}.
W/Firestore( 8432): (22.1.2) [WriteStream]: (86b47da) Stream closed with status: Status{code=PERMISSION_DENIED, description=Cloud Firestore API has not been used in project 147399885899 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=147399885899 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry., cause=null}.
    </code></pre>

  <p>
    Тут надо по ссылке перейти и все ок будет.
  </p>

    <h3>Эмулик</h3>

    <p>
      При запуске на эмулике девайса удобно запускать эмулик фаербейза.

      Ниже описано как запустить эмулик для <a href="https://firebase.google.com/docs/firestore">FireStore</a>:
    </p>

    <ol>
      <li>Поставить <a href="https://firebase.google.com/docs/cli#install-cli-windows">firebase-cli</a>:
        <ul>
          <li><code>npm install -g firebase-tools</code></li>
          <li><code>firebase login</code></li>
        </ul>
      </li>
      <li>
        Перейти в папку с проектом + <a
        href="https://firebase.google.com/docs/emulator-suite/install_and_configure">поставить эмулики</a>:
        <ul>
          <li><code>firebase init</code></li>

          <li>Выбрать Yes, когда будет "Would you like to download the emulators now?"</li>
        </ul>
      </li>

      <li>
        Запустить эмулик:
        <ul>
          <li><code> firebase emulators:start </code></li>
        </ul>
      </li>

      <li>
        Подключиться к эмулику из <a
        href="https://firebase.flutter.dev/docs/firestore/usage/index.vue#emulator-usage">аппа</a>
      </li>
    </ol>

    <h4>Выключение эмулика</h4>

    <p>
      Отключение эмулика через ctrl+c не отключает эмулик на самом деле: порт остается занятым.
    </p>
    <p>
      Для освобождения порта необходимо отключить процесс, занимающий его:
    </p>

    <ul>
      <li><code>powershell</code></li>
      <li><code>Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess</code></li>
      <li><code>taskkill /PID {PID} /F </code></li>
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
    title: "Flutter / Firebase"
  }),
})
export default class firebase extends Vue {

}
</script>

<style scoped>
</style>
