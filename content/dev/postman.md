---
title: Postman 
description: Кидаем http-запросики и кайфуем
cover: '/images/dev/postman/cover.png'
showToc: true
---

<div class="mendel-card">

[Postman](https://www.postman.com/) (ака Постман) - топовая десктопная прога для отправки запросиков httpшных на серв

</div>


<div class="mendel-card">

## Зач это надо?

### В браузере что-то сложнее GET-запроса не кинешь просто так

В Postman можно кидать запросы любой сложности + это гораздо удобнее (напр. можно шарить данные между запросами)

---

### Общий язык с бекендом

С Postman можно проверить, что серв отдает нормальные данные, а так же проверить отдает ли он их вообще 

---

### Шаринг апишки, если нет [Swagger](https://swagger.io/)'а

В Postman можно делать коллекции запросов и экспортировать в 1 json-файлик

</div>

<div class="mendel-card">

## Ну и как этим пользоваться?

На примере httpbin посмотрим как кидать запросики

<div class="py-2 px-4 rounded bg-yellow-50">

### Пару слов про httpbin

[httpbin](https://httpbin.org/) - это сервис, в который можно кидать любые http-запросы и видеть их содержимое

<img-swiper>
  <img-block src="/images/dev/postman/httpbin.png" alt="Вот он какой"></img-block>
</img-swiper>

</div>

Вернемся к Postman

1. Итак, качаем с [офф-сайта](https://www.postman.com/downloads/), ставим + логинимся, видим начальный экран - он же Launchpad, жмем **Create a request**

<img-swiper>
  <img-block src="/images/dev/postman/launchpad.png" alt="Начальный экран "></img-block>
</img-swiper>

2. Появляется экран отправки запроса — тут все и происходит

<img-swiper>
    <img-block src="/images/dev/postman/request.png" alt="Экран отправки запроса"></img-block>
</img-swiper>

3. Кинем POST-запросик с какими-нибудь параметрами; для этого выбираем POST-метод, заполняем URL, и напишем какой-нить джсончик

<img-swiper>
    <img-block src="/images/dev/postman/post.png" alt="Результат отправки"></img-block>
</img-swiper>

В ответе видим, что отправили POST-запрос на `https://httpbin.org/post` с json-данными `{"field": "value"}`

4. И, для закрепа, кинем еще GET-запрос с query-параметрами:

<img-swiper>
    <img-block src="/images/dev/postman/get.png" alt="GET-запросик"></img-block>
</img-swiper>

В ответе видим, что отправили GET-запрос на `https://httpbin.org/get` с query-параметрами `field=value`

К слову, запросики можно кидать как с json-данными, так и с query-параметрами, например, в query-параметрах отпрвляется токен, а в json-body остальные параметры запроса

</div>

<div class="mendel-card">

## Аутентификация

Обычно, чтобы кинуть какой-либо запрос, нужно аутентифицироваться/авторизоваться

Рассмотрим популярные способы аутентификации и как их проводить в Postman

<img-swiper>
    <img-block src="/images/dev/postman/auth-slide-2.png" alt="Аутентификация в Postman"></img-block>
</img-swiper>

### Токен

Аутентификация с помощью токена (еще называется JWT-токен) - самая простая и понятная схема аутентификации 

Схема состоит из двух этапов: 

1. Отправка запросика на аутентификацию, в который передается логин/апи-ключ/апи-секрет
2. Получение токена из ответа запроса и передача его в другие запросы   

Токен - это строка такого вида:

```
eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsIm5hbWUiOiJKb2huIEdvbGQiLCJhZG1pbiI6dHJ1ZX0K.LIHjWCBORSWMEibq-tnT8ue_deUqZx1K0XxCOXZRrBI
```

Эту строку передаем в другие запросики как заголок или как параметр - тут как разраб решил

#### Authorization-заголовок

Передавать токен как Authorization-заголовок в Postman можно по-разному

- Используя вкладку "Headers":

<img-swiper>
    <img-block src="/images/dev/postman/auth-token.png" alt="Токен как Authorization-хедер"></img-block>
</img-swiper>

- Используя вкладку "Authorization" и тип "API Key":

<img-swiper>
    <img-block src="/images/dev/postman/auth-header.png" alt="Вкладка Authorization + тип API Key"></img-block>
</img-swiper>

- По науке передавать токен в такой схеме нужно используя префикс Bearer - для этого на той же вкладке выбираем тип "Bearer Token":

<img-swiper>
  <img-block src="/images/dev/postman/auth-bearer.png" alt="Вкладка Authorization + тип Bearer Token"></img-block>
</img-swiper>

#### Query-параметр

Еще один способ передать токен - с помощью query-параметров. И тут опять есть несколько способов установки в Postman:

- Используя вкладку "Params":

<img-swiper>
    <img-block src="/images/dev/postman/query-token.png" alt="Токен как query-параметр"></img-block>
</img-swiper>

- Используя вкладку "Authorization", тип "API Key" и настройку "Add to" = "Query Params":

<img-swiper>
    <img-block src="/images/dev/postman/auth-query.png" alt="Authorization + API Key + Add to Query Params"></img-block>
</img-swiper>

### Логин и пароль ака Basic Auth

Basic Auth - это когда сразу кидаем запросы, имея логин и пароль, не кидая при этом дополнительных запросов

Для проведения такой аутентификации, в Postman, выбираем вкладку "Authorization" и тип "Basic Auth":

<img-swiper>
  <img-block src="/images/dev/postman/auth-basic.png" alt="Вводим доступы, видим что отправляется Authorization-хедер с зашифрованными BasicAuth-данными"></img-block>
</img-swiper>

</div>

<div class="mendel-card">

## Коллекции

Когда нужно кидать не один запрос и не один раз, хорошо бы завести коллекцию запросов

<img-swiper>
  <img-block src="/images/dev/postman/collection.png" alt="Так выглядят коллекции"></img-block>
</img-swiper>

Коллекция - это по сути папочка с запросиками + плюшечки:

- Папочки можно делать вложенными
- Коллекцию/папочки/запросики можно именовать и документировать
- Можно выставлять общие данные для запросов (напр. токен, айдишники какие-нибудь)
- Можно делиться коллекциями с другими + импортировать коллекции других компаний, напр. [Twitter](https://www.postman.com/twitter/workspace/twitter-s-public-workspace/collection/9956214-784efcda-ed4c-4491-a4c0-a26470a67400?ctx=documentation), [Notion](https://www.postman.com/notionhq/workspace/notion-s-public-api-workspace/overview), [Slack](https://www.postman.com/slackhq/workspace/slack-api/api/89151223-9b3c-49aa-bd2e-f087c7dd4160)
- Коллекции синхронизируются на аккаунте - так что можно создать коллекцию на одном компе, войти на другом компе и увидеть все сохраненные коллекции
- Можно импортнуть из других популярных форматов API, напр. OpenAPI/Swagger

### Создание коллекции и добавление запросов

Коллекцию можно создать из панели сбоку, нажав на "Create collection"; или сохранив запрос, нажав кнопку "Save" или Ctrl + S, и создав коллекцию оттуда

<img-swiper>
  <img-block src="/images/dev/postman/save-request.png" alt="Сохранение запроса с возможностью выбрать или создать коллекцию"></img-block>
</img-swiper>

### Общие данные ака переменные

В окне редактирования коллекции (... > Edit) есть вкладка "Variables":

<img-swiper>
  <img-block src="/images/dev/postman/collection-variables.png" alt="Вкладка Variables"></img-block>
</img-swiper>

Здесь можно выставлять данные, которые будут использоваться всеми запросами коллекции, такими как токены, айдишники

<img-swiper>
  <img-block src="/images/dev/postman/collection-var-creation.png" alt="Создание переменной"></img-block>
</img-swiper>

- Variable - это название переменной
- Initial Value - можно оставить пустым
- Current Value - значение переменной, которое будет отправляться вместе с запросом

#### Как использовать переменные 

Для того чтобы использовать переменные юзаем такой синтаксис `{{название-переменной}}`

Эту штуку можно вставлять в любое место запроса: query-параметры, заголовки, json-body

<img-swiper>
  <img-block src="/images/dev/postman/collection-var-usage.png" alt="Использование переменной в Authorization"></img-block>
</img-swiper>

</div>

<div class="mendel-card">

## Еще о переменных

### Енвайронменты

Для коллекции можно выставить переменные только единоразово, а иногда хочется, чтобы была возможность иметь наборы переменных, между которыми можно быстро переключаться (напр. разные доступы в рамках одной апишки)

В Postman для этого существует Environment (енвайронмент, енв) - это как раз тот самый набор переменных, которые можно быстро выставлять и переключать для всех запросов

<img-swiper>
  <img-block src="/images/dev/postman/env.png" alt="Environment"></img-block>
</img-swiper>

Работает и настраивается все так же как и для коллекций, но приоритет у енвайронментов выше. Так что если выставить переменную `token` в коллекции и в енвайронменте, то значение будет взято из енва

### Области видимости / приоритеты / уровни / scopes переменных

Вообще в постмане существует [несколько уровней переменных](https://learning.postman.com/docs/sending-requests/variables/):

<img-swiper>
  <img-block src="/images/dev/postman/var-scopes.png" alt="Уровни переменных"></img-block>
</img-swiper>

Работают они от global до local, то есть как я писал про енвы, если выставить переменные на уровне collection, то совпадающие по названию переменные перезапишутся переменными из уровня environment

### Как выставить токен прям из запроса в переменные коллекции

Как я писал выше, вместо того чтобы писать руками в каждый запрос токен, можно использовать переменные 

Но часто бывает так, что токен имеет ограниченный срок годности и его нужно обновлять, а каждый раз копировать токен из ответа на запрос и проставлять его в коллекции или енве может надоесть.

Чтобы каждый раз ручками не обновлять токен, нужно написать немножко кода, и в Postman как раз есть возможность запускать код после отправки запроса - вкладка "Tests"

Заходим в раздел "Tests" и у нас появляется возможность писать JavaScript-код:

<img-swiper>
  <img-block src="/images/dev/postman/tests.png" alt="Вкладка Tests, где можно писать код"></img-block>
</img-swiper>

Для того чтобы взаимодействовать с Postman из кода, используется объект `pm` - в нем есть доступ к ответу на запрос, а так же возможность выставлять переменные

Пишем туда код, который будет читать токен из ответа на запрос и выставлять его в переменные коллекции:

```js
const token = pm.response.json().token;
pm.collectionVariables.set("token", token);
```

В данном случае считаем, что в ответе на запрос приходит json такого вида: 

```json
{
  "token": "какой-то токен"
}
```

Мы читаем его и выставляем в переменные коллекции

Если нужно выставить в переменные енва, то пишем такое:

```js
pm.environment.set("token", token);
```

</div>


<div class="mendel-card">

## Ссылочки

- [Postman Learning Center](https://learning.postman.com/) - исчерпывающее руководство по Postman

### Альтернативы

Я считаю, что Постмана за глаза хватает, и альтернативы не нужны, но в трендах Github часто возникают клоны Postman:

- [insomnia](https://insomnia.rest/) - опенсурсная альтернатива
- [hoppscotch](https://hoppscotch.io/) (бывш. Postwoman) - браузерная альтернатива
- [httpie](https://httpie.io/) - клишная альтернатива
  - [HTTP Prompt](https://github.com/httpie/http-prompt) - надстройка над httpie, которая позволяет интерактивно собирать запросик
- [curl](https://curl.se/) - самый старенький клишный кидатель запросиков, по-умолчанию стоит на Linux/Mac


</div>
