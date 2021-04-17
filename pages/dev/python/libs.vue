<template>
  <article>

    <h2>Python / Любимые либы</h2>

    <h3>Веб-фреймворки</h3>

    <ul>
      <li><a href="https://www.djangoproject.com/">Django</a> - самый популярный веб-фреймворк, куча функций из коробки
        (ака batteries included),
        куча интеграций; если хочется писать сервера на питоне, и не знаешь с чего начать - бери джангу - пусть
        генерится куча файлов на старте, но разобравшись в них, понимаешь, что фреймворки строятся на тех же концепциях

        <ul>
          <li><a href="https://www.django-rest-framework.org/">Django REST framework</a> - мастхев чтобы писать апишки
          </li>
          <li><a href="https://django-ninja.rest-framework.com/">Django Ninja</a> - надстройка над DRF, которая
            позволяет писать апишки в стиле FastAPI -
            с помощью тайпингов и Pydantic
          </li>
        </ul>
      </li>
      <li>
        <a href="https://flask.palletsprojects.com/en/1.1.x/">Flask</a> - самый простой веб-фреймворк - начать можно с
        <a
          href="https://flask.palletsprojects.com/en/1.1.x/quickstart/#quickstart">1 файла с 5 строчками</a>; но по
        сравнению с Джангой, мало батареек в коробке - надо куча всего доустанавливать - в итоге получается та же джанга
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

    <h3>QA</h3>

    <!--      <p>Здесь будут представлены тулы для проверки качества кода</p>-->

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


    <h3>Тестирование</h3>

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
        <a href="https://github.com/hamcrest/PyHamcrest">PyHamcrest</a> - матчеры для тестов
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

    </ul>

    <h3>Веб-парсинг</h3>

    <ul>
      <li><a href="https://github.com/cobrateam/splinter">splinter</a> - более высокоуровневая обертка над <a
        href="https://github.com/SeleniumHQ/selenium/">Selenium</a> -
        штукой для управлением браузера; альтернативы: <a href="https://github.com/mherrmann/selenium-python-helium">helium</a>
      </li>

      <li>
        <a href="https://github.com/martinblech/xmltodict">xmltodict</a> - нормальная работа с xml
      </li>


    </ul>

    <h3>Работа с документами</h3>

    <ul>
      <li>
        <a href="https://github.com/JazzCore/python-pdfkit">python-pdfkit</a> - лучший конвертер хтмл в пдф на базе <a
        href="https://wkhtmltopdf.org/">wkhtmltopdf</a>
      </li>
      <li>
        <a href="https://github.com/elapouya/python-docx-template">python-docx-template</a> - jinja2 шаблоны в ворде
      </li>

    </ul>


    <h3>Прочее</h3>

    <ul>

      <li>
        <a href="https://github.com/more-itertools/more-itertools">more-itertools</a> - различные утилитки для работы
        с коллекциями
      </li>
      <li>
        <a href="https://github.com/python-poetry/poetry">poetry</a> - лучший менеджер зависимостей; есть <a
        href="https://github.com/koxudaxi/poetry-pycharm-plugin">плагин для пайчарма</a>
      </li>

      <li>
        <a href="https://github.com/axnsan12/drf-yasg">drf-yasg</a> - лучший генератор swagger-доки для джанги
      </li>

      <li>
        <a href="https://github.com/Delgan/loguru">loguru</a> - лучшая либа для логгирования
      </li>

      <li>
        <a href="https://github.com/samuelcolvin/pydantic">pydantic</a> - комбо из питоновских дата-классов и парсилки
        джсона - очень приятно с данными работать становится; есть <a
        href="https://github.com/koxudaxi/pydantic-pycharm-plugin">плагин на pycharm</a>
      </li>


      <li>
        <a href="https://github.com/celery/celery">celery</a> - либа для работы с очередями задач; альтернативы: <a
        href="https://github.com/Bogdanp/dramatiq">dramatiq</a>, <a href="https://github.com/rq/rq">rq</a>
      </li>

      <li>
        <a href="https://github.com/wagtail/wagtail">wagtail</a> - cms для джанги, мб когда будет серв для бложека
        буду юзать
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
        <a href="https://github.com/pallets/click">click</a> - либа для создания кли приложений; альтернативы: <a
        href="https://github.com/tiangolo/typer">typer</a>
      </li>
      <li>
        <a href="https://github.com/sivel/speedtest-cli">speedtest-cli</a> - обертка над <a
        href="https://www.speedtest.net/">speedtest</a> - померить скорость wifi
      </li>

      <li>
        <a href="https://github.com/cknd/stackprinter">stackprinter</a> - получше стектрейс; альтернативы: <a
        href="https://github.com/cool-RR/PySnooper">PySnooper</a>
      </li>

      <li>
        <a href="https://github.com/CoatiSoftware/Sourcetrail">Sourcetrail</a> - строит граф зависимостей / иерархию
        классов; есть <a href="https://github.com/CoatiSoftware/idea-sourcetrail">плагин для пайчарма</a>
      </li>
      <li>
        <a href="https://github.com/ets-labs/python-dependency-injector">python-dependency-injector</a> - норм ioc
        контейнер
      </li>
      <li>
        <a href="https://github.com/plasma-umass/scalene">scalene</a> - профилировщик
      </li>
      <li>
        <a href="https://github.com/chriskiehl/Gooey">Gooey</a> - делает юай из кли
      </li>

    </ul>

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
