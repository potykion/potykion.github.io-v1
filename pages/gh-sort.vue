<template>
  <article>

    <h1>Сортировка гх</h1>

    <p>Аналогично
      <nuxt-link to="/yt">ютубу</nuxt-link>
      ,
      я решил посортировать гх-старс.
    </p>
    <p>На момент записи у меня 240 звезд, и я бывает ловлю себя на
      мысли, что я ставлю звезды просто так, мол когда-нибудь пригодится. По факту, то, что я использую постоянно, я не
      старрю, а то, что в старред, - просто свалка, считай, лайки. </p>
    <p>
      В этой статье я напишу пару слов о каждом проекте, который я
      старрил + о проектах, которыми я пользуюсь на регулярной основе, чтобы, при возникновении проблем, у меня было
      место,
      где можно посмотреть возможные решения.
    </p>

    <p>То чем я здесь занимаюсь - по сути состоявление <a
      href="https://github.com/sindresorhus/awesome">awesome-списков</a>. На любую популярную технологию есть
      awesome-список - список библиотек для решения различных проблем на этой технологии. Например, есть <a
        href="https://github.com/vinta/awesome-python">список для питона</a>, есть <a
        href="https://github.com/timofurrer/awesome-asyncio">список для асинхронного питона</a>, <a
        href="https://github.com/dahlia/awesome-sqlalchemy">список для склалхимии</a> - либы для работы с бд в питоне
    </p>

    <section>

      <h2>Python</h2>

      <ul>
        <li><a href="https://github.com/psf/black">black</a> - форматтер кода</li>
        <li><a href="https://github.com/cobrateam/splinter">splinter</a> - более высокоуровневая обертка над Selenium -
          штукой для управлением браузера
        </li>

        <li><a href="https://github.com/python/mypy">mypy</a> - чекер типизации; альтернативы: <a
          href="https://github.com/microsoft/pyright">pyright</a>, <a href="https://github.com/google/pytype">pytype</a>
        </li>
        <li>
          <a href="https://github.com/more-itertools/more-itertools">more-itertools</a> - различные утилитки для работы
          с коллекциями
        </li>
        <li>
          <a href="https://github.com/python-poetry/poetry">poetry</a> - лучший менеджер зависимостей; есть <a href="https://github.com/koxudaxi/poetry-pycharm-plugin">плагин для пайчарма</a>
        </li>
        <li>
          <a href="https://github.com/getsentry/responses">responses</a> - моки для <a
          href="https://github.com/psf/requests">requests</a>
        </li>

        <li>
          <a href="https://github.com/axnsan12/drf-yasg">drf-yasg</a> - лучший генератор swagger-доки для джанги
        </li>

        <li>
          <a href="https://github.com/Delgan/loguru">loguru</a> - лучшая либа для логгирования
        </li>

        <li>
          <a href="https://github.com/samuelcolvin/pydantic">pydantic</a> - комбо из питоновских дата-классов и парсилки
          джсона - очень приятно с данными работать становится; есть надстройка - <a
          href="https://github.com/tiangolo/fastapi">fastapi</a> - хттп-фреймворк, который сразу парсит данные запроса в
          pydantic-модельки; есть <a href="https://github.com/koxudaxi/pydantic-pycharm-plugin">плагин на pycharm</a>
        </li>

        <li>
          <a href="https://github.com/pnuckowski/aioresponses">aioresponses</a> - моки асинхронных хттп-запросов через
          aiohttp; альтернативы: <a href="https://github.com/aresponses/aresponses">aresponses</a>
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
          <a href="https://github.com/JazzCore/python-pdfkit">python-pdfkit</a> - лучший конвертер хтмл в пдф на базе <a
          href="https://wkhtmltopdf.org/">wkhtmltopdf</a>
        </li>

        <li>
          <a href="https://github.com/pypiserver/pypiserver">pypiserver</a> - pypi сервер - полезно когда надо есть
          корпоративные либы
        </li>

        <li>
          <a href="https://github.com/encode/httpx">httpx</a> - асинхронный хттп-клиент - альтернатива aiohttp; <a
          href="https://github.com/lundberg/respx">respx</a> - моки для либы
        </li>

        <li>
          <a href="https://github.com/mvantellingen/python-zeep">python-zeep</a> - SOAP клиент
        </li>

        <li>
          <a href="https://github.com/liiight/notifiers">notifiers</a> - либа для отправки уведомлений, напр. через
          Pushover
        </li>

        <li>
          <a href="https://github.com/pallets/click">click</a> - либа для создания кли приложений
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
          <a href="https://github.com/martinblech/xmltodict">xmltodict</a> - нормальная работа с xml
        </li>
        <li>
          <a href="https://github.com/elapouya/python-docx-template">python-docx-template</a> - jinja2 шаблоны в ворде
        </li>
      </ul>

    </section>

    <section>

      <h2>JS/TS + Vue/Nuxt</h2>

      <ul>
        <li>
          <a href="https://github.com/charliekassel/vuejs-datepicker">vuejs-datepicker</a> - нормальный дейтпикер;
          альтернативы: <a href="https://github.com/ankurk91/vue-flatpickr-component">vue-flatpickr-component</a>
        </li>

        <!--        todo vuetify
                      https://github.com/jgthms/bulma + https://github.com/buefy/buefy as alt

        -->

        <li>
          <a href="https://github.com/rstacruz/nprogress">nprogress</a> - прогрессбар-полосочка; в Nuxt есть из коробки
        </li>
        <li>
          <a href="https://github.com/lodash/lodash">lodash</a> - утилитки
        </li>

        <li>
          <a href="https://github.com/cypress-io/cypress">cypress</a> - аналог Selenium - позволяет писать ui тесты для
          джс + куча плюшек, типа моканья хттп-запросов
        </li>

        <li>
          <a href="https://github.com/facebook/jest">jest</a> - тестовый фреймворк для джс
        </li>

        <li>
          <a href="https://github.com/sdras/cssgridgenerator">cssgridgenerator</a> - генератор css grid
        </li>

        <li>
          <a href="https://github.com/domchristie/humps">humps</a> - конвертит данные из одного нейминга в другой, напр.
          из camelCase в under_score
        </li>
        <li>
          <a href="https://github.com/ramda/ramda">ramda</a> - фп утилитки
        </li>
        <li>
          <a href="https://github.com/typicode/husky">husky</a> - коммит хуки
        </li>
        <li>
          <a href="https://github.com/typicode/json-server">json-server</a> - превращает json файл в сервер! - оч удобно
          для моков
        </li>
        <li>
          <a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a> - нормальный драг-н-дроп
        </li>
        <li>
          <a href="https://github.com/responsively-org/responsively-app">responsively-app</a> - просмотрщик сайта на браузерах разного размера
        </li>

      </ul>

    </section>


    <section>
      <h2>Прочее</h2>
      <ul>
        <!--todo postman -->
        <li><a href="https://github.com/httpie/httpie">httpie</a> - кли апи клиент; есть надстройка - <a
          href="https://github.com/httpie/http-prompt">HTTP Prompt
        </a> - позволяет собирать хттп-запрос по частям
        </li>
        <li>
          <a href="https://github.com/hoppscotch/hoppscotch">hoppscotch</a> - веб апи клиент
        </li>

        <li><a href="https://github.com/carbon-app/carbon">carbon</a> - позволяет делать красивые скрины с кодом; есть
          еще <a href="https://github.com/octref/polacode">polacode</a> - то же самое, ток сразу из vscode можно делать
        </li>

        <!--        todo fx as alt -->
        <li>
          <a href="https://github.com/antonmedv/fx">fx</a> - кли просмотрщик джсона - никогда не пользовался,
          предпочитаю <a href="https://jsoneditoronline.org/">jsoneditoronline</a>
        </li>

        <li>
          <a href="https://github.com/Zettlr/Zettlr">Zettlr</a> - маркдаун редактор; альтернативы:
          <a href="https://github.com/notable/notable">notable</a>
        </li>

        <li>
          <a href="https://github.com/google/jsonnet">jsonnet</a> - темплейт ленгвич для джсонок; никогда не было задачи
          сделать джсон-темплейты, были задача сделать хтмл темплейт, и тут я <a
          href="https://github.com/pallets/jinja/">jinja2</a> использую
        </li>

        <li>
          <a href="https://github.com/faressoft/terminalizer">terminalizer</a> - штука для создания гифок с кли
          коммандами
        </li>

        <li>
          <a href="https://github.com/chocolatey/choco">choco</a> - аналог apt-get ток для винды - оч удобная штука - в
          1 комманду ставить софт, типа psql, paintnet, node и проч - и все в одном месте
        </li>

        <li>
          <a href="https://github.com/dnSpy/dnSpy">dnSpy</a> - сборная солянка из <a
          href="https://github.com/icsharpcode/ILSpy">c# декомпилятора</a>, деббаггера, с возможностью перекомпиляции
        </li>

        <li>
          <a href="https://github.com/automagica/automagica">automagica</a> - автоматизация, аналог <a
          href="https://www.autoitscript.com/site/">autoit</a>
        </li>

        <li>
          <a href="https://github.com/microsoft/terminal">terminal</a> - пиздатый терминал от виндовс, ток win + r > cmd
          удобнее
        </li>
        <li>
          <a href="https://github.com/microsoft/PowerToys">PowerToys</a> - приколюхи для винды: колор-пикер, поиск,
          менеджмент расположения окон, превью в файл експлорере
        </li>

        <li>
          <a href="https://github.com/Requarks/wiki">wikijs</a> - локальная вики, альтернативы: Notion, <a
          href="https://github.com/GitbookIO/gitbook">gitbook</a>
        </li>

        <li>
          <a href="https://github.com/ShareX/ShareX">ShareX</a> - штука для создания гифок на винде
        </li>

        <li>
          <a href="https://github.com/mermaid-js/mermaid">mermaid</a> - язык для описания диаграмм; есть куча очерток,
          напр. для <a href="https://github.com/mgaitan/sphinxcontrib-mermaid">Sphinx</a>
        </li>

        <li>
          <a href="https://github.com/pyouroboros/ouroboros">ouroboros</a> - автоматически апдейтит докер контейнеры;
          альтернативы:
          <a href="https://github.com/containrrr/watchtower">watchtower</a>
        </li>

      </ul>
    </section>


    <section>
      <h2>Почитать</h2>

      <ul>
        <li>
          <a href="https://github.com/kylelobo/The-Documentation-Compendium">The-Documentation-Compendium</a> - как
          писать докумментацию
        </li>
        <li>
          <a href="https://github.com/jlevy/the-art-of-command-line">the-art-of-command-line</a> - как делать кли
          приложения
        </li>
        <li>
          <a href="https://github.com/RomuloOliveira/commit-messages-guide">commit-messages-guide</a> - гайд по коммит
          месседжам
        </li>
        <li>
          <a href="https://github.com/ryanmcdermott/clean-code-javascript">clean-code-javascript</a> - как писать код на
          джс
        </li>
        <li>
          <a href="https://github.com/tlbootcamp/tlroadmap">tlroadmap</a> - как стать тимлидом
        </li>
        <li>
          <a
            href="https://github.com/goldbergyoni/javascript-testing-best-practices">javascript-testing-best-practices</a>
          - гайд по тестам на джс
        </li>
        <li>
          <a href="https://github.com/kgrzybek/modular-monolith-with-ddd">modular-monolith-with-ddd</a> - про ддд
          архитектуру
        </li>
        <li>
          <a href="https://github.com/zualex/devmap">devmap</a> - Карта развития веб-разработчика

        </li>
      </ul>

      <p class="italic">
        я ничего из этого не читал кста
      </p>
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
    title: "Сортировка гх"
  }),
})
export default class GitHubSortPage
  extends Vue {

}
</script>

<style scoped>
</style>
