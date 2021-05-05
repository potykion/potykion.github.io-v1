<template lang="md">
  ## Flutter / Релиз приложух в гугл-плее

  [Основа](https://flutter.dev/docs/deployment/android)

  1. Генерим keystore.jks

    ```bash
    keytool -genkey -v -keystore {PATH}\upload-keystore.jks -storetype JKS -keyalg
    RSA -keysize 2048 -validity 10000 -alias upload
    ```

  2. Создаем key.properties с пароликами, введенными выше

    ```
    storePassword={PASSWORD_2}
    keyPassword={PASSWORD_1}
    keyAlias=upload
    storeFile={PATH}/upload-keystore.jks
    ```

  3. Прописываем пару вещей в android/app/build.gradle

    ```
    def keystoreProperties = new Properties()
    def keystorePropertiesFile = rootProject.file('key.properties')
    if (keystorePropertiesFile.exists()) { keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
    }

    ...

    signingConfigs {
        release {
            keyAlias keystoreProperties['keyAlias']
            keyPassword keystoreProperties['keyPassword']
            storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
            storePassword keystoreProperties['storePassword']
        }
    }
    ```

  4. Добавляем пермишн в AndroidManifest.xml

    ```xml
    &lt;uses-permission android:name=&quot;com.android.vending.INTERNET&quot; /&gt;
    ```

  5. Собираем апкашку:

    ```bash
    flutter build apk
    ```
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
