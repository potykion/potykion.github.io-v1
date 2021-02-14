<template>

  <div>
    <h2>Python</h2>

    <p>
      Здесь будут заметки про питончик.
    </p>


    <h3>Тесты на питоне</h3>

    <p>Все просто:</p>

    <ul>
      <li>ставим <a href="https://docs.pytest.org/en/stable/">pytest</a></li>
      <li>
        юзаем <a href="https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock">моки</a> из
        стандартной
        библиотеки
        (или <a href="https://docs.python.org/3/library/unittest.mock.html#unittest.mock.AsyncMock">асинхронный
        мок</a>,
        доступный с версии питона 3.8)
      </li>
    </ul>

    <h4>Моки</h4>

    <p>
      Зачем нужны моки? Чтобы не обращаться на прямую к бд, интернету, другим сервисам во время выполнения тестов:
    </p>

    <div style="overflow-x: auto">

<pre><code v-highlight class="python">
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
</code></pre>
    </div>

    <p>
      Здесь представлен класс, который по ссылке на ламода-шмотку отдает типизированную инфу о ней.<br/>
      По ссылке получаем html-содержимое, затем достаем из html картинки и загружаем их.<br/>
      С помощью моков, реальных запросов на скачивание html и картинок не производится и тесты выполняются быстро.
    </p>


    <p>
      Для моканья определенных методов класса, передаем словарик:
    </p>

    <div style="overflow-x: auto">
<pre><code v-highlight class="python">
async def test_config_parse(open_json: OpenJsonFunction, mock_container: AppContainer) -> None:
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
        legacy_config = LegacyConfig(**cast(dict, open_json("config/tashiriiko.json")))

        config: NamespaceConfig = await parse(legacy_config)

        assert_entities_equal(
            config, NamespaceConfig(**cast(dict, open_json("config/parsed_tashiriiko.json")))
        )
</code></pre>
    </div>

    <p>
      Здесь <code>side_effect</code> обозначает, что при вызове
      <code>update_or_insert_many_by_external_id</code>
      будет вызван метод <code>fake_insert_many</code>.<br/>
      А <code>return_value</code> обозначает, что вызов метода <code>venue_repo.get_legacy_id_map</code> вернет
      <code>{}</code>
    </p>

    <h4>
      SQL-запросы на питоне
    </h4>

    <p>
      По умолчанию sql-запросы рендерятся без конкретных значений. Чтобы получить полный sql-запрос с конкретными
      значениями:
    </p>
    <pre><code v-highlight class="python">query.compile(compile_kwargs={"literal_binds": True})</code></pre>


  </div>
</template>
<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Python"
  })
})
export default class index extends Vue {
  mounted() {
    document.querySelectorAll("code").forEach(e => e.innerHTML = e.innerHTML.trim());
  }

}
</script>
