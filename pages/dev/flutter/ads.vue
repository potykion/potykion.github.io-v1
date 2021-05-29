<template lang="md">
## Flutter / Реклама с Admobs

[Основа](https://www.youtube.com/watch?v=m0d_pbgeeG8&t=2s) - здесь дают минимум теории о рекламе (типа, ad-unit) + сетап рекламы во флаттер проекте

### Туториал текстом

1. Заходим в Admobs, создаем акк
2. Создаем апп, выбрав в поле "Is the app listed on a supported app store?" варик "No":

  <img-row :images="['/dev/add_app_1.png', '/dev/add_app_2.png']"></img-row>

3. Создаем ад-юнит

  <img-row :images="['/dev/ad_unit_1.png']"></img-row>

4. После создания ад-юнита нам покажут пару айдишников, первый андроидный прописываем в `android/app/src/main/AndroidManifest.xml`:

  ```
  &#x3C;meta-data android:name=&#x22;com.google.android.gms.ads.APPLICATION_ID&#x22;
             android:value=&#x22;ПЕРВЫЙ АЙДИШНИК АД ЮНИТА&#x22;/&#x3E;
  ```

5. Второй айдишник - айдишник ад юнита - передаем в BannerAd

  Ниже пример кода, который отписывает riverpod-провайдер для баннеров:

  ```dart
  /// &#x41F;&#x440;&#x43E;&#x432;&#x430;&#x439;&#x434;&#x435;&#x440; &#x442;&#x438;&#x43F;&#x430; &#x434;&#x435;&#x432;&#x430;&#x439;&#x441;&#x430; - &#x44D;&#x43C;&#x443;&#x43B;&#x438;&#x43A; &#x438;&#x43B;&#x438; &#x440;&#x435;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x434;&#x435;&#x432;&#x430;&#x439;&#x441;
  FutureProvider&#x3C;bool&#x3E; _isPhysicalDeviceProvider = FutureProvider(
    (_) async =&#x3E; (await DeviceInfoPlugin().androidInfo).isPhysicalDevice ?? false,
  );

  /// &#x41F;&#x440;&#x43E;&#x432;&#x430;&#x439;&#x434;&#x435;&#x440; &#x438;&#x43D;&#x438;&#x446;&#x438;&#x430;&#x43B;&#x438;&#x437;&#x430;&#x446;&#x438;&#x438; &#x440;&#x435;&#x43A;&#x43B;&#x430;&#x43C;&#x44B;
  /// &#x412;&#x44B;&#x43D;&#x435;&#x441;&#x435;&#x43D; &#x432; &#x43E;&#x442;&#x434;&#x435;&#x43B;&#x44C;&#x43D;&#x44B;&#x439; &#x43F;&#x440;&#x43E;&#x432;&#x430;&#x439;&#x434;&#x435;&#x440;, &#x43F;&#x43E;&#x442;&#x43E;&#x43C;&#x443; &#x447;&#x442;&#x43E; &#x434;&#x43E;&#x43B;&#x433;&#x43E; &#x433;&#x440;&#x443;&#x437;&#x438;&#x442;&#x441;&#x44F;
  FutureProvider&#x3C;InitializationStatus?&#x3E; _adsInitializedProvider = FutureProvider(
    (ref) async {
      if (kIsWeb) return null;
      return MobileAds.instance.initialize();
    },
  );

  /// &#x41F;&#x440;&#x43E;&#x432;&#x430;&#x439;&#x434;&#x435;&#x440; BannerAd
  /// &#x415;&#x441;&#x43B;&#x438; &#x434;&#x435;&#x432;&#x430;&#x439;&#x441; &#x440;&#x435;&#x430;&#x43B;&#x44C;&#x43D;&#x44B;&#x439;, &#x442;&#x43E; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x435;&#x442; &#x431;&#x43E;&#x435;&#x432;&#x43E;&#x439; &#x430;&#x439;&#x434;&#x438;, &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x435;&#x43D;&#x43D;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x43B;&#x435; &#x448;&#x430;&#x433;&#x430; 3
  var adProvider = Provider(
    (ref) =&#x3E; ref.watch(_adsInitializedProvider).maybeWhen(
          data: (status) =&#x3E; status != null
              ? ref.watch(_isPhysicalDeviceProvider).maybeWhen(
                    data: (isPhysicalDevice) =&#x3E; BannerAd(
                      adUnitId: isPhysicalDevice
                          ? "ВТОРОЙ АЙДИШНИК АД ЮНИТА"
                          : BannerAd.testAdUnitId,
                      size: AdSize.banner,
                      request: AdRequest(),
                      listener: BannerAdListener(),
                    )..load(),
                    orElse: () =&#x3E; null,
                  )
              : null,
          orElse: () =&#x3E; null,
        ),
  );
  ```

6. Используем BannedAd в виджете:

  ```dart
  Consumer(
    builder: (context, watch, child) {
      var ad = watch(_adProvider);
      return ad != null
          ? Container(height: 50, child: AdWidget(ad: ad))
          : Container();
    },
  )
  ```

### Доп телодвижения и заметочки

1. Проект должен юзать [свеженькую версию градла](https://github.com/googleads/googleads-mobile-flutter/issues/127#issuecomment-810022705)
2. Если в консоли появляется сообщение `Ad failed to load : 3`, значит код написан верно, просто надо либо [подождать](https://stackoverflow.com/questions/33566485/failed-to-load-ad-3), либо чето недо настроено в admobs, напр. реквизиты

### Ссылкота

- [Либа для рекламы](https://github.com/googleads/googleads-mobile-flutter)
- [Тестовые айди-рекламы](https://developers.google.com/admob/android/test-ads#sample%5C_ad%5C_units)

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import ImgRow from "~/components/img-row.vue";

@Component({
  components: {ImgRow},
  head: () => ({
    title: "Реклама с Admobs"
  }),
})
export default class ads extends Vue {

}
</script>

<style scoped>
</style>
