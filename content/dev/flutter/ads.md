---
title: Реклама с Admobs
---

## Flutter / Реклама с Admobs

[Основа](https://www.youtube.com/watch?v=m0d_pbgeeG8&t=2s) - здесь дают минимум теории о рекламе (типа, ad-unit) + сетап
рекламы во флаттер проекте

### Туториал текстом

1. Заходим в Admobs, создаем акк
2. Создаем апп, выбрав в поле "Is the app listed on a supported app store?" варик "No":

<img-row :images="['/dev/add_app_1.png', '/dev/add_app_2.png']"></img-row>

3. Создаем ад-юнит

<img-row :images="['/dev/ad_unit_1.png']"></img-row>

4. После создания ад-юнита нам покажут пару айдишников, первый андроидный прописываем
   в `android/app/src/main/AndroidManifest.xml`:

  ```
  <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ПЕРВЫЙ АЙДИШНИК АД ЮНИТА"/>
  ```

5. Второй айдишник - айдишник ад юнита - передаем в BannerAd

   Ниже пример кода, который отписывает riverpod-провайдер для баннеров:

    ```dart
    /// Провайдер типа девайса - эмулик или реальный девайс
    FutureProvider<bool> _isPhysicalDeviceProvider = FutureProvider(
          (_) async => (await DeviceInfoPlugin().androidInfo).isPhysicalDevice ?? false,
    );
    
    /// Провайдер инициализации рекламы
    /// Вынесен в отдельный провайдер, потому что долго грузится
    FutureProvider<InitializationStatus?> _adsInitializedProvider = FutureProvider(
          (ref) async {
        if (kIsWeb) return null;
        return MobileAds.instance.initialize();
      },
    );
    
    /// Провайдер BannerAd
    /// Если девайс реальный, то использует боевой айди, полученный после шага 3
    var adProvider = Provider(
          (ref) =>
          ref.watch(_adsInitializedProvider).maybeWhen(
            data: (status) =>
            status != null
                ? ref.watch(_isPhysicalDeviceProvider).maybeWhen(
              data: (isPhysicalDevice) =>
              BannerAd(
                adUnitId: isPhysicalDevice
                    ? "ВТОРОЙ АЙДИШНИК АД ЮНИТА"
                    : BannerAd.testAdUnitId,
                size: AdSize.banner,
                request: AdRequest(),
                listener: BannerAdListener(),
              )
                ..load(),
              orElse: () => null,
            )
                : null,
            orElse: () => null,
          ),
    );
    ```

6. Используем BannedAd в виджете:

  ```
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

1. Проект должен
   юзать [свеженькую версию градла](https://github.com/googleads/googleads-mobile-flutter/issues/127#issuecomment-810022705)
2. Если в консоли появляется сообщение `Ad failed to load : 3`, значит код написан верно, просто надо
   либо [подождать](https://stackoverflow.com/questions/33566485/failed-to-load-ad-3), либо чето недо настроено в
   admobs, напр. реквизиты

### Ссылкота

- [Либа для рекламы](https://github.com/googleads/googleads-mobile-flutter)
- [Тестовые айди-рекламы](https://developers.google.com/admob/android/test-ads#sample%5C_ad%5C_units)

