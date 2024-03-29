---
title: Как тестировать Python 2 приложухи на GAE?
description: Хардкод, моки, удаление лишнего
hideHeading: true
cover: /images/dev/py/test-gae/py2-gae-testing.jpg
---

<div class="space-y-4"> 

<div class="bg-white md:py-4 md:px-6 py-2 px-4 rounded-lg md:text-xl text-lg space-y-4">

<div class="italic">

**Дисклеймер:** писать на Python 2 и GAE Standard c Python 2 в 2022 - такое себе - у нас просто на работке легаси на этом, и надо как-то вариться в нем.

</div>

</div>

<div class="bg-white md:py-4 md:px-6 py-2 px-4 rounded-lg md:text-xl text-lg space-y-4">


<h1 class="uppercase font-bold italic"> Как тестировать Python 2 приложухи на GAE? </h1> 


<img-swiper>

<img-block src="/images/dev/py/test-gae/py2-gae-testing.jpg" alt="Вот так">
</img-block>

</img-swiper>

</div>

<div class="bg-white md:py-4 md:px-6 py-2 px-4 rounded-lg md:text-xl text-lg">

Сперва, хочу сказать, что я...

<div class="text-3xl md:text-5xl  font-black tracking-widest">ПОЕБАЛСЯ ИЗРЯДНО</div>

но в итоге все ± робит

</div>

<div class="bg-white md:py-4 md:px-6 py-2 px-4 rounded-lg md:text-xl text-lg">

Итак,

<h2 class="font-bold ">
Чего мы хотим от тестирования?
</h2>

- Легкость написания
- Легкость запуска (руками и автоматически)

</div>


<div class="bg-white md:py-4 md:px-6 py-2 px-4 rounded-lg md:text-xl text-lg">

<h2 class="font-bold "> Легкость запуска </h2>

Сначала надо запустить хоть какой-то код. 

*Ведь, когда у тебя <span class=" font-bold italic">7-летнее</span> легаси, которое тестится <span class=" font-bold italic">только в проде</span>, - это непростая задачка*

---

### Жмем <span class='text-green-500'>▶</span>, и что получаем?

<div class="text-xl md:text-3xl text-red-500 font-black  tracking-widest">

КУЧА КРАСНОГО ТЕКСТА

</div>

Но его можно разбить на кучки:

<h4 >GAE SDK</h4> 


`google.appengine.api.app_identity`, `google.appengine.api.modules`


Тут всякая инфа о приложении (проекте), типа айди, GCS-бакет - это ***хардкодим*** при получении исключения:


`app_identity.get_application_id()` > `'project-id'`


---

#### Google API


`googleapiclient.descovery.build`


Создает апи-клиент для работы с гугл-сервисами, типа BigQuery

Это дело ***мокаем*** при ошибках: 



`service = mock.MagicMock()`


---

#### Хз что

Скорее всего, это мусор - ***удаляем*** его

---

### Запускаем тесты

