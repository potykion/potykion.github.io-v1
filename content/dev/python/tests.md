---
title: Python / Тесты
description: Как писать тесты на Python и почему моки - это важно
---

## Python / Тесты

Все просто:

- ставим [pytest](https://docs.pytest.org/en/stable/)
- юзаем [моки](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock) из стандартной библиотеки
  (или [асинхронный мок](https://docs.python.org/3/library/unittest.mock.html#unittest.mock.AsyncMock), доступный с
  версии питона 3.8)

### Моки

Зачем нужны моки? Чтобы не обращаться на прямую к бд, интернету, другим сервисам во время выполнения тестов:

```python
@pytest.mark.asyncio
async def test_parse_lamoda_clothing(
  read_from_test_data: ReadFromTestDataFunc,
  clothing_with_color: Clothing
) -> None:
  """
  Arrange: Функция парса ламода-шмотки с моками
  Act: Вызываем парс
  Assert: Распаршенная шмотка = ожидаемой
  """
  parse = ParseLamodaClothing(
    get_html=AsyncMock(
      return_value=HTML(html=read_from_test_data("lamoda.html"))
    ),
    get_binary=AsyncMock(
      return_value=read_from_test_data(
        "HE002EMKLGV2_11830316_1_v1.jpg", binary=True, only_file=True
      )
    ),
  )
  
  actual_clothing = await parse(
    "https://www.lamoda.ru/p/he002emklgv2/clothes-hebymango-futbolka/"
  )
  
  assert actual_clothing == clothing_with_color
```

Здесь представлен класс, который по ссылке на ламода-шмотку отдает типизированную инфу о ней.<br/>
По ссылке получаем html-содержимое, затем достаем из html картинки и загружаем их.<br/>
С помощью моков, реальных запросов на скачивание html и картинок не производится и тесты выполняются быстро.

Для моканья определенных методов класса, передаем словарик:

```python
async def test_config_parse(
  open_json: OpenJsonFunction,
  mock_container: AppContainer
) -> None:
  with override_container_with_objects(
    mock_container,
    namespace_config_repo=AsyncMock(
      **{"update_or_insert_many_by_external_id.side_effect": fake_insert_many}
    ),
    venue_repo=AsyncMock(**{"get_legacy_id_map.return_value": {}}),
    payment_type_repo=AsyncMock(**{"get_all.return_value": []}),
    legal_repo=AsyncMock(**{"get_legacy_id_map.return_value": {}}),
  ):
    parse: ParseLegacyConfig = mock_container.parse_legacy_config()
    legacy_config = LegacyConfig(
      **cast(dict, open_json("config/tashiriiko.json"))
    )

    config: NamespaceConfig = await parse(legacy_config)

    assert_entities_equal(
    config,
    NamespaceConfig(**cast(dict, open_json("config/parsed_tashiriiko.json")))
    )
```

Здесь `side_effect` обозначает, что при вызове `update_or_insert_many_by_external_id`
будет вызван метод `fake_insert_many`.

А `return_value` обозначает, что вызов метода `venue_repo.get_legacy_id_map` вернет `{}`

