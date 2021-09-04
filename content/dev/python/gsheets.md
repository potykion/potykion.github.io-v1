---
title: Python / Работа с Google таблицами с помощью Sheets API
description: Sheets API - одна из самых непонятных апишек, здесь я опишу понятное руководство по этой апишке на примере задачи обновления ссылок в таблице
---

Чтобы работать с Гугл шитс апи, надо авторизоваться, а потом можно запросики кидать.

Но сначала пререквизиты: 

### Пререквизиты

- Создать проект в Google Cloud + включить [Sheets API](https://console.cloud.google.com/apis/library/sheets.googleapis.com)
- Поставить клиентские либы:

  ```
  pip install google-api-python-client google-auth-httplib2 google-auth-oauthlib
  ```

### Авторизация

- Чтобы авторизоваться можно использовать **OAuth**, можно использовать **сервисный аккаунт**
- OAuth нужен когда разные пользователи могут взаимодействовать с гугл таблицей
- Обычно нам это не надо, обычно у нас один пользователь какие-то операции над таблицей делает и все (мы просто апи методы хотим покидать, *нам похуй ваще как это делать*, авторизоваться через гугл - нахуя?)
- Плюс это не наш вариант, потому что на сервере ты не будешь авторизовываться через гугл: открывать окошко, входить в гугл и все такое - на сервере нет такой возможности
- Соответсвенно, мы используем сервисный аккаунт
  
#### Сервисный аккаунт

Сервисный аккаунт - это специальный пользователь, которому даем доступы к гугловым сервисам (не только гугл шитс)

1. То есть создаем пользователя

<img-swiper>
  <img-block src="/images/dev/python/gsheets/service-acc-creation-1.png" alt="Страничка создания доступов"></img-block>
  <img-block src="/images/dev/python/gsheets/service-acc-creation-2.png" alt="Создание сервисного акка - достаточно только имя ввести"></img-block>
</img-swiper>

2. Создаем апи-ключ для этого пользователя - с помощью ключа мы будем вызывать методы от имени сервисного акка

<img-swiper>
  <img-block src="/images/dev/python/gsheets/service-acc-page.png" alt="Страничка сервисного акка"></img-block>
  <img-block src="/images/dev/python/gsheets/service-acc-api-key-creation-1.png" alt="Создаем ключик"></img-block>
  <img-block src="/images/dev/python/gsheets/service-acc-api-key-creation-2.png" alt="После создания автоматически начнется скачивание JSON-а с ключом"></img-block>
</img-swiper>

3. Даем доступ к гугл таблице для этого пользователя

<img-swiper>
  <img-block src="/images/dev/python/gsheets/gsheets-share.png" alt="Даем доступы"></img-block>
</img-swiper>

4. И в одну строчечку получаем `Сredentials`, с помощью которых мы можем кидать запросики

  ```python
  from google.oauth2 import service_account
  
  creds = service_account.Credentials.from_service_account_file(
      # Путь к json-у, полученному выше
      'yaxxxta-b337157255d8.json',
      # scopes - необходимые права доступа - в данном случае чтение и редактирование гугл-таблиц
      scopes=['https://www.googleapis.com/auth/spreadsheets']
  )
  ```


Если все-таки интересует OAuth, то вот:

#### OAuth

1. Заходим на [страницу создания доступов для API](https://console.cloud.google.com/apis/api/sheets.googleapis.com/credentials) и создаем доступы: `Create credentials > OAuth client ID`:

<img-swiper>
    <img-block src="/images/dev/python/gsheets/credentials-creation-1.png" alt="Страница создания доступов"></img-block>
    <img-block src="/images/dev/python/gsheets/credentials-creation-2.png" alt="Создание доступов: тип - Desktop app, название - произвольное"></img-block>
</img-swiper>

2. Скачиваем доступы, получаем файлик, типа `client_secret_***.json`, и закидываем его в директорию с проектом:

<img-swiper>
    <img-block src="/images/dev/python/gsheets/credentials-download.png" alt="Кнопочка скачивания доступов"></img-block>
</img-swiper>

3. Генерируем токен, который нужен для работы с апи, используя функцию `get_creds`:

    ```python
    import os.path
    from typing import List
    from google.auth.transport.requests import Request
    from google.oauth2.credentials import Credentials
    from google_auth_oauthlib.flow import InstalledAppFlow


    def get_creds(secrets_file: str, scopes: List[str]) -> Credentials:
        """
        Генерирует токен, необходимый для работы с апи

        Токен читается из файла
        Если этого файла нет, то используются доступы из {secrets_file}
        После чтения доступов из файла в консоли появится ссылка, перейдя по которой надо будет авторизоваться

        Если возникает надпись "This app isn't verified", то надо прожать  Advanced > Go to {Project Name} (unsafe)
        https://developers.google.com/sheets/api/quickstart/python#this_app_isnt_verified
        
        После авторизации токен сохранится на диск

        :param secrets_file: путь к файлу с доступами, напр. 'client_secret_406798162311-63us552o41nrs0ashvt87h58gbgivjsh.apps.googleusercontent.com.json'
        :param scopes: права доступа, необходимые для работы с апи;
            в данном случае будет достаточно [`https://www.googleapis.com/auth/spreadsheets`] - это права и на чтение и на запись данных в таблицу
        """
        creds = None

        if os.path.exists('token.json'):
            creds = Credentials.from_authorized_user_file('token.json', scopes)

        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                flow = InstalledAppFlow.from_client_secrets_file(secrets_file, scopes)
                creds = flow.run_local_server(port=0)

            with open('token.json', 'w') as token:
                token.write(creds.to_json())

        return creds
    ```

4. Ну и вызываем метод выше, чтобы получить `Credentials`:

  ```python
  creds = get_creds(
      secrets_file='client_secret_406798162311-63us552o41nrs0ashvt87h58gbgivjsh.apps.googleusercontent.com.json',
      scopes=['https://www.googleapis.com/auth/spreadsheets']
  )
  ```


### Кидание запросиков

1. Используя `Credentials`, создаем апи-клиент, который будет кидать запросы:

    ```python
    from googleapiclient.discovery import build

    service = build('sheets', 'v4', credentials=creds)
    ```

2. Запросы кидаются аналогично путям методов, напр. для запроса `spreadsheets.get` вызов будет выглядеть так:


    ```python
    resp = service.spreadsheets().get(**params).execute()
    ```

### Данные, передаваемые в параметрах

#### Таблица и листы

Для любого запроса необходим айди таблицы и айди листа; причем айди листа может быть как строковым, так и числовым.

Получить эти данные можно из ссылки на таблицу. Например, для такой ссылки:

```
https://docs.google.com/spreadsheets/d/e3b0c44298fc1c149afbf4c8996fb92427/edit#gid=1340597691
```

- e3b0c44298fc1c149afbf4c8996fb92427 - айди таблицы
- 1340597691 - численный айди листа
- Строковой айди листа — это собственно название листа

Вынесем это в константы, которые будем юзать в примерах запросов:

```python
TABLE = 'e3b0c44298fc1c149afbf4c8996fb92427'
SHEET = "Лист 1"
SHEET_ID = 1340597691
```

#### Диапазон ака range

Диапазон ячеек, над которыми будут проводиться операции, определяется в 2 форматах:

- Строка вида "Лист 1!A1:B2" - классический формат диапазонов, включающий название листа, название колонки в виде буквы, и номер строки
- [Объект GridRange](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/other#GridRange), использующий индексы строк и колонок

Аналогично определим их в виде констант:

```python
from openpyxl.utils.cell import column_index_from_string

# Строка вида "Лист 1!D5:GJ396"
START_COLUMN, START_ROW = "D", 5
END_COL, END_ROW = "GJ", 396
RANGE_STR = F'{SHEET}!{START_COLUMN}{START_ROW}:{END_COL}{END_ROW}'

# Объект GridRange
# Индексы колонок и строк начинаются с 0, 
# то есть для ячейки A1 будут индексы 0 и 0, для ячейки D5 будут индексы 3 и 4
START_COL_INDEX = column_index_from_string(START_COLUMN) - 1
START_ROW_INDEX = START_ROW - 1
END_COL_INDEX = column_index_from_string(END_COL) - 1
END_ROW_INDEX = END_ROW - 1
# GridRange наполовину инклюзивный - [startIndex, endIndex), 
# т.е. включает начальный индекс диапазона и не включает конечный индекс, 
# т.е. чтобы включить последний индекс нужно плюсануть 1
RANGE = {
    "sheetId": SHEET_ID,
    "startRowIndex": START_ROW_INDEX,
    "startColumnIndex": START_COL_INDEX,
    "endRowIndex": END_ROW_INDEX + 1,
    "endColumnIndex": END_COL_INDEX + 1,
}
```

> Для перевода буквенных колонок в число, можно использовать метод `column_index_from_string` из библиотеки [openpyxl](https://openpyxl.readthedocs.io/en/stable/)


### Пример: обновление ссылок в ячейках 

Рассмотрим как пользоваться методами апи на примере задачи обновления ссылок. 

Суть задачи — проверить есть ли в ячейке ссылка, если есть, то нужно заменить в ссылке домен.

#### spreadsheets.get

Метод [spreadsheets.get](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get) позволяет получить всю информацию о таблице, то есть помимо значений ячеек можно получить информацию о стилях и ссылках.

Пример вызова:

```python
resp = service.spreadsheets().get(
    spreadsheetId=TABLE,
    ranges=[RANGE_STR],
    # Нужно, чтобы приходила инфа о ячейках
    includeGridData=True,
).execute()
rows = resp["sheets"][0]["data"][0]["rowData"]
```

- `resp` - это большой объект, включающий в себя, помимо данных о ячейках, другие данные, напр. данных о листах
- `rows = resp["sheets"][0]["data"][0]["rowData"]` - таким образом получаем данные о строках
- `cells = rows[0]["values"]` - таким образом получаем ячейки строки

#### Алгоритм замены ссылок

Теперь напишем алгоритм замены ссылок, который будет создавать массив обновлений ячеек — массив [RowData](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/sheets#RowData):

```python
old_url = 'https://google.com/'
new_url = "https://yandex.ru/"

update_rows = []
for row in rows:
    update_cells = []
    for cell in row["values"]:
        link = (
            # Если ссылка выставлена для всей ячейки, то берем hyperlink
            cell.get("hyperlink") or
            # Если ссылка выставлена для части ячейки, например "*Тут* хорошо", то ссылка берется из textFormatRuns.0.format.link.uri
            value_by_path(cell, "textFormatRuns.0.format.link.uri") or
            # Еще ссылка может быть выставлена для другой части ячейки, например "Хорошо *тут*"
            # в таком случае ссылка берется из textFormatRuns.1.format.link.uri
            value_by_path(cell, "textFormatRuns.1.format.link.uri")
        )
        # Задавать ссылку для ячейки можно 3 способами
        # https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/cells#CellData.FIELDS.hyperlink
        # Будем использовать textFormatRun.format.link, т.к. он самый рабочий из тех, что я пробовал
        # https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/other#TextFormat.FIELDS.link
        update_link = (
            {"userEnteredFormat": {"textFormat": {"link": {"uri": new_url + link[len(old_url):]}}}}
            if link and link.startswith(old_url)
            else {}
        )
        update_cells.append(update_link)

    update_rows.append({"values": update_cells})
```

> Текст функции `value_by_path` будет приведен в итоговом коде скрипта

#### spreadsheets.batchUpdate

Наконец нужно вызвать метод обновления данных таблицы - [spreadsheets.batchUpdate](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/batchUpdate).

Чтобы вызвать метод `spreadsheets.batchUpdate` нужно передать в него массив [Request](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#Request). Объект `Request` олицетворяет операцию над таблицей, такую как вставка графиков, удаление ячеек, добавление листов и другие. Нас интересует обновление ячеек — то есть [UpdateCellsRequest](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/request#updatecellsrequest):

```python
service.spreadsheets().batchUpdate(
    spreadsheetId=TABLE,
    body={
        "requests": [
            {
                "updateCells": {
                    "rows": update_rows,
                    # Здесь указывается какие поля обновляем
                    "fields": "userEnteredFormat.textFormat.link.uri",
                    "range": RANGE
                }
            }
        ]
    }
).execute()
```

Все, можно запускать код. 

Код выгрузит ячейки таблицы в диапазоне и заменит ссылки, содержащие google.com, на yandex.ru.

### Ссылочки

- [Итоговый код скрипта](https://gist.github.com/potykion/880b9971cfd54700ddc93410722a2149)
- [Начало работы с Sheets API в Python](https://developers.google.com/sheets/api/quickstart/python)


### Apps Script

- А еще есть [Apps Script](https://developers.google.com/apps-script) - это JS-подобный язык (бтв ему 12 лет)))), только там из коробки гугловые апишки + можно напрямую взаимодействовать с гугловыми сервисами, типа плагины писать для гугл-шитс
- И самое главное - не нужно вообще писать код для авторизации / делать какие-либо телодвижения по этому поводу
- То есть для Apps Script часть с Авторизацией можно пропустить и сразу юзать методы апи:

  ```js
  // Метод spreadsheets.get
  const resp = Sheets.Spreadsheets.get(
    TABLE, 
    {
      ranges: [RANGE_STR], 
      includeGridData: true
    },
  );
  const rows = resp.sheets[0].data[0].rowData;
  
  // Метод spreadsheets.batchUpdate
  service.spreadsheets().batchUpdate(
    {
      requests: [
        {
          updateCells:{
            rows: update_rows,
            fields: "userEnteredFormat.textFormat.link.uri",
            range: RANGE
          }
        }
      ]
    },
    TABLE,
  )
  ```

- Запускать это дело можно из [редактора](https://script.google.com/home):

  <img-swiper>
    <img-block src="/images/dev/python/gsheets/apps-script-editor.png" alt="Apps Script редактор"></img-block>
  </img-swiper>

#### Плагины

- Как я говорил, можно плагины писать для тех же Гугл таблиц
- Вот [пример работы с Youtube API](https://developers.google.com/youtube/v3/quickstart/apps-script), который добавляет кастомную кнопулю в Гугл таблицу, которая подгружает данные о YT-канале:

  <img-swiper>
    <img-block src="/images/dev/python/gsheets/apps-script-gsheet-integration.png" alt="Кастомная кнопочка в Google Sheets"></img-block>
  </img-swiper>

- Возможно это не так удобно как из Питона, но суть в том, что такой инструмент существует, и мб для каких-то задач он пригоден
