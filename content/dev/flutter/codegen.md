---
title: Flutter / Кодогенерация
---

## Flutter / Кодогенерация

Многое во Flutter разработке делается через кодогенерацию, потому что рефлекшена нет.

Разберем процесс кодогенерации на процессе генерации джсон сериализаторов с помощью <a
  href="https://pub.dev/packages/json_serializable">json_serializable</a>.

1. Пишем обычный класс:

```dart
// example.dart
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
}
```

2. Вешаем декоратор + добавляем пару методов:

```dart
// example.dart
import 'package:json_annotation/json_annotation.dart';

@JsonSerializable(nullable: false)
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
  factory Person.fromJson(Map<String, dynamic> json) => _$PersonFromJson(json);
  Map<String, dynamic> toJson() => _$PersonToJson(this);
}
```

3. Импортируем part-файл - файл, в котором будет сгенерерированный код, реализующий методы определенные выше:

```dart
// example.dart
import 'package:json_annotation/json_annotation.dart';

part 'example.g.dart';

@JsonSerializable(nullable: false)
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
  factory Person.fromJson(Map<String, dynamic> json) => _$PersonFromJson(json);
  Map<String, dynamic> toJson() => _$PersonToJson(this);
}
```

4. Запускаем команду кодогенерации:

```
flutter packages pub run build_runner build --delete-conflicting-outputs
```

Команда выше работает для всех кодогенерирующих либ.