1. Создаем venv + ставим [pytest](https://docs.pytest.org/en/7.0.x/) - *ну по классике*
2. Ставим [gae-sdk](https://pypi.org/project/appengine-sdk/) в venv - *оказывается, так можно*
3. Создаем конфиг - `pytest.ini` / `setup.cfg`:

   ```ini
   [pytest]
   addops = --doctest-modules
   testpaths = tests any_packet
   ```

   - `addops = --doctest-modules` - включаем доктесты
   - *К слову: те доктесты, которые не хотим запускать, можно игнорить, используя `# doctest: +SKIP` в конце строки доктеста*
   - `testpaths = ` - поиск тестов в определенных директориях, а не во всем проекте
   - Мы внедряем тесты потихоньку, так что написали всего один прод-пакет - `any_packet`

4. Создаем `tests/conftest.py`:

   ```python
   from google.appengine.ext import vendor
   
   def pytest_sessionstart(session):
     vendor.add('lib')
   ```

   - `pytest_sessionstart` запускается перед всеми тестами
   - `vendor.add('lib')` добавляет либы из `lib/` в `PYTHONPATH` (чтобы они подсосались в рантайм)

5. Все, теперь можно одним словом запускать тесты - `pytest`

   - Это же можно запускать на CI / pre-commit

</div>


<div class="bg-white md:py-4 md:px-6 py-2 px-4 rounded-lg md:text-xl text-lg">

<h2 class="font-bold "> Легкость написания </h2>

pytest сам по себе простой - тесты можно писать как функции с assert-ами, но для GAE нужно пару приблуд

### Тесты ndb

- GAE SDK содержит утилиты для написания тестов - [testbed](https://cloud.google.com/appengine/docs/standard/python/tools/localunittesting)
- Дружим pytest и testbed, создавая фикстуру:

```python
from google.appengine.ext import ndb, testbed

@pytest.fixture
def mock_ndb():
  testbed_ = testbed.Testbed()
  testbed_.activate()
  testbed_.init_datastore_v3_stub()
  testbed_.init_memcache_stub()
  ndb.get_context().clear_cache()
  yield
  testbed_.deactivate() 
```

- Используем ее везде, где тестируются ndb-модельки:

```python
def test_insert_entity(mock_ndb):
  TestModel().put()
  self.assertEqual(1, len(TestModel.query().fetch(2)))    
```

---

### FactoryBoy + ndb

- Удобно создавать сущности с большой вложенностью с помощью [factoryboy](https://factoryboy.readthedocs.io/en/stable/)
- Есть модификация для ndb - [factoryboy-gaendb](https://github.com/anentropic/factoryboy-gaendb)
- Но она не работает! Я даже [форк](https://github.com/potykion/factoryboy-gaendb) создал, и все равно не работает. И последний раз либа обновлялась 4 года назад и *ваще*
- Так что будем дружить factoryboy и ndb самостоятельно
- Дружить будем на примере 2 моделек: `Order` - заказ доставки товаров/еды/чего-угодно и `Client` - чел, совершивший заказ

##### Вызов `.put()` для сохранения инстанца
  
- По умолчанию factoryboy вызывает метод `.save()`
- У GAE сущностей, этот методы называется иначе - `.put()`
- Какой методы вызвать после создания модели в factoryboy можно, используя `Factory.post_generation`:

```python
from factory import Factory, post_generation

class ClientFactory(Factory):
  class Meta: 
    model = Client

  @post_generation
  def put(obj, *args, **kwargs):
    obj.put()
```

- `post_generation` вызывается после создания инстанца фабрики, то есть после `ClientFactory()`

##### Связи с другими моделями - `ndb.KeyProperty`

- Для того чтобы связать 2 модели, нужно при создании `Order` создавать `Client`, и проставлять `Client.key` в `Order`
- Если в Django достаточно просто `factory.SubFactory`, то в случае GAE нам нужно получить `.key` у сущности, которая создалать через `SubFactory`, а больше нам сущность не нужна
- Для этого используем 2 хитрости: `Params` и `LazyAttribute`:

```python
class OrderFactory(Factory):
  class Meta:
      model = Order

  class Params:
      client = SubFactory(ClientFactory)

  client = factory.LazyAttribute(lambda o: o.client.key)
```

- `Params` позволяет создавать сущности / данные без передачи в контруктор модели фабрики
- *К слову: `Params` можно переопредять в конструкторе фабрики*
- `LazyAttribute` позволяет брать не всю сущность, а лишь одно значение - а это то что нам нужно для `KeyProperty`

##### ndb-примитивы - `ndb.GeoPt`:

- Тут все просто - делаем фабрику, которая будет создавать примитив, проставляя рандомные координаты с помощью [Faker](https://faker.readthedocs.io/en/master/) :

```python
from factory import Faker, Factory
from google.appengine.api.datastore_types import GeoPt

class GeoPtFactory(Factory):
  class Meta:
    model = GeoPt

  lat = Faker('latitude')
  lon = Faker('longitude')
```

- **Важно:** factoryboy [интегрируется с Faker](https://factoryboy.readthedocs.io/en/stable/_modules/factory/faker.html), так что импортировать Faker нужно из `factory` 


</div>

</div>
