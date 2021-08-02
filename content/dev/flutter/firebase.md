---
title: Flutter / Firebase
description: Как подключить Firebase-сервисы во Flutter, экономя на разработке сервера
---

[Firebase](https://firebase.google.com/) - baas решение от гугл. BAAS - backend as a service - то есть есть все
необходимое, что нужно фронту/мобилке от сервера: цдн, бд, аутентификация, бизнес логика и тд.

### Установка

1. Сначала создаем проект в [Firebase Console](https://console.firebase.google.com/) + создаем Android приложение в
   проекте
2. **Register app:** `Android package name`, `App nickname` - тут понятно, а с `Debug signing certificate SHA-1`,
   который нужен для аутентификации, надо чуток попотеть.

Вот [подробная инструкция по генерации SHA-1](https://developers.google.com/android/guides/client-auth), а если попроще,
то вот:

1. Если `java` нет в `PATH`, то переходим в директорию с ней:

  ```
  cd C:\Program Files\Java\jre1.8.0_271\bin
  ```

2. Генерим хеш

  ```
  keytool -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
  ```

3. `Enter keystore password` оставляем пустым, затем копируем `SHA1` из `Certificate fingerprints` и вставляем в
   Firebase-консоль в `SDK setup and configuration` в настройках Android-приложения
4. **ВАЖНО:** Если работа с проектом осуществляется на нескольких машинах, то для каждой машины нужно генерить свой хеш
3. **Download config file:** Качаем `google-services.json` и закидываем в проект: `android/app/google-services.json`
4. **Add Firebase SDK:** Добавляем SDK в `android/build.gradle` и в `android/app/build.gradle`
5. Ставим необходимые [либы для флаттера](https://firebase.flutter.dev/)

#### Дополнительные телодвижения для аутентификации

1. Для начала аутентификацию надо включить: Authentication > Sign-in method
2. Затем нужно задать настройки доступпа к Firestore: Firestore > Rules:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

#### А еще

Может такое вылезать:

```
W/Firestore( 8432): (22.1.2) [WriteStream]: (86b47da) Stream closed with status: Status{code=NOT_FOUND, description=The project dnew-b9468 does not exist or it does not contain an active Cloud Datastore or Cloud Firestore database. Please visit http://console.cloud.google.com to create a project or https://console.cloud.google.com/datastore/setup?project=dnew-b9468 to add a Cloud Datastore or Cloud Firestore database. Note that Cloud Datastore or Cloud Firestore always have an associated App Engine app and this app must not be disabled., cause=null}.
W/Firestore( 8432): (22.1.2) [WriteStream]: (86b47da) Stream closed with status: Status{code=PERMISSION_DENIED, description=Cloud Firestore API has not been used in project 147399885899 before or it is disabled. Enable it by visiting https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=147399885899 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry., cause=null}.
```

Тут надо по ссылке перейти и все ок будет.

#### Еще хеши

Помимо добавления debug-sha1-фингерпринта в шаге 3 раздела Установка, нужно добавить еще пару хешей

1. При [релизе приложухи в гугл-плее](/dev/flutter/apk) нужно также сгенерить фингерпринт и прописать его в
   Firebase-консоли
  
  - Если забыл это сделать, то вот такой командой можно вытянуть:

  ```
  keytool -list -v -keystore ./upload-keystore.jks -alias upload
  ```

2. Когда апп залит в гугл-плей, необходимо скопировать фингерпринт и оттуда:



<new-img-row>
  <img-slide src="/images/dev/flutter/firebase/gplay-fingerprint.png" alt="Fingerprint в Google Play Console"></img-slide>
</new-img-row>



### Вебчик

Здесь распишу что нужно сделать, чтобы firebase заробил в вебе, а именно cloud_firestore, firebase_auth

Вроде бы все просто - [добавляем пару либ](https://firebase.flutter.dev/docs/firestore/overview/#3-web-only-add-the-sdk)
, но на самом деле надо больше телодвижений сделать:

1. Создаем web-app в [консоли](https://console.firebase.google.com/) + будет предложено скопировать Firebase SDK snippet

- его вставляем в `web/index.html`

2. На момент написания статьи, последняя версия (8.4.1) не робит, и
   стоит [прописать версию 7.20.0](https://github.com/FirebaseExtended/flutterfire/issues/4127#issuecomment-728262667):

```
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.4.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-firestore.js"></script>
```

#### Как обычно дополнительные телодвижения для аутентификации

1. Основа [здесь](https://pub.dev/packages/google_sign_in_web#usage): надо создать
   OAuth-идентетификатор [тут](https://console.cloud.google.com/apis/credentials) + прописать meta-тег
   в `web/index.html`
2. Затем открываем редактирование OAuth-идентетификатора и прописываем в Authorized JavaScript origins локалхост с любым
   портом, напр. `http://localhost:53523` + домен, где будет крутиться приложуха
3. Запускать флаттер апп, соответственно, нужно с этим портом, передавая `--web-port 53523` при вызове `flutter run`

#### Доп телодвижения для Cloud Storage

Для того, чтобы контент из Cloud Storage отображался в вебе,
нужно [настроить CORS](https://firebase.google.com/docs/storage/web/download-files#cors_configuration)

1. Ставим gsutil
2. Заходим в Firebase Console / Cloud Storage, копируем путь к бакету (напр. `gs://dnew-b9468.appspot.com`)
3. Создаем cors-конфиг - файл `cors.json`:

```
[
  {
    "origin": ["*"],
    "method": ["GET"],
    "maxAgeSeconds": 3600
  }
]
```

4. Загружаем конфиг:

```
gsutil cors set cors.json gs://dnew-b9468.appspot.com
```

#### Деплой на Firebase Hosting

Деплой, на удивление, прост - достаточно посмотреть [3-минутный видос](https://www.youtube.com/watch?v=CAYa9AQGtdU):

```
firebase init
# На все отвечаем по умолчанию кроме пары пунктов:
# ? What do you want to use as your public directory? build/web
# ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
flutter build web
firebase deploy --only hosting
```

### Эмулик

При запуске на эмулике девайса удобно запускать эмулик фаербейза. Ниже описано как запустить эмулик
для [FireStore](https://firebase.google.com/docs/firestore):

1. Поставить [firebase-cli](https://firebase.google.com/docs/cli#install-cli-windows):

* `npm install -g firebase-tools`
* `firebase login`

2. Перейти в папку с проектом

+ [поставить эмулики](https://firebase.google.com/docs/emulator-suite/install_and_configure):

* `firebase init`
* Выбрать Yes, когда будет "Would you like to download the emulators now?"

3. Запустить эмулик:

* `firebase emulators:start`

4. Подключиться к эмулику из [аппа](https://firebase.flutter.dev/docs/firestore/usage/index.vue#emulator-usage)

#### Выключение эмулика

Отключение эмулика через ctrl+c не отключает эмулик на самом деле: порт остается занятым.

Для освобождения порта необходимо отключить процесс, занимающий его:

* `powershell`
* `Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess`
* `taskkill /PID {PID} /F`
