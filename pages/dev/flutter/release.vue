<template lang="md">
## Flutter / Релиз приложух в гугл-плее

1. Генерим `upload-keystore.jks`:

   ```bash
   keytool -genkey -v -keystore {PATH}\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
   ```

    - Где `PATH` - путь к проекту или директория, куда генерим `upload-keystore.jks`
    - Пример команды с путями:
      ```bash
      "C:\Program Files (x86)\Java\jre1.8.0_251\bin\keytool" -genkey -v -keystore C:\Users\potyk\IdeaProjects\dnew\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
      ```

2. Создаем `android/key.properties` с пароликами, введенными выше:

   ```
   storePassword={PASSWORD_2}
   keyPassword={PASSWORD_1}
   keyAlias=upload
   storeFile={PATH}/upload-keystore.jks
   ```

3. Прописываем пару вещей в `android/app/build.gradle`:

    ```groovy
    // Этот код до директивы android
    def keystoreProperties = new Properties()
    def keystorePropertiesFile = rootProject.file('key.properties')
    if (keystorePropertiesFile.exists()) {
        keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
    }

    // Этот код в директиве android
    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }

    // Тут обычно тудушка TODO: Add your own signing config for the release build
    // Ее заменяем на этот код
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }

    ```

4. Добавляем пермишн в `AndroidManifest.xml` в тег `manifest`

    ```xml
    &lt;uses-permission android:name=&quot;com.android.vending.INTERNET&quot; /&gt;
    ```

5. Собираем апкашку:

    ```bash
    flutter build apk
    ```

### Ссылочки

- [Основа](https://flutter.dev/docs/deployment/android)
- [Еще один неплохой гайд](https://codelabs.developers.google.com/codelabs/flutter-in-app-purchases#3)

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Релиз приложух в гугл-плее"
  }),
})
export default class release extends Vue {

}
</script>

<style scoped>
</style>
