---
title: Питоновое тесто 
description: "Шпаргалка по тестированию в Python: doctest, pytest и тд"
showToc: true
---

<div class="mendel-card">


## doctest

- Для простых тестов

```python
def format_phone(phone):  
    """  
    >>> format_phone('79852489052')  
    '+7 (985) 248-90-52'    
    """    
    return '+{} ({}) {}-{}-{}'.format(  
        phone[0], phone[1:4], phone[4:7], phone[7:9], phone[9:11],  
    )
```

- Запуск из Пайчарма

---

### Многострочный тест

- Создание классов, циклы, методы - используем `...`

```python
>>> contract_info = Mock(  
...     contract_number="SAM/2016/1-1",  
...     contract_date=dt.datetime(2021, 1, 1),  
...     app_name="Sample"  
... )
>>> contract_info.app_name
'Sample'
```

---

### Тест исключений

- Используем `...`

```python
>>> validate_phone("")  
Traceback (most recent call last):  
...  
phonenumbers.phonenumberutil.NumberParseException: (1) The string supplied did not seem to be a phone number.
```

---

### `# doctest:+SKIP` - скип теста

- Чисто для демонстрации, тест запущен не будет - `# doctest:+SKIP`

```
>>> random_permutation(range(5))  # doctest:+SKIP  
(3, 4, 0, 1, 2)
```

</div>

<div class="mendel-card"> 

## pytest

### Установка

```
pip install pytest
```

---

### Простые тесты

- Тесты - функции с кл. словом `assert`

```python
def test_ok():  
    ok = Ok(2)  
  
    val, err = ok  
  
    assert val == ok.value  
    assert not err
```

---

### Запуск

- `pytest`
- Тест - метод/класс/файл, который начинается со слова `test_`

---

### `pytest.fixture` - фикстуры

- Переиспользование данных

```python
@pytest.fixture()  
def date_range() -> DateRange:  
    return date(2018, 5, 1), date(2018, 5, 31)

def test_date_range(date_range):
    assert date_range[0] == date(2018, 5, 1)
```

- Передаются как аргумент в тест

#### `yield` - сетап/тирдаун в фикстурах 

- Код до и после запуска тестов - используем `yield`

```python
@pytest.fixture()  
def db_connection() -> Connection:  
    with create_connection_manager() as connection:  
        yield connection
```

- Соединения к бд / моки / тестовый клиент веб-фреймворков

#### `conftest.py` - переиспользование фикстур

- Можно создать файл - `conftest.py` - фикстуры, размещенные в нем будут доступны во всех тестах директории

#### Стандартные фикстуры

- `tmpdir` / `testdir` - полезно, когда код что-то пишет в файл - фикстура автоматически удалит файл после запуска теста

---

### `pytest.mark.parametrize` - запуск с разными параметрами

- Используем `pytest.mark.parametrize`

```python
@pytest.mark.parametrize(  
    "input_value",  
    [  
        '79998004321',  
        '+79998004321',  
        '89998004321',  
        '+7(999)800-43-21',  
        '8(999)800-43-21',  
        ' 79998004321 ',  
        '+8 9998004321',  
    ],  
)  
def test_suitable_phones(input_value: str) -> None:  
    instance = ModelWithPhone(phone=input_value)  
    assert instance.phone == '79998004321'
```

---

### `pytest.mark.skip` - скип теста 

- `@pytest.mark.skip` - пропускает тест
- `@pytest.mark.skipif` - пропускает тест при определенных условиях (напр. тест не робит на винде)

---

### Специальные методы

- `pytest_sessionstart` - запуск кода перед всем тестами

```python
def pytest_sessionstart(session):  
    vendor.add(os.path.join(ROOT_DIR, 'lib'))
```

---

### Конфиг

- Описываем в файле `pytest.ini`

```ini
[pytest]  
# addopts - передача опций в pytest
# --doctest-modules - сбор и запуск доктестов
# -vv - подробный вывод (подробное сравнение результатов теста)
# --durations=10 - показывает 10 самых медленных тестов
addopts = --doctest-modules -vv --durations=10
# testpaths - где искать тесты (в данном случае папки tests, src)
testpaths = tests src  
# filterwarnings - действия с варнингами
# ignore::DeprecationWarning - игнорим депрекейшн-варнинги
filterwarnings =  
    ignore::DeprecationWarning
```

- Можно в  `setup.cfg`, но вместо `[pytest]` - `[tool:pytest]`
  - Смысл: если используешь что-то, типа `mypy` - все будет в одном конфиге

---

### Плагины

- Их [много](https://github.com/augustogoulart/awesome-pytest), [ОЧЕНЬ МНОГО](https://docs.pytest.org/en/7.0.x/reference/plugin_list.html)

#### [pytest-dotenv](https://pypi.org/project/pytest-dotenv/)

- Чтение переменных среды из .env
- Происходит автоматически, достаточно указать `.env`-файлы в конфиге

##### Конфиг

```ini
# Перезапись существующих енвов
env_override_existing_values = 1  
# Из каких файлов читать переменные среды (здесь файлы .env и .env.test)
env_files =  
    .env  
    .env.test
```

#### [pytest-snapshot](https://pypi.org/project/pytest-snapshot/)

- Тестирование снепшотами - когда есть эталонный файл, и его надо сравнить с результатом теста
- Удобно, когда нужно сравнивать файлы, например xml
- Функционал внедряется фикстурой:

```python
def test_to_xml(snapshot):  
    xml: str = ...
  
    snapshot.assert_match(xml, 'expected.xml')
```

- Генерация/обновление снепшота:

```ini
addopts = --snapshot-update
```

- Запускаем pytest с опцией `--snapshot-update`
- Сгенерируется `snapshots/test_to_xml/expected.xml`
- Опцию `--snapshot-update` комментим до изменения теста

---

### Советы

- Можно разместить `conftest.py` в корне проекта, и писать тесты в рандомном пакете - это удобнее, чем создать папку `tests`, где тесты будут расположены в том же порядке как и директории проекта - не надо долго переключаться, тесты будут расположены рядом с кодом
- Если в тестах используются файлы, то хорошо иметь путь к корневой директории - иначе при запуске тестов из произвольной директории будет ошибка, что файл не найден
- Напр. в виде фикстуры:

```python
@pytest.fixture
def root_dir():
    # C:\Users\potyk\PycharmProjects\automation-gae\conftest.py > 
    # C:\Users\potyk\PycharmProjects\automation-gae
    return os.path.dirname(__file__)
```

- Если файл расположен не в корневой директории, то нужно вызвать `os.path.dirname` до тех пор пока не будет директория проекта
- Использовать фикстуры для создания объектов с большой вложенностью не очень - заебешься бегать по файлам искать из каких саб-фикстур состоит основная фикстура + тяжело изменить саб-фикстуру - лучше использовать factoryboy

</div>
