---
title: Flutter / Как сделать баннерную рекламу через Google AdMob
description: Создай баннер в Google Admobs, поставь библиотечку google_mobile_ads и вуаля 
---

Основа - [видосик от челов из Гугла](https://www.youtube.com/watch?v=m0d_pbgeeG8&t=2s) - здесь дают минимум теории о рекламе (типа, ad-unit) + сетап
рекламы во флаттер проекте

### Туториал текстом

1. Заходим в Google AdMob, создаем апп:

<new-img-row>
  <img-slide src="/images/dev/flutter/ads/add_app_1.png" alt="Интерфейс создания аппа в AdMob"></img-slide>
  <img-slide src="/images/dev/flutter/ads/add_app_2.png" alt='В поле "Is the app listed on a supported app store?" выбираем "No"'></img-slide>
</new-img-row>


2. Создаем ad unit:

<new-img-row>
  <img-slide src="/images/dev/flutter/ads/ad_unit.png" alt="Интерфейс создания ad unit"></img-slide>
</new-img-row>

3. После создания ад-юнита нам покажут пару айдишников, первый андроидный прописываем в `android/app/src/main/AndroidManifest.xml`:

  ```
  <meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ПЕРВЫЙ АЙДИШНИК АД ЮНИТА"/>
  ```

4. Второй айдишник - айдишник ад юнита - передаем в BannerAd, предварительно поставив [либу для показа рекламы](https://pub.dev/packages/google_mobile_ads) 

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

5. Используем BannedAd в виджете:

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
2. Если в консоли появляется сообщение `Ad failed to load : 3`, значит код написан верно, но
   
    - просто надо [подождать](https://stackoverflow.com/questions/33566485/failed-to-load-ad-3)
    - чето недонастроено в admobs, напр. реквизиты
    - надо выпустить апп в релиз-режиме

### Ссылкота

- [Либа для рекламы](https://github.com/googleads/googleads-mobile-flutter)
- [Тестовые айди-рекламы](https://developers.google.com/admob/android/test-ads#sample%5C_ad%5C_units)

