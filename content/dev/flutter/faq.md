---
title: Flutter / Штуки, которые часто забываются
---

## Flutter / Штуки, которые часто забываются

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
