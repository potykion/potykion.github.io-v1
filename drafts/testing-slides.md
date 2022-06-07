# Тестирование в Python
---

## Тестирование who?
- Тестирование - *автоматический запуск* и *проверка* кода 
- **Автоматический запуск**  - код запускается одной кнопкой / на ci, не нужно делать дополнительных телодвижений
- **Проверка** - для определенных данных, код выдает определенный ответ

---

## Зачем тестировать?
Чтобы быть уверенным:
- Что твой код работает
- Что чужой код работает
- Что система не сломалась в рандомном месте после внесения изменений
    - Ака регрессия ака smoke-testing

---

## Инструменты тестирования
Много всяких:
- pytest - тестовый фреймворк на все случаи жизни; есть куча плагинов на него
- doctest - позволяет писать тесты в виде док-стрингов
- Django Test Suite - фреймворк для тестирования Django
- behave - позволяет писать тесты в виде текста

---

Есть штуки, упрощающие тестирование:
- mock - штука для написания заглушек
- freezegun - "заморозка" времени на время теста
- factoryboy - для простого создания сущностей с большим кол-вом вложенных сущностей 
- PyHamcrest - матчеры - упрощают написание проверок

---

## [doctest](https://docs.python.org/3/library/doctest.html)
```python
def sum_nums(*nums):
  """
  >>> sum_nums(1, 2, 3)
  6
  """
  sum_ = 0
  for num in nums:
      sum_ += numf
  return sum_
```

- Пишем вf докстринге
- Тестируем простые методы/классы
- Запускаем из PyCharm

---

### Принцип работы
- Аналогично Python-интерпретатору:
```
python
Python 3.9.0 (tags/v3.9.0:9cf6752, Oct  5 2020, 15:34:40) [MSC v.1927 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> 1 + 1
2
```

 - Независимо от того, как производится импорт, вывод в консоли может отличаться:
```python
>>> import datetime as dt
>>> dt.datetime(2022, 4, 8)
datetime.datetime(2022, 4, 8, 0, 0)
```

---

- И еще раз о выводе Python-консоли:
```python
def try_int(str_, none_on_err = False):  
    """  
    >>> try_int('1')  
    1 
    >>> try_int("sam")  
    'sam'
    >>> try_int('sam', none_on_err=True) is None  
    True 
    """ 
  
    try:  
        return int(str_)  
    except (TypeError, ValueError):  
        if none_on_err:  
            return None  
        else:  
            return str_
 ```

- Проверка строк, используя `'`-кавычки
- Проверку на `None` делаем через `is None`

---

### `doctest: +SKIP`
- Используем, когда хотим показать код, но запускать его не хотим:
```python
def sum_items(items: List[Item]):
    """
    >>> item_1 = await Item.create(price=10) # doctest: +SKIP
    >>> item_2 = await Item.create(price=20) # doctest: +SKIP
    >>> sum_items([item_1, item_2]) # doctest: +SKIP
    30
    """
```

---

### Многострочный тест
- ***Что в интерпретаторе, то и в доктесте***
- Для многострочного кода используем `...`:
```python
def sum_prices(*items):
    """
    >>> class Item:
    ...   def __init__(self, price):
    ...     self.price = price
    ...
    >>> sum_prices(Item(100), Item(200))
    300
    """
    return sum(i.price for i in items)
```

---

### Тест исключений
- При возникновении исключений Python вываливает трейсбек:
```
Traceback (most recent call last):
      File "C:\Users\potyk\AppData\Local\JetBrains\Toolbox\apps\PyCharm-P\ch-0\213.7172.26\plugins\python\helpers\pycharm\docrunner.py", line 138, in __run
        exec(compile(example.source, filename, "single",
      File "<doctest err[0]>", line 1, in <module>
        err()
      File "C:/Users/potyk/PycharmProjects/potyk-io-draft/main.py", line 19, in err
        assert False
    AssertionError

```

---

- Такое в доктест не напишешь - это будет нестабильно работать не только у тебя, но и у других
- На помощь снова приходит `...`:
```python
def err():
    """
    >>> err()
    Traceback (most recent call last):
    ...
    AssertionError
    """
    assert False
```

---

## [pytest](https://docs.pytest.org/)
- Универсальный инструмент для написания и запуска тестов
- Куча плагинов/настроек под любой Python-проект
- Тесты - функции, вызывающие `assert`
```python
def test_sum():
    nums = [1, 2, 3]

    sum_ = sum(nums)

    assert sum_ == 6
```
---
- Установка:
```
pip install pytest
```

- Запуск тестов - `pytest`:
```
pytest
=== test session starts ===
platform win32 -- Python 3.9.0, pytest-7.1.1, pluggy-1.0.0
rootdir: C:\Users\potyk\PycharmProjects\potyk-io-draft
collected 1 item

test_main.py .                                                                                                                                               [100%] 

=== 1 passed in 0.02s ===
```
- pytest считает за тест все, что начинается с `test`
---
### Фикстуры
- Фикстуры - механизм переиспользования данных/логики в тестах
```python
import pytest

@pytest.fixture()  
def nums():  
    return [1, 2, 3]  
  
def test_sum(nums):  
    assert sum(nums) == 6  
  
def test_len(nums):  
    assert len(nums) == 3
```
---
Примеры использования:
- Переиспользование данных
- Setup/teardown-логика - код, выполняющийся до/после теста - аналог context-manager
- Тестовая бд - перед тестом подключаемся к бд и чистим ее, после - отключаемся от бд
- Тестовые сервер-клиенты - отправкa HTTP-запросов к вашей любимой серверной либе (Django)
---
#### Setup/teardown 
- Аналог context-manager - есть работа до и после запуска теста
- Делается через `yield`:
```python
@pytest.fixture()
def file_data():
    with open('test_file.txt') as f:
        yield f.read()

def test_file_data(file_data):
    ...
```
- Здесь читаем файл до теста; после теста закрываем его
---
- Удобно использовать для создания и закрытия тестовых соединений к бд:
```python
@pytest.fixture()  
async def async_db_connection(loop) -> SAConnection:  
    async with create_engine(DB_URL) as engine:  
        async with engine.acquire() as connection:  
            yield connection
```
- Пример выше создает соединение к бд с помощью aiopg; после выполнения теста подключение к бд закрывается
- Еще удобно чистить бд в фикстурах **перед** запуском тестов - чтобы бд чистилась даже если тест сломался
---
#### Переиспользование фикстур - `conftest.py`