<template>
  <article>

    <h2>Flutter / Кодогенерация</h2>

    <p>
      Многое во Flutter разработке делается через кодогенерацию, потому что рефлекшена нет.
    </p>

    <p>
      Разберем процесс кодогенерации на процессе генерации джсон сериализаторов с помощью <a
      href="https://pub.dev/packages/json_serializable">json_serializable</a>.

    </p>

    <ol>
      <li>
        Пишем обычный класс:

        <pre><code v-highlight class="dart">
// example.dart
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
}
          </code></pre>
      </li>

      <li>
        Вешаем декоратор + добавляем пару методов:

        <pre><code v-highlight class="dart">
// example.dart
import 'package:json_annotation/json_annotation.dart';

@JsonSerializable(nullable: false)
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
  factory Person.fromJson(Map&lt;String, dynamic> json) => _$PersonFromJson(json);
  Map&lt;String, dynamic> toJson() => _$PersonToJson(this);
}
</code></pre>

      </li>
      <li>
        Импортируем part-файл - файл, в котором будет сгенерерированный код, реализующий методы определенные выше:

        <pre><code v-highlight class="dart">
// example.dart
import 'package:json_annotation/json_annotation.dart';

part 'example.g.dart';

@JsonSerializable(nullable: false)
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
  factory Person.fromJson(Map&lt;String, dynamic> json) => _$PersonFromJson(json);
  Map&lt;String, dynamic> toJson() => _$PersonToJson(this);
}
</code></pre>
      </li>

      <li>
        Запускаем команду кодогенерации:

        <pre><code v-highlight class="bash">
flutter packages pub run build_runner build --delete-conflicting-outputs
</code></pre>

        Команда выше работает для всех кодогенерирующих либ.

      </li>


    </ol>


  </article>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Flutter / Кодогенерация"
  }),
})
export default class codegen extends Vue {

}
</script>

<style scoped>
</style>
