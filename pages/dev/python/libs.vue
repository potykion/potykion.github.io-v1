<template>
  <article>

    <h2>Python / Любимые либы</h2>

    <section>
      <h3>Веб-фреймворки</h3>

      <ul>
        <li><a href="https://www.djangoproject.com/">Django</a> - самый популярный веб-фреймворк, куча функций из
          коробки
          (ака batteries included),
          куча интеграций; если хочется писать сервера на питоне, и не знаешь с чего начать - бери джангу - пусть
          генерится куча файлов на старте, но разобравшись в них, понимаешь, что фреймворки строятся на тех же
          концепциях

          <ul>
            <li><a href="https://www.django-rest-framework.org/">Django REST framework</a> - мастхев чтобы писать апишки
            </li>
            <li><a href="https://django-ninja.rest-framework.com/">Django Ninja</a> - надстройка над DRF, которая
              позволяет писать апишки в стиле FastAPI -
              с помощью тайпингов и Pydantic
            </li>
            <li>
              <a href="https://github.com/axnsan12/drf-yasg">drf-yasg</a> - лучший генератор swagger-доки для джанги
            </li>
            <li>
              <a href="https://github.com/wagtail/wagtail">wagtail</a> - cms для джанги
            </li>

          </ul>
        </li>
        <li>
          <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a> - самый простой веб-фреймворк - начать можно с
          <a
            href="https://flask.palletsprojects.com/en/1.1.x/quickstart/#quickstart">1 файла с 5 строчками</a>; но по
          сравнению с Джангой, мало батареек в коробке - надо куча всего доустанавливать - в итоге получается та же
          джанга
        </li>
        <li>
          <a href="https://docs.aiohttp.org/en/stable/">aiohttp</a> - один из первых асинхронных фреймворков; по фичам -
          аналогичен фласку: в коробке роутинг, мидлваре, простенький сёрв статики; суть асинхронности в том, что
          повышается производительность серва; еще в коробке есть асинхронный веб-клиент
        </li>
        <li>
          <a href="https://fastapi.tiangolo.com/">FastAPI</a> - еще один асинхронный фреймворк (но можно писать и в
          синхронном стиле), суть в том, что схемы запросов и ответов можно описывать, используя тайпинги и Pydantic +
          есть интеграция со сваггером из коробки + неплохой диай на функциях
        </li>
      </ul>

      <h3>Работа с бд</h3>
      <ul>
        <li>Django ORM - лучшная ормка, идет в комплекте с Django</li>
        <li><a href="https://www.sqlalchemy.org/">Sqlalchemy</a> - лучшая либа для работы с бд, если не Django-проект;
          есть и орм, и возможность писать скл,
          используя sqlalchemy-конструкции, и писать сырой sql; есть куча дополнений, типа <a
            href="https://alembic.sqlalchemy.org/en/latest/">миграций</a>, <a
            href="https://sqlalchemy-utils.readthedocs.io/en/latest/">утилит по созданию бд</a>; альтернативы: <a
            href="http://docs.peewee-orm.com/en/latest/">peewee</a> - лайтовая ормка
        </li>
        <li>
          <a href="https://github.com/aio-libs/aiopg">aiopg</a> - асинхронная работа с постгресом, есть интеграция с
          sqlalchemy-запросами;
          альтернативы: <a href="https://github.com/MagicStack/asyncpg">asyncpg</a>
        </li>
        <li>
          <a href="https://github.com/potykion/repka">repka</a> - <i>собственная разработка</i>, асинхронная абстракция
          над бд на базе aiopg
        </li>
        <li>
          <a href="https://pymongo.readthedocs.io/en/stable/">pymongo</a> - официальный клиент для работы с монгой, есть
          <a href="https://motor.readthedocs.io/en/stable/">асинхронная версия</a>
        </li>
      </ul>


      <h3>Веб-клиенты</h3>

      <ul>
        <li>
          <a href="https://github.com/psf/requests">requests</a> - самая популярная либа для http-запросов
        </li>

        <li>
          <a href="https://github.com/encode/httpx">httpx</a> - асинхронный хттп-клиент - альтернатива aiohttp; <a
          href="https://github.com/lundberg/respx">respx</a> - моки для либы
        </li>

        <li>
          <a href="https://github.com/mvantellingen/python-zeep">python-zeep</a> - SOAP клиент
        </li>
        <li>
          <a href="https://docs.python-requests.org/projects/requests-html/en/latest/">requests-html</a> - лучший парсер
          html; альтернативы: <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/">BeautifulSoup</a>
        </li>

        <li><a href="https://github.com/cobrateam/splinter">splinter</a> - более высокоуровневая обертка над <a
          href="https://github.com/SeleniumHQ/selenium/">Selenium</a> -
          штукой для управлением браузера; альтернативы: <a href="https://github.com/mherrmann/selenium-python-helium">helium</a>
        </li>

      </ul>


      <h3>Работа с данными</h3>

      <ul>
        <li>
          <a href="https://github.com/samuelcolvin/pydantic">pydantic</a> - комбо из питоновских дата-классов и парсилки
          джсона - очень приятно с данными работать становится; есть <a
          href="https://github.com/koxudaxi/pydantic-pycharm-plugin">плагин на pycharm</a>; альтернативы: <a
          href="https://docs.python.org/3/library/dataclasses.html">питоновские датаклассы</a>, <a
          href="https://www.attrs.org/en/stable/">attrs</a>,
          <a href="https://marshmallow.readthedocs.io/en/stable/">marshmallow</a>
        </li>
        <li>
          <a href="https://github.com/nficano/humps">humps </a> - конвертит словари из одного нейминга в другой
        </li>
        <li>
          <a href="https://github.com/more-itertools/more-itertools">more-itertools</a> - различные утилитки для работы
          с коллекциями
        </li>
        <li>
          <a href="https://pypi.org/project/parse/">parse</a> - противоположность <code>format</code> - позволяет
          парсить строки по шаблону, не упарываясь регулярками
        </li>
      </ul>

      <h3>Работа с документами</h3>

      <ul>
        <li>
          <a href="https://jinja.palletsprojects.com/en/2.11.x/">jinja2</a> - лучший шаблонизатор
        </li>
        <li>
          <a href="https://openpyxl.readthedocs.io/en/stable/">openpyxl</a> - лучшая либа для работы с xlsx
        </li>
        <li>
          <a href="https://github.com/potykion/jinja2xlsx">jinja2xlsx</a> - <i>собственная разработка</i>, конвертит
          html-таблицы в openpyxl-таблицы
        </li>
        <li>
          <a href="https://github.com/JazzCore/python-pdfkit">python-pdfkit</a> - лучший конвертер хтмл в пдф на базе <a
          href="https://wkhtmltopdf.org/">wkhtmltopdf</a>
        </li>
        <li>
          <a href="https://github.com/elapouya/python-docx-template">python-docx-template</a> - jinja2 шаблоны в ворде
        </li>
        <li>
          <a href="https://github.com/potykion/docci">docci</a> - <i>собственная разработка</i>, абстракция работы с
          файлами:
          определение mime-type,
          конвертация в base64, сохранение/загрузка; а также работа с зип-архивами, эксельками, директориями
        </li>
        <li>
          <a href="https://github.com/martinblech/xmltodict">xmltodict</a> - нормальная работа с xml
        </li>
      </ul>
    </section>

    <section>
      <h3>QA</h3>

      <h4>Качество кода</h4>

      <ul>
        <li><a href="https://github.com/psf/black">black</a> - форматтер кода</li>
        <li><a href="https://github.com/python/mypy">mypy</a> - чекер типизации; альтернативы: <a
          href="https://github.com/microsoft/pyright">pyright</a>, <a href="https://github.com/google/pytype">pytype</a>
        </li>

        <li>
          <a href="https://github.com/PyCQA/flake8">flake8</a> - линтер, есть <a
          href="https://github.com/DmytroLitvinov/awesome-flake8-extensions">куча плагинов</a>, быстрее
          <a href="https://github.com/PyCQA/pylint">pylint</a>
        </li>

        <li>
          <a href="https://github.com/pycqa/pydocstyle">pydocstyle</a> - линтер, проверяющий наличие докстрингов
        </li>

        <li>
          <a href="https://github.com/pre-commit/pre-commit">pre-commit</a> - пре-коммит хуки - запуск штук, описанных
          выше, перед каждым коммитом; считай локальный сиай
        </li>
      </ul>


      <h4>Тестирование</h4>

      <ul>
        <li>
          <a href="https://github.com/pytest-dev/pytest/">pytest</a> - лучший фреймворк для тестирования; есть <a
          href="https://github.com/search?q=pytest">куча
          плагинов</a>
        </li>

        <li>
          <a href="https://github.com/getsentry/responses">responses</a> - моки для <a
          href="https://github.com/psf/requests">requests</a>
        </li>

        <li>
          <a href="https://github.com/pnuckowski/aioresponses">aioresponses</a> - моки асинхронных хттп-запросов через
          aiohttp; альтернативы: <a
          href="https://github.com/aresponses/aresponses">aresponses</a>
        </li>

        <li>

          <a href="https://github.com/spulec/freezegun">freezegun</a> - моки для дейттайма
        </li>

        <li>
          <a href="https://github.com/hamcrest/PyHamcrest">PyHamcrest</a> - матчеры для тестов
        </li>
        <li>
          <a href="https://factoryboy.readthedocs.io/en/stable/">factory_boy </a> - тестовые фабрики - генерят объекты с
          фейковыми данными; альтернативы: <a href="https://pypi.org/project/model-bakery/">model-bakery</a> - для
          джанги
        </li>


      </ul>

      <h4>Логгирование, профилирование, отладка</h4>
      <ul>
        <li>
          <a href="https://github.com/Delgan/loguru">loguru</a> - лучшая либа для логгирования
        </li>
        <li>
          <a href="https://github.com/cknd/stackprinter">stackprinter</a> - получше стектрейс; альтернативы: <a
          href="https://github.com/cool-RR/PySnooper">PySnooper</a>
        </li>
        <li>
          <a href="https://github.com/plasma-umass/scalene">scalene</a> - профилировщик
        </li>

      </ul>
    </section>

    <section>
      <h3>Девопс</h3>
      <ul>
        <li>
          <a href="https://gunicorn.org/">gunicorn</a> - популярный WSGI-сервер - масштабирует однопроцессорный сервы,
          типа джанги; альтернативы: <a href="https://www.uvicorn.org/">uvicorn</a> - асинхронный WSGI-сервер - ASGI
        </li>
        <li>
          <a href="http://supervisord.org/">Supervisor</a> - управление процессами - автоматически
          запускает/перезапускает процессы на линукс-машинке, напр. gunicorn, альтернативы: <a
          href="https://www.docker.com/">Docker</a>
        </li>
        <li>
          <a href="http://www.fabfile.org/">Fabric</a> - выполнение команд на удаленной машине; альтернативы: <a
          href="https://docs.ansible.com/">ansible</a>
        </li>
      </ul>
    </section>

    <section>

      <h3>Прочее</h3>

      <ul>
        <li>
          <a href="https://github.com/python-poetry/poetry">poetry</a> - лучший менеджер зависимостей; есть <a
          href="https://github.com/koxudaxi/poetry-pycharm-plugin">плагин для пайчарма</a>
        </li>
        <li>
          <a href="https://pyjwt.readthedocs.io/en/stable/">pyjwt</a> - работа с jwt-токенами
        </li>
        <li>
          <a href="https://pypi.org/project/python-dotenv/">python-dotenv</a> - читает .env-файл - файл с переменными
          окружения - удобно для локальных настроек
        </li>

        <li>
          <a href="https://github.com/ets-labs/python-dependency-injector">python-dependency-injector</a> - норм ioc
          контейнер
        </li>

        <li>
          <a href="https://github.com/celery/celery">celery</a> - либа для работы с очередями задач; альтернативы: <a
          href="https://github.com/Bogdanp/dramatiq">dramatiq</a>, <a href="https://github.com/rq/rq">rq</a>
        </li>
        <li>
          <a href="https://github.com/pallets/click">click</a> - либа для создания кли приложений; альтернативы: <a
          href="https://github.com/tiangolo/typer">typer</a> - кли на тайпингах; <a
          href="https://github.com/chriskiehl/Gooey">Gooey</a> - делает юай из кли
        </li>

        <li>
          <a href="http://babel.pocoo.org/en/latest/">babel</a> - либа для локализации
        </li>

        <li>
          <a href="https://pillow.readthedocs.io/en/stable/">pillow</a> - популярная либа для работы с картинками
        </li>
        <li>
          <a href="https://github.com/pypiserver/pypiserver">pypiserver</a> - pypi сервер - полезно когда надо есть
          корпоративные либы
        </li>


        <li>
          <a href="https://github.com/liiight/notifiers">notifiers</a> - либа для отправки уведомлений, напр. через
          Pushover; альтернативы: <a href="https://github.com/caronc/apprise">apprise</a>
        </li>


        <li>
          <a href="https://github.com/CoatiSoftware/Sourcetrail">Sourcetrail</a> - строит граф зависимостей / иерархию
          классов; есть <a href="https://github.com/CoatiSoftware/idea-sourcetrail">плагин для пайчарма</a>
        </li>


      </ul>
    </section>

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
    title: "Python / Любимые либы"
  }),
})
export default class libs extends Vue {

}
</script>

<style scoped>
</style>
