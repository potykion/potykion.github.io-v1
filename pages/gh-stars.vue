<template>
  <article>

    <h1>ГХ старс</h1>

    <p>Аналогично
      <nuxt-link to="/yt">ютубу</nuxt-link>
      ,
      я решил посортировать гх-старс.
    </p>
    <p>На момент записи у меня 240 звезд, и я, бывает, ловлю себя на
      мысли, что я ставлю звезды просто так, мол когда-нибудь пригодится. По факту, то, что я использую постоянно, я не
      старрю, а то, что в старред, - просто свалка, считай, лайки. </p>
    <p>
      В этой статье я напишу пару слов о каждом проекте, который я
      старрил + о проектах, которыми я пользуюсь на регулярной основе, чтобы, при возникновении проблем, у меня было
      место,
      где можно посмотреть возможные решения.
    </p>

    <p>То, чем я здесь занимаюсь, - по сути состоявление <a
      href="https://github.com/sindresorhus/awesome">awesome-списков</a>. На любую популярную технологию есть
      awesome-список - список библиотек для решения различных проблем на этой технологии. Например, есть <a
        href="https://github.com/vinta/awesome-python">список для питона</a>, есть <a
        href="https://github.com/timofurrer/awesome-asyncio">список для асинхронного питона</a>, <a
        href="https://github.com/dahlia/awesome-sqlalchemy">список для склалхимии</a> - либы для работы с бд в питоне.
    </p>

    <section>

      <h2>Python + Web</h2>

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
          <a href="https://github.com/aio-libs/aiohttp">aiohttp</a>; альтернативы: <a
          href="https://github.com/aresponses/aresponses">aresponses</a>
        </li>

        <li>
          <a href="https://github.com/hamcrest/PyHamcrest">PyHamcrest</a> - матчеры для тестов
        </li>

      </ul>


      <h3>Веб клиенты</h3>

      <ul>
        <li>
          <a href="https://github.com/psf/requests">requests</a> - самая популярная либа для http-запросов
        </li>

        <li>
          <a href="https://github.com/encode/httpx">httpx</a> - асинхронный хттп-клиент - альтернатива <a
          href="https://github.com/aio-libs/aiohttp">aiohttp</a>; <a
          href="https://github.com/lundberg/respx">respx</a> - моки для либы
        </li>

        <li>
          <a href="https://github.com/mvantellingen/python-zeep">python-zeep</a> - SOAP клиент
        </li>

      </ul>

      <h3>Веб парсинг</h3>

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
          джсона - очень приятно с данными работать становится; есть надстройка - <a
          href="https://github.com/tiangolo/fastapi">fastapi</a> - хттп-фреймворк, который сразу парсит данные запроса в
          pydantic-модельки; есть <a href="https://github.com/koxudaxi/pydantic-pycharm-plugin">плагин на pycharm</a>
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

    </section>

    <section>

      <h2>JS/TS + Vue/Nuxt</h2>

      <h3>UI</h3>

      <ul>
        <li>
          <a href="https://github.com/vuetifyjs/vuetify">vuetify</a>
          <nuxt-emoji-link to="https://github.com/nuxt-community/vuetify-module"/>

          - лучший ui фреймворк про материал дезигн, все
          что надо есть: сетка, дейтпикеры, селекты и тд
        </li>
        <li>
          <a href="https://github.com/tailwindlabs/tailwindcss">tailwindcss</a>
          <nuxt-emoji-link
            to="https://github.com/nuxt-community/tailwindcss-module"/>

          - лучший css фреймворк, если не
          разрешили пользоваться vuetify
        </li>
        <li>
          <a href="https://github.com/charliekassel/vuejs-datepicker">vuejs-datepicker</a> - нормальный дейтпикер;
          альтернативы: <a href="https://github.com/ankurk91/vue-flatpickr-component">vue-flatpickr-component</a>
        </li>
        <li>
          <a href="https://github.com/shentao/vue-multiselect">vue-multiselect</a> - лучший селект
        </li>
        <li>
          <a href="https://github.com/rstacruz/nprogress">nprogress</a> - прогрессбар-полосочка; в Nuxt есть из коробки
        </li>
        <li>
          <a href="https://github.com/SortableJS/Vue.Draggable">Vue.Draggable</a> - нормальный драг-н-дроп
        </li>
        <li>
          <a href="https://github.com/mirari/v-viewer">v-viewer</a> - крутой просмотрщик
          картинок
        </li>
        <li>
          <a
            href="https://github.com/surmon-china/vue-awesome-swiper">vue-awesome-swiper</a>
          - крутой свайпер
        </li>
        <li>
          <a href="https://github.com/PNKBizz/vue-yandex-map">vue-yandex-map</a> - яндекс карточки
        </li>
        <li>
          <a href="https://github.com/vuejs-tips/vue-the-mask">vue-the-mask</a> - маски для инпутов, напр. для
          телефонных номеров
        </li>

        <li>
          <a href="https://github.com/sw-yx/spark-joy">spark-joy</a> - подборочка дезигн приколюх
        </li>


      </ul>

      <h3>Тестирование</h3>

      <ul>
        <li>
          <a href="https://github.com/facebook/jest">jest</a> - лучший фреймворк для юнит и интегрейшн тестов
        </li>

        <li>
          <a href="https://github.com/cypress-io/cypress">cypress</a> - аналог Selenium - позволяет писать ui тесты для
          джс + куча плюшек, типа моканья хттп-запросов
        </li>

        <li>
          <a href="https://github.com/typicode/husky">husky</a> - коммит хуки
        </li>
      </ul>

      <h3>TS + Vue/Nuxt</h3>

      <ul>
        <li>
          <a href="https://github.com/vuejs/vue-class-component">vue-class-component</a>, <a
          href="https://github.com/kaorun343/vue-property-decorator">vue-property-decorator</a>
          <nuxt-emoji-link to="https://github.com/nuxt-community/nuxt-property-decorator"/>
          - позволяет писать
          vue-компоненты в виде тс-классов
        </li>

        <li>
          <a href="https://github.com/sascha245/vuex-simple">vuex-simple</a> - работа с vuex на классах - код читаемее +
          стейт типизирован - не надо писать <code>mapState</code>, <code>mapGetters</code> и проч.
        </li>

        <li>
          <a href="https://github.com/sascha245/vue-typedi">vue-typedi</a> - диайчик, плотно интегрируется с либой выше
        </li>
      </ul>


      <h3>Прочее</h3>

      <ul>
        <li>
          <a href="https://github.com/axios/axios">axios</a>
          <nuxt-emoji-link to="https://github.com/nuxt-community/axios-module"/>
          - лучшая либа для http запросов
        </li>
        <li>
          <a href="https://github.com/iamkun/dayjs">dayjs</a> - лучшая либа для работы с датами
        </li>

        <li>
          <a href="https://github.com/chodorowicz/ts-debounce">ts-debounce</a> - рабочий дебаунс для тс
        </li>

        <li>
          <a href="https://github.com/uuidjs/uuid">uuid</a> - ююидики
        </li>
        <li>
          <a href="https://github.com/lodash/lodash">lodash</a> - утилитки
        </li>

        <li>
          <a href="https://github.com/domchristie/humps">humps</a> - конвертит данные из одного нейминга в другой, напр.
          из camelCase в under_score
        </li>
        <li>
          <a href="https://github.com/ramda/ramda">ramda</a> - фп утилитки
        </li>

        <li>
          <a href="https://github.com/typicode/json-server">json-server</a> - превращает json файл в сервер! - оч удобно
          для моков
        </li>

        <li>
          <a href="https://github.com/responsively-org/responsively-app">responsively-app</a> - просмотрщик сайта на
          браузерах разного размера
        </li>


      </ul>

    </section>

    <section>
      <h2>Dart + Flutter</h2>

      <!--      @formatter:off -->

      <h3>Мастхев</h3>
      <ul>
        <li><a href="https://pub.dev/packages/freezed">freezed</a> - юнионы и иммутабельные датаклассы; есть интеграция с json_serializable</li>
        <li><a href="https://pub.dev/packages/json_serializable">json_serializable</a> - json (де)сериализация</li>

        <li><a href="https://pub.dev/packages/tuple">tuple</a> - тьюплы</li>
        <li><a href="https://pub.dev/packages/collection">collection</a> - утилитки для работы с коллекциями, типа <code>groupBy</code>

        <li><a href="https://pub.dev/packages/intl">intl</a> - форматирование дат</li>
        <li><a href="https://pub.dev/packages/flutter_hooks">flutter_hooks</a> - хуки - позволяют делать логику реюзабельной, напр. позволяет добавлять стейт в стейтлес-виджеты</li>
      </ul>

      <h3>Стейт-менеджмент и диай</h3>
      <ul>
        <li><a href="https://pub.dev/packages/riverpod">river_pod</a> - самый любимый стейт-менеджмент + диай; есть <a href="https://pub.dev/packages/hooks_riverpod">версия с хуками</a></li>
        <li><a href="https://pub.dev/packages/bloc">bloc</a> - стейт-менеджмент на событиях / иммутабельности / стримах - говорят, что высокий порог входа, но если знать концепции, то все норм</li>
        <li><a href="https://pub.dev/packages/provider">provider</a> - диайчик на случай если стейт-менеджмент не riverpod - типа есть интеграция с bloc</li>
        <li><a href="https://pub.dev/packages/get">get</a> - стейт-менеджмент / роутинг / диай / утилиты - звучит круто, но дока бедная</li>
      </ul>

      <h3>БДшки</h3>
      <ul>
        <li><a href="https://pub.dev/packages/cloud_firestore">cloud_firestore</a> - интеграция с FireStore - онлайн бдшка из Firebase</li>
        <li><a href="https://pub.dev/packages/hive">hive</a> - nosql</li>
        <li><a href="https://pub.dev/packages/shared_preferences">shared_preferences</a> - лайтовый персистенс</li>
        <li><a href="https://pub.dev/packages/moor">moor</a> - sqlite орм</li>
      </ul>

      <h3>QA / Тестирование</h3>
      <ul>
        <li><a href="https://pub.dev/packages/effective_dart">effective_dart</a> - линтер</li>
        <li><a href="https://pub.dev/packages/mocktail">mocktail</a> - либа для моков; апи похож на <a href="https://pub.dev/packages/mockito">mockito</a>, но нет кодогенерации - что упрощает использование; еще есть возможность мокать <code>Image.network</code></li>
        <li><a href="https://pub.dev/packages/cloud_firestore_mocks">cloud_firestore_mocks</a> - фаерстор моки</li>
      </ul>

      <h3>Веб клиенты / Аутентификация</h3>
      <ul>
        <li><a href="https://pub.dev/packages/http">http</a> - http запросики</li>
        <li><a href="https://pub.dev/packages/dio">dio</a> - высокоуровневая обертка над http</li>
        <li><a href="https://pub.dev/packages/retrofit">retrofit.dart</a> - еще более высокоуровневая обертка над http</li>
        <li><a href="https://pub.dev/packages/firebase_auth">firebase_auth</a> - фаербейз ауф; есть интеграция с <a href="https://pub.dev/packages/google_sign_in">гугл аутентификацией</a></li>
      </ul>

      <h3>UI / Компоненты</h3>
      <ul>
        <li><a href="https://pub.dev/packages/indexed_list_view">indexed_list_view</a> - лист-вью с отрицательным скролом</li>
        <li><a href="https://pub.dev/packages/flutter_slidable">flutter_slidable</a> - слайдабл экшены</li>
        <li><a href="https://pub.dev/packages/page_transition">page_transition</a> - транзишны между страницами</li>
        <li><a href="https://pub.dev/packages/flutter_typeahead">flutter_typeahead</a> - автокомплит</li>
        <li><a href="https://pub.dev/packages/flutter_swiper">flutter_swiper</a> - свайпер, если PageView недостаточно
        <li><a href="https://pub.dev/packages/flutter_colorpicker">flutter_colorpicker</a> - колор-пикер</li>
        <li><a href="https://pub.dev/packages/file_picker">file_picker</a> - выбор файла</li>
        <li><a href="https://pub.dev/packages/camera">camera</a> - работа с камерой</li>
        <li><a href="https://pub.dev/packages/google_fonts">google_fonts</a> - гугл шрифты</li>
        <li><a href="https://pub.dev/packages/url_launcher">url_launcher</a> - открытие ссылочек</li>
        <li><a href="https://pub.dev/packages/webview_flutter">webview_flutter</a> - вебвьюшка</li>

      </ul>

      <h3>Прочее</h3>

      <ul>
        <li><a href="https://pub.dev/packages/flutter_local_notifications">flutter_local_notifications</a> - локальные пуши</li>
        <li><a href="https://pub.dev/packages/uuid">uuid</a> - uuid</li>
        <li><a href="https://pub.dev/packages/device_info">device_info</a> - инфа о девайсе</li>
        <li><a href="https://pub.dev/packages/flutter_launcher_icons">flutter_launcher_icons</a> - генерация иконочек аппа</li>
        <li><a href="https://pub.dev/packages/path_provider">path_provider</a> - получение часто используемых путей</li>
        <li><a href="https://pub.dev/packages/image">image</a> - работа с картинками</li>
      </ul>

      <!--      @formatter:on -->
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
          <a href="https://github.com/nvm-sh/nvm">nvm</a> (<a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a>
          для винды) - Node Version Manager - позволяет ставить и менеджерить несколько версий ноды. Полезно, когда
          работаешь с легаси, напр. с gulp 3, который <a href="https://github.com/gulpjs/gulp/issues/2324">не робит с
          нодой 12+</a> => легче поставить себе ноду 10.
        </li>

        <li>
          <a href="https://github.com/marktext/marktext">marktext</a> - маркдаун редактор; альтернативы: <a
          href="https://github.com/Zettlr/Zettlr">Zettlr</a>
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
          <a href="https://github.com/microsoft/PowerToys">PowerToys</a> - приколюхи для винды: колор-пикер, лаунчер,
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
          <a href="https://github.com/mingrammer/diagrams">diagrams</a> - питон код для описания диаграмм
        </li>

        <li>
          <a href="https://github.com/pyouroboros/ouroboros">ouroboros</a> - автоматически апдейтит докер контейнеры;
          альтернативы:
          <a href="https://github.com/containrrr/watchtower">watchtower</a>
        </li>

        <li>
          <a href="https://github.com/docker-slim/docker-slim">docker-slim</a> - уменьшает размер докер имеджа
        </li>

        <li>
          <a href="https://github.com/timqian/star-history">star-history</a> - график зведочек по репо
        </li>

        <li>
          <a href="https://github.com/kelseyhightower/nocode">nocode</a> - как писать самый лучший код
        </li>
        <li>
          <a href="https://github.com/snooppr/snoop">snoop</a> - штука для деанона
        </li>
        <li>
          <a href="https://github.com/soimort/you-get">you-get</a> - качает видос с ютуба; альтернативы: <a
          href="https://github.com/ytdl-org/youtube-dl">youtube-dl</a>
        </li>
        <li>
          <a href="https://github.com/Ciphey/Ciphey">Ciphey</a> - декодит хеши
        </li>
        <li>
          <a href="https://github.com/conwnet/github1s">github1s</a> - конвертит гх репо в вскод проект прям в браузере
        </li>
        <li>
          <a href="https://github.com/appwrite/appwrite">appwrite</a> - селф-хостед baas - альтернатива <a
          href="https://firebase.google.com/products-build">Firebase</a>
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
        <li>
          <a href="https://github.com/palash25/best-practices-checklist">best-practices-checklist</a> - бест практисы на
          различных языках
        </li>
        <li>
          <a href="https://github.com/mattmakai/fullstackpython.com">fullstackpython.com</a> - куча инфы про питон
        </li>
        <li>
          <a href="https://github.com/adelf/acwa_book_ru">acwa_book_ru</a> - Архитектура сложных веб-приложений
        </li>
        <li>
          <a href="https://github.com/ksylor/ohshitgit">ohshitgit</a> - решение проблем с гитом
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
    title: "гх старс"
  }),
})
export default class GitHubSortPage
  extends Vue {

}
</script>

<style scoped>

h2 {
  @apply text-center
}

</style>
