---
title: Flutter / Платные подписки 
description: Залей приложение в Google Play Console, появится возможность создавать подписки, потом как обычно ставим библиотечку in_app_purchase, и можно отслеживать покупки в стриме   
---

1. Сперва необходимо [загрузить приложение в Google Play Console](/dev/flutter/apk) - после этого появится возможность создавать подписки

2. Переходим в `Monetize > Subscriptions`, создаем подписку, запоминаем `Product ID`

<new-img-row>
  <img-slide src="/images/dev/flutter/subscriptions/gplay-console-subscription-creation.png" alt="Созданная подписка в Google Play Console"></img-slide>
</new-img-row>


3. Ставим либу [in_app_purchase](https://pub.dev/packages/in_app_purchase)
4. Подгружаем плагин + подгружаем инфу о подписке, сохраняя куда-нибудь, напр. в глобальную переменную `subscriptionInfo`:

```dart
// Необходимо для Android
if (defaultTargetPlatform == TargetPlatform.android) {
  InAppPurchaseAndroidPlatformAddition.enablePendingPurchases();
}
// Проверяем доступность плагина
final available = await InAppPurchase.instance.isAvailable();
if (available) {
  // Подгружаем инфу о подписке с Product ID
  var resp = await InAppPurchase.instance.queryProductDetails({'$PRODUCT_ID'});
  // Сохраняем инфу о подписке в глобальную переменную - она пригодится для покупки подписки
  subscriptionInfo = resp.productDetails.first;
}
```

5. Дальше можем работать с подписками. Я предпочитаю делать это в хуке:

```dart 
void useSubscription(BuildContext context) {
  useEffect(() {
    // Для веба подписки не работают
    if (kIsWeb) return () {};

    late StreamSubscription<List<PurchaseDetails>> _subscription;
    
    // Подписываемся на стрим покупок 
    _subscription = InAppPurchase.instance.purchaseStream.listen(
      (purchaseDetailsList) async {
        for (var purchase in purchaseDetailsList) {
          if (purchase.status == PurchaseStatus.error) {
            // Обрабатываем ошибку при оплате
          } else if (purchase.status == PurchaseStatus.purchased ||
              purchase.status == PurchaseStatus.restored) {
            if (purchase.pendingCompletePurchase) {
              // Оплаченную подписку необходимо подтверждать
              await InAppPurchase.instance.completePurchase(purchase);
            }

            if (purchase.productID == "$PRODUCT_ID") {
              // Подписка кспешно оформлена - пишем соответствующую бизнес логику 
            }
          }
        }
      },
      // Отменяем подпись на стрим при успешной обработке события
      onDone: () => _subscription.cancel(),
      onError: (dynamic error) {},
    );

    // Если юзер переустановил апп, а у него осталась подписка, то восстанавливаем ее
    InAppPurchase.instance.restorePurchases();

    // Отменяем подпись на стрим при диспоузе виджета    
    return _subscription.cancel;
  }, []);
}
```

6. Теперь можно покупать подписки, используя глобальную переменную определенную выше - `subscriptionInfo`:

```dart
InAppPurchase.instance.buyNonConsumable(
  purchaseParam: PurchaseParam(
    productDetails: subscriptionInfo
  ),
)
```

7. Все, при вызове метода выше появится панелька от гугла о покупке подписки

<new-img-row>
  <img-slide src="/images/dev/flutter/subscriptions/gplay-subscription-purchase.jpg" alt="Панелька покупки подписки"></img-slide>
</new-img-row>


- После покупки, хук выше кинет событие покупки, которое необходимо обработать 
- Для разработчика покупка подписки будет производиться в [тестовом режиме](https://developer.android.com/google/play/billing/test), у остальных в релизе будет все ок - оплата с реальной карты

### Ссылочки

- [Введение по платному контенту от Fireship.io](https://www.youtube.com/watch?v=NWbkKH-2xcQ)
- [Замороченный гайд от Google как делать платные подписки](https://codelabs.developers.google.com/codelabs/flutter-in-app-purchases)
