---
title: Flutter / Любимые либы
description: Dart и Flutter библиотеки на все случаи жизни
---

## Flutter / Любимые либы

---

### Мастхев

- [freezed](https://pub.dev/packages/freezed) - юнионы и иммутабельные датаклассы; есть интеграция с json_serializable
- [json_serializable](https://pub.dev/packages/json_serializable) - json (де)сериализация
- [tuple](https://pub.dev/packages/tuple) - тьюплы
- [collection](https://pub.dev/packages/collection) - утилитки для работы с коллекциями, типа `groupBy`
- [intl](https://pub.dev/packages/intl) - форматирование дат
- [flutter_hooks](https://pub.dev/packages/flutter_hooks) - хуки - позволяют делать логику реюзабельной, напр. позволяет добавлять стейт в стейтлес-виджеты ([гайд](https://medium.com/flutter-community/flutter-hooks-say-goodbye-to-statefulwidget-and-reduce-boilerplate-code-8573d4720f9a))

---

### Стейт-менеджмент и диай

- [river_pod](https://pub.dev/packages/riverpod) - самый любимый стейт-менеджмент + диай; есть [версия с хуками](https://pub.dev/packages/hooks_riverpod)
- [bloc](https://pub.dev/packages/bloc) - стейт-менеджмент на событиях / иммутабельности / стримах - говорят, что высокий порог входа, но если знать концепции, то все норм
- [provider](https://pub.dev/packages/provider) - диайчик на случай если стейт-менеджмент не riverpod - типа есть интеграция с bloc
- [get](https://pub.dev/packages/get) - стейт-менеджмент / роутинг / диай / утилиты - звучит круто, но дока бедная

---

### БДшки

- [cloud_firestore](https://pub.dev/packages/cloud_firestore) - интеграция с FireStore - онлайн бдшка из Firebase
- [hive](https://pub.dev/packages/hive) - nosql
- [shared_preferences](https://pub.dev/packages/shared_preferences) - лайтовый персистенс
- [moor](https://pub.dev/packages/moor) - sqlite орм

---

### QA / Тестирование

- [effective_dart](https://pub.dev/packages/effective_dart) - линтер
- [mocktail](https://pub.dev/packages/mocktail) - либа для моков; апи похож на [mockito](https://pub.dev/packages/mockito), но нет кодогенерации - что упрощает использование; еще есть возможность мокать `Image.network`
- [cloud_firestore_mocks](https://pub.dev/packages/cloud_firestore_mocks) - фаерстор моки

---

### Веб клиенты / Аутентификация

- [http](https://pub.dev/packages/http) - http запросики
- [dio](https://pub.dev/packages/dio) - высокоуровневая обертка над http
- [retrofit.dart](https://pub.dev/packages/retrofit) - еще более высокоуровневая обертка над http
- [firebase_auth](https://pub.dev/packages/firebase_auth) - фаербейз ауф; есть интеграция с [гугл аутентификацией](https://pub.dev/packages/google_sign_in)

---

### UI / Компоненты

- [indexed_list_view](https://pub.dev/packages/indexed_list_view) - лист-вью с отрицательным скролом
- [flutter_slidable](https://pub.dev/packages/flutter_slidable) - слайдабл экшены
- [page_transition](https://pub.dev/packages/page_transition) - транзишны между страницами
- [flutter_typeahead](https://pub.dev/packages/flutter_typeahead) - автокомплит
- [flutter_swiper](https://pub.dev/packages/flutter_swiper) - свайпер, если PageView недостаточно
- [flutter_colorpicker](https://pub.dev/packages/flutter_colorpicker) - колор-пикер
- [file_picker](https://pub.dev/packages/file_picker) - выбор файла
- [camera](https://pub.dev/packages/camera) - работа с камерой
- [google_fonts](https://pub.dev/packages/google_fonts) - гугл шрифты
- [url_launcher](https://pub.dev/packages/url_launcher) - открытие ссылочек
- [webview_flutter](https://pub.dev/packages/webview_flutter) - вебвьюшка
- [confetti](https://pub.dev/packages/confetti) - либа для конфети анимашки
- [flutter_markdown](https://pub.dev/packages/flutter_markdown) - рендер маркдауна в виде richtext

---

### Прочее

- [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications) - локальные пуши
- [uuid](https://pub.dev/packages/uuid) - uuid
- [device_info](https://pub.dev/packages/device_info) - инфа о девайсе
- [flutter_launcher_icons](https://pub.dev/packages/flutter_launcher_icons) - генерация иконочек аппа
- [path_provider](https://pub.dev/packages/path_provider) - получение часто используемых путей
- [image](https://pub.dev/packages/image) - работа с картинками
- [easy_debounce](https://pub.dev/packages/easy_debounce) - изевый дебаунс, не надо морочится с таймерами 
- [infinite_scroll_pagination](https://pub.dev/packages/infinite_scroll_pagination) - пагинация
