<template>

  <div>
    <h1>Ютуб</h1>

    <p>
      На момент записи я обнаружил, что подписан на 200 каналов на ютубе. Бывает меня спрашивают, что порекоммендуешь
      посмотреть на ютубе, и мне ничо в голову не приходит.
    </p>

    <img-row :images="['/yt.png']"></img-row>

    <p>
      В этой статье я постараюсь систематизировать каналы, которые мне интересны, паралелльно отписываясь от
      неинтересных каналов.
    </p>

    <h2>Отобранные</h2>

    <ul>
      <!-- Около игры -->
      <li><a href="https://www.youtube.com/channel/UCer-uuOOdHHbD_O1BT7kx7g">Disgusting Men</a> - подкаст на тему игор,
        фильмов, музыки для мужиков
      </li>
      <li><a href="https://www.youtube.com/channel/UC0t8dMh13Rl-I-dbBlR0vFA">Стримушка</a> - нарезки популярных
        стримеров, бывают смешными
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCoTJydABhshW-N_h_tN9rrQ">Vansamaofficial</a> - нарезки со стримов ВЕНА
        ДАРКХОЛМА; помимо игор, занимается <a
        href="https://www.youtube.com/watch?v=kmulwybk8hA">спортом</a>, прошел <a
        href="https://youtu.be/Ul9qTts0wo8?t=121">русификацию</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCIvkS0o7Csl6EuA7gCmdgqg">Karmik Koala </a> - разборчики спидранов и
        прикольчики, напр. про <a href="https://www.youtube.com/watch?v=helf7_fBGQA">ЧАС ПЯТНАДЦАТЬ</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCPDQObYqflaenLFgOAAw9Zg">ksani ez</a> - монтажики про стримеров
      </li>
      <li>
        <a href="https://www.youtube.com/user/CrowbCat">Crowbcat</a> - сравнение игр, напр. на тизере и на релизе; <a
        href="https://www.youtube.com/watch?v=omyoJ7onNrg">про киберпук</a> просто пушка
      </li>

      <!-- Ржака      -->
      <li>
        <a href="https://www.youtube.com/channel/UClGmWE9J0jQVwiiATgNe-YA">Ramson</a> - видосы на различную тематику,
        прикольного характера; канал начинающий, но уже каждый видос с кафом смотрю, например про <a
        href="https://www.youtube.com/watch?v=zDvi0p378O8">похудение</a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/EgorVoronov">Adeq</a> - кажется, единственный нормальный живой пупер
      </li>
      <li>
        <a href="https://www.youtube.com/user/multiprogramm">multiprogramm</a> - не единственный)
      </li>
      <li>
        <a href="https://www.youtube.com/user/Deadlymanyak">Copypaster</a> - г-мод машинимы; создатель легендарной <a
        href="https://www.youtube.com/watch?v=_U9JjGseXIs">CRIMINAL POORUSHQUE</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCOILAkDvEALOcImsv7mdVUw">kolmad kamod</a> - ржекельные монтажики
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCaBSjN27de0L5uDUw5laDuA">M1shel</a> - еще монтажики, вся ржака про
        монтажики
      </li>
      <li>
        <a href="https://www.youtube.com/user/niggacommunist">niggacommunist</a> - видики с абсурдным юмором; автор
        легендарных видиков <a href="https://www.youtube.com/watch?v=Y-aXG94nmLo">ДИСКО ЕБАЛО</a> и <a
        href="https://www.youtube.com/watch?v=jke4EAY_2zo">МИСТЕР ТЫКВА</a>; есть еще <a
        href="https://www.youtube.com/user/vsevolod2008">альт канал</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC4m-Z-MOiz-egKShl9OcJRQ">Novak</a> - монтажики
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UClWNObkxBvAwmqwvoPGUPXg">Peplix</a> - yt-канал легендарного вк-паблика
        <a href="https://vk.com/peplix">мемблексы от пепликсов</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCqpcO047_wiKpaThyjHQSrg">RX4D </a> - переозвучка про комплектующие компов
      </li>
      <li>
        <a href="https://www.youtube.com/user/XAAPAKTEP">XAAPAKTEP</a> - суб андер контр культура
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC1DjDHroLdWawdNj7EJi7xg">Демьян</a> - тоже ноги от хумаса растут
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCgISDXr5ZVZzTPnFYSMXTVA">#Качественный Саунд</a> - очень качественные мешапы
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC5Aln3eK41wovAQggcQj0dQ">Мемут</a> - тоже около хумаса
      </li>
      <li>
        <a href="https://www.youtube.com/user/ogomk">Михаил МК</a> - ебанутые мультики
      </li>


      <!-- Попс      -->
      <li><a href="https://www.youtube.com/channel/UCMCgOm8GZkHp8zJ6l7_hIuA">Вдудь</a> - ну как бы понятно: интервью с
        популярными личностями
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCbhMGG0ZievPtK8mzLH5jhQ">Parfenon </a> - блог Леонида Парфенова; стоит
        внимания Намедни - события, люди, явления определившие образ жизни
      </li>


      <!-- Всякое      -->
      <li>
        <a href="https://www.youtube.com/channel/UCNSkhjIGs63VfGVLQQu2bzA">Хулиномика</a> - канал автора книги
        Хулиномика;
        описание канала лучше меня о нем скажет: Как принимать правильные решения. Как принимать на грудь.
        Как жить. Как не надо.; есть доп <a href="https://www.youtube.com/user/GoblinWarchief">канал с обзорами книг</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCmZTf9kzdx3KqYC7NZROknQ">Ritartha</a> - девушка интересно рассуждает
        на темы философии, культуры, политики, напр. что <a href="https://www.youtube.com/watch?v=TbF69VYRJJ4">Варламов
        -
        лох</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCiQo406SKypmtAQXIHdZ6mA">birchpunk</a> - <a
        href="https://www.youtube.com/watch?v=8HZ4DnVfWYQ">РУССКАЯ КИБЕРДЕРЕВНЯ</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCVqlknx5llGHCrbocuhB8jQ">CFNSLR</a> - вью со всякими известными в
        узких кругах личностями
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCI_10IRftFes3lxlTVEjTzg">RationalAnswer</a> - принятие решений,
        инвестиции и все такое
      </li>
      <li>
        <a href="https://www.youtube.com/user/MultiDepr">Депрсна</a> - аьмосферныеее вью с андерами
      </li>
      <li>
        <a href="https://www.youtube.com/user/kinopoisk">КиноПоиск </a> - видики про кино
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCERxUjmqL6mvu0E6VbbLGAA">Кухня на районе</a> - канал приложухи по доставке еды, бывает ржекабельно
      </li>

      <!-- Около айти     -->
      <li><a href="https://www.youtube.com/channel/UCr9qCdqXLm2SU0BIs6d_68Q">yegor256 a.k.a. Yegor Bugayenko</a> - канал
        популярного разраба с радикальными взлядами, видео на тему разработки, менеджмента, недавно стали выходить
        <a href="https://www.youtube.com/watch?v=5sTTHU0rJL8">обзоры новостей</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCUSbYJK87rpBUJ5KGQd7oHA">Мы обречены</a> - подкаст с известными
        личностями из айти на разные темы, зачастую несвязанными с айти
      </li>
      <li>
        <a href="https://www.youtube.com/user/99baddawg">Ben Awad</a> - ~20-летний чел делает прикольные проекты и
        рассказывает кулстори про них, напр. расширение для VSCode для поиска пары - <a
        href="https://www.youtube.com/watch?v=bfd8RyAJh6c">VSinder</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC28GNXIYdBiI1zTBySZEoRw">Bookademy</a> - обзоры книг по развитию сомов
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC9hBi-d-CKFU55XRd1JP3LA">IT.Высер</a> - ведущий встречается с айтишным
        челиком, расспрашивает про айти и не только под пивко
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCL4BwOrBEKggPyqsdVpraFg">Johe News</a> - тупа айтишный блог, но есть
        видео на другие темы, типа <a href="https://www.youtube.com/watch?v=TZn58EKqYFc">финансов</a>
      </li>


      <!-- Прога      -->
      <li>
        <a href="https://www.youtube.com/channel/UCsBjURrPoezykLs9EqgamOA">Fireship</a> - видосы про разработку и
        технологии обучающего характера; есть постоянная рубрика "X за 100 секунд", где расказывается про технологию за
        100 секунд, например, про <a href="https://www.youtube.com/watch?v=nhBVL41-_Cw">Vue</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCwXdFgeE9KYzlDdR7TG9cMw">Flutter </a> - офф канал по Flutter, включает
        в себя видосы про Flutter-виджеты, популярные пакеты и туториалы
      </li>
      <li>
        <a href="https://www.youtube.com/user/GoogleDevelopers">Google Developers</a> - новости от гугла для разрабов,
        видосы с конференций и туториалы
      </li>
      <li>
        <a href="https://www.youtube.com/user/Firebase">Firebase</a> - новости, туториалы по Firebase - BAAS решение от
        гугла
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCSIvrn68cUk8CS8MbtBmBkA">Reso Coder</a> - оч крутые туториалы по
        Flutter + обзоры либ
      </li>
      <li>
        <a href="https://www.youtube.com/user/404fest">404fest</a> - докладики с айти-конфы <a
        href="https://404fest.ru/">404</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCpMh_XSn7yGPabFBYzY5hKg">Antida software</a> - докладики с
        Python-митапчика
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCO2w0cpl1wxygHjQH6eEfEg">AvitoTech</a> - докладики от Avito
      </li>
      <li>
        <a href="https://www.youtube.com/user/codefestru">CodeFest Russia</a> - докладики с айти-конфы <a
        href="https://11.codefest.ru/">CodeFest </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCRva5jH_39U-rLt6S9JJyUw">DART SIDE</a> - стримы по Flutter от русских
        челов
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC1nDIT9thqoFSSxvLyPHF5w">DevOps Channel</a> - докладики с конфы про
        DevOps - DevOpsConf
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCGQRn0aTnJK-zHFAdT9Nm1A">Frontend Channel</a> - докладики с конфы про
        фронтенд - FrontendConf
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCM8qsVZh9pLKL-7uD8nmb0A">Fidev - Make Beautiful Apps</a> - дезигн на
        флаттере
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCOoJkGYV00nr3EpZOUeuN1Q">Flutter Europe</a> - докладики с конфы по
        Flutter - Flutter Europe
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC_a-vGdkAIRMKT1zzZ4I2ag">FlutterLDN</a> - докладики с конфы по Flutter
        - FlutterLDN
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCU8Mj6LLoNBXqqeoOD64tFg">Fun with Flutter</a> - аналог ResoCoder -
        обзор либ + туториалы
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCxKXx-eVWNib87Wst7nv_KQ">GDG Russia</a> - докладики от Google для
        разрабов на русском
      </li>
      <li>
        <a href="https://www.youtube.com/user/profyclub">HighLoad Channel</a> - докладики с конфы HighLoad++
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCtpMlizUrJlTtAONzxX6vpQ">Kirill Semaev</a> - чел про реальный девопс
        рассказывает; еще нашел у него в реках <a href="https://www.youtube.com/channel/UC-sAMvDe7gTmBbub-rWljZg">челика,
        который учит куберу и ансиблу</a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCP8MtCo2ZcrJc7_Zhcjym9g">Mobile Channel</a> - докладики с конфы по
        мобильной разработке - appsconf
      </li>
      <li>
        <a href="https://www.youtube.com/user/moscowjs">MoscowJS</a> - докладики с митапа по джс
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCp4bYTGrxZ27ifRxm29U5ow">MSK VUE.JS</a> - докладики с митапа по вью
        джс
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCN9aK6ZG5PS1nnJZqscsmKw">PiterJS</a> - докладики с митапа по джс
      </li>
      <li>
        <a href="https://www.youtube.com/c/PiterPy/videos">PiterPy</a> - докладики с митапа по python
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCak6beUTLlVmf0E4AmnQkmw">PyCharm by JetBrains</a> - апдейты IDE
        PyCharm
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCqC1iSQnRIDz_rOy8LHe69g">Python Channel</a> - докладики с конфы по
        Python
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCCLC8dta4gbG9aCM5ynRIrw">Management Channel</a> - докладики с конфы
        айти менеджеров - TeamLead Conf
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCCqNFXg3NRbRA6qNKFRecdw">Ozon IT Events</a> - докладики с митапов Ozon
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC7hjrpB81FSipI1oqtOaZqQ">RITFest Channel</a> - докладики с айти конфы
        РИТ++
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCu-RrZ8JmADlGZGO8d3OW5w">Wrike TechClub</a> - докладики с митапов Wrike
      </li>

      <!-- Готовка -->
      <li>
        <a href="https://www.youtube.com/channel/UCw3vXvhTS6oolKyOjInA94g">Супер Кулинар</a> - канал с рецептами и
        тв-передачами про готовку, среди которых мой любимый
        <nuxt-link to="/cooking#jamie-oliver">Джейми Оливер</nuxt-link>
      </li>
      <li>
        <a href="https://www.youtube.com/user/JamieOliver">Jamie Oliver</a> - канал любимого повара - Джейми Оливера
      </li>

      <!-- Музычка      -->
      <li>
        <a href="https://www.youtube.com/channel/UCFpGI5tOfL1n9oyF8pS9SOg">Partiboi69 </a> - нормальная версия диджея
        огурца; очень харизматичный челик, исполняющий техно, хаус и все такое, разъебывает (<a
        href="https://www.youtube.com/watch?v=rZLDBovy9lI">пример разъеба</a>)
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCAAAQDyYsbuJbixvl1Z0k0w">yeule</a> - ебанутый поп с
        шугейзом, эмбиентом, гличами, чиптюном; внешний вид и <a href="https://www.youtube.com/watch?v=IYky8WReM10">клипы</a>
        исполнительницы соответствующие - ебанутые татухи, мейк и наряды
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCMx2-6At2Rx0kapbSjKxwJA">Shygirl </a> - жирная найгерша, исполяющая
        ебанутый хип-хаус; напр. есть трек, где <a href="https://www.youtube.com/watch?v=iMZX24CsGww">бит из кашля</a>
      </li>

      <li>
        <a href="https://www.youtube.com/user/SacredBonesRecords">Sacred Bones Records</a> - лейб мрачной музычки, типа
        <a href="https://www.youtube.com/watch?v=T7K61Pdvnd8">Uniform</a>, <a
        href="https://www.youtube.com/watch?v=gMgx55DdTjg">The Body</a>, <a
        href="https://www.youtube.com/watch?v=MvwtYaR_ENs">Thou</a>
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCll0t9aJFKgJlTsm0AW0Svg">Vixire Xeon</a> - чел, выкладывает неизданные
        треки <a href="https://www.youtube.com/watch?v=es9-P1SOeHU">Sophie</a>, но Sophie RIP =/
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCD5F4ujlije0Zn_f2Adq0nw">Дмитрий Маликов</a> - ну на Маликова обязон
        подписаться каждому ТЫ ОДНА ТЫ ТАКАААЯ!
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCVdlcqbM4oh0xJIQAxiaV5Q">100 gecs</a> - ебанутая электроника, как
        обычно
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCLOIl_b0C-eJw8VwgXuj_ug">Agar Agar</a> - лайтовая французкая
        электроника
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCcwLVJ0hC4YnSfMRlolkVDw">Boy Harsher</a> - мрачная качевая
        электроника
      </li>
      <li>
        <a href="https://www.youtube.com/user/boysnoize">BOYS NOIZE</a> - классика техно
      </li>
      <li>
        <a href="https://www.youtube.com/user/officialcharlixcx">Charli XCX</a> - Чарличка, поп-королева
      </li>

      <li>
        <a href="https://www.youtube.com/user/clppng">clppng </a> - clipping - экспериментальный репчик
      </li>

      <li>
        <a href="https://www.youtube.com/user/bobgnarlynbd">DOOMSHOP RECORDS</a> - меинстримный фонк лейбл; на нем
        записывался <a href="https://www.youtube.com/channel/UC2l38bev0xgHr65Tz4jZ32w">Freddie Dredd</a>
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCS9Rx7Thy7lnTBlt1TATZlw">DOPECLVBWORLD</a> - i61 - популярный рус
        экспериментал репчик <a href="https://www.youtube.com/watch?v=OGCESZEzqbs">ЛИСТЬЯ И САЛАТ У МЕНЯ ЕСТЬ ЧТО У МЕНЯ
        ЕСТЬ ПЛАГИН
      </a>
      </li>

      <li>
        <a href="https://www.youtube.com/user/officialEDREC">Ed Banger Records</a> - популярный лейбл европейской
        электроники; тут вышли такие хиты, как <a href="https://www.youtube.com/watch?v=6okxuiiHx2w">Baby I'm Yours</a>
        и <a href="https://www.youtube.com/watch?v=NazVKnD-_sQ">I Love U So</a>
      </li>

      <li>
        <a href="https://www.youtube.com/user/GesaffelsteinChannel">GesaffelsteinChannel </a> - еще классика техно
      </li>

      <li>
        <a href="https://www.youtube.com/user/GusGusOfficial">Gusgus</a> - электроника из Исландии; любимцы в России,
        даж <a href="https://www.youtube.com/watch?v=1mYgRkO_YQ0">на Урганте были</a>
      </li>

      <li>
        <a href="https://www.youtube.com/user/HO99O9">Ho99o9 </a> - панкуха + репчик + электроника = заебись
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCp8dfFa6a5dZkmod_FLarog">Jessica Winter</a> - лайтовая электроника с
        мрачным визуалом
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCOTyzz_DRPIXNaRcp2NcDiQ">Myd</a> - французкая электроника, где
        исполнитель - маскот
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UC4_fTVmkuYlzcV8OY24UeRg">Primitive Man</a> - мрачная жесткая музычка
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCz4Yz77YvHQ_kL5R0l28IAQ">SebastiAn </a> - легенда с Ed Banger
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCiTQ6lyKRtsfd9RSNI0OrdA">Мой Бумажный Пакет</a> - депресивный репчик
      </li>


    </ul>


    <h2>В процессе</h2>

    <ul id="wip">


      <li>https://www.youtube.com/channel/UCiGQaUe3Y7S5RNsbfiM0ZQQ</li>
      <li>https://www.youtube.com/channel/UCSULE2ZIuwBFJRPhVGkrUHQ</li>
      <li>https://www.youtube.com/channel/UCAm2pZHnwqUoXTRZA1aF7tw</li>
      <li>https://www.youtube.com/channel/UCopMiHFAAp5fcow9h5lg-Mg</li>
      <li>https://www.youtube.com/channel/UC82pNmq0U4rn2fK34qCGhhQ</li>
      <li>https://www.youtube.com/channel/UC07oDeXWH9dGQiwqleS5mAw</li>
      <li>https://www.youtube.com/channel/UCNuItlOR3qXZBtMRwb4GoBg</li>
      <li>https://www.youtube.com/channel/UC8HnwuT88qHrixEJPdlJMvQ</li>
      <li>https://www.youtube.com/channel/UCDOrpCcQPK-WwVJDPLXs3mg</li>
      <li>https://www.youtube.com/user/StudeyaBashmaK</li>
      <li>https://www.youtube.com/channel/UCQmAuu6V3kSzdIfrszr5iKg</li>
      <li>https://www.youtube.com/channel/UCMtlICYxr6Dz_PG9_SVqRYQ</li>
      <li>https://www.youtube.com/user/vkarabas</li>
      <li>https://www.youtube.com/channel/UCdga1n7C6EJfoS0lYxDpeoA</li>
      <li>https://www.youtube.com/user/MrShpigun</li>
      <li>https://www.youtube.com/channel/UC9U987n6vmTPgp4jvlltSfQ</li>
      <li>https://www.youtube.com/channel/UCuvqwnf3_PNgpdgEzV2xBag</li>
      <li>https://www.youtube.com/user/yandexmovie</li>
      <li>https://www.youtube.com/channel/UCbM9qPgIZo9xAVbAYyJEtOw</li>
      <li>https://www.youtube.com/channel/UCDgPChLUlnH5pE2HETNxidw</li>
      <li>https://www.youtube.com/channel/UC-sJ3gJcnipb8kE9TtuV-mQ</li>
    </ul>
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
    title: "Я ЗАБЫЛ УКАЗАТЬ ЗАГОЛОВОК"
  }),
})
export default class yt extends Vue {
  mounted() {
    document
      .querySelector("#wip")!
      .childNodes
      .forEach(e => (e as HTMLElement).innerHTML = `<a href="${(e as HTMLElement).innerText}">${(e as HTMLElement).innerText}</a>`);
  }
}
</script>

<style scoped>
</style>
