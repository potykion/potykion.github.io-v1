---
title: Flutter / Штуки, которые часто забываются
description: Получение аргументов роута, initState на hooks и тд
---

### Получение аргументов роута

```dart
ModalRoute.of(context)!.settings.arguments
```

### Аналог initState для hook-виджетов

```dart
useEffect(
    () {
      WidgetsBinding.instance!.addPostFrameCallback((_) async {
          ...
      });
    },
    [],
);
```
