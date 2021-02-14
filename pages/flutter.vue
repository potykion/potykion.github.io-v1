<template>
  <div>

    <h2>Flutter</h2>

    <p>
      Здесь будут заметки про флаттерочик.
    </p>

    <h3>Firebase</h3>

    <p>
      <a href="https://firebase.google.com/">Firebase</a> - baas решение от гугл. BAAS - backend as a service - то
      есть
      есть все необходимое, что нужно
      фронту/мобилке от сервера: цдн, бд, аутентификация, бизнес логика и тд.
    </p>


    <p>
      Для флаттера есть <a href="https://firebase.flutter.dev/">набор либ</a> для работы с фаербейз.
    </p>

    <h4>Эмулик</h4>

    <p>
      При запуске на эмулике девайса удобно запускать эмулик фаербейза.

      Ниже описано как запустить эмулик для <a href="https://firebase.google.com/docs/firestore">FireStore</a>:
    </p>

    <ol>
      <li>Поставить <a href="https://firebase.google.com/docs/cli#install-cli-windows">firebase-cli</a>:
        <ul>
          <li><code>npm install -g firebase-tools</code></li>
          <li><code>firebase login</code></li>
        </ul>
      </li>
      <li>
        Перейти в папку с проектом + <a
        href="https://firebase.google.com/docs/emulator-suite/install_and_configure">поставить эмулики</a>:
        <ul>
          <li><code>firebase init</code></li>

          <li>Выбрать Yes, когда будет "Would you like to download the emulators now?"</li>
        </ul>
      </li>

      <li>
        Запустить эмулик:
        <ul>
          <li><code> firebase emulators:start </code></li>
        </ul>
      </li>

      <li>
        Подключиться к эмулику из <a
        href="https://firebase.flutter.dev/docs/firestore/usage/#emulator-usage">аппа</a>
      </li>
    </ol>

    <h5>Выключение эмулика</h5>

    <p>
      Отключение эмулика через ctrl+c не отключает эмулик на самом деле: порт остается занятым.
    </p>
    <p>
      Для освобождения порта необходимо отключить процесс, занимающий его:
    </p>

    <ul>
      <li><code>powershell</code></li>
      <li><code>Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess</code></li>
      <li><code>taskkill /PID {PID} /F </code></li>
    </ul>

    <h3>Кодогенерация</h3>

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

        <pre>
          <code v-highlight class="data">
// example.dart
class Person {
  final String firstName;
  final String lastName;
  final DateTime dateOfBirth;
  Person({this.firstName, this.lastName, this.dateOfBirth});
}
          </code>
        </pre>
      </li>

      <li>
        Вешаем декоратор + добавляем пару методов:

        <pre>
          <code v-highlight class="data">
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
          </code>
        </pre>

      </li>
        <li>
        Импортируем part-файл - файл, в котором будет сгенерерированный код, реализующий методы определенные выше:

        <pre>
          <code v-highlight class="data">
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
          </code>
        </pre>
      </li>

      <li>
        Запускаем команду кодогенерации:

        <pre>
  <code v-highlight class="bash">
flutter packages pub run build_runner build --delete-conflicting-outputs
  </code>
</pre>

        Команда выше работает для всех кодогенерирующих либ.

      </li>


    </ol>



  </div>


</template>
<script lang="ts">

import {
  Component,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Flutter"
  })
})
export default class flutter extends Vue {
  mounted() {
    document.querySelectorAll("code").forEach(e => e.innerHTML = e.innerHTML.trim());
  }
}
</script>
