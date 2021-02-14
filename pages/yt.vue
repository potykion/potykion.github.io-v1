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
        <a href="https://www.youtube.com/user/Deadlymanyak">Copypaster</a> - г-мод машинимы; создатель легендарной <a
        href="https://www.youtube.com/watch?v=_U9JjGseXIs">CRIMINAL POORUSHQUE</a>
      </li>


      <!-- Попс      -->
      <li><a href="https://www.youtube.com/channel/UCMCgOm8GZkHp8zJ6l7_hIuA">Вдудь</a> - ну как бы понятно: интервью с
        популярными личностями
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
        <a href="https://www.youtube.com/channel/UC9hBi-d-CKFU55XRd1JP3LA">IT.Высер</a> - ведущий встречается с айтишным челиком, расспрашивает про айти и не только под пивко
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
        <a href="https://www.youtube.com/channel/UCGQRn0aTnJK-zHFAdT9Nm1A">Frontend Channel</a> - докладики с конфы про фронтенд - FrontendConf
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCM8qsVZh9pLKL-7uD8nmb0A">Fidev - Make Beautiful Apps</a> - дезигн на флаттере
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCOoJkGYV00nr3EpZOUeuN1Q">Flutter Europe</a> - докладики с конфы по Flutter - Flutter Europe
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UC_a-vGdkAIRMKT1zzZ4I2ag">FlutterLDN</a> - докладики с конфы по Flutter - FlutterLDN
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCU8Mj6LLoNBXqqeoOD64tFg">Fun with Flutter</a> - аналог ResoCoder - обзор либ + туториалы
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCxKXx-eVWNib87Wst7nv_KQ">GDG Russia</a> - докладики от Google для разрабов на русском
      </li>
      <li>
        <a href="https://www.youtube.com/user/profyclub">HighLoad Channel</a> - докладики с конфы HighLoad++
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
        <a href="https://www.youtube.com/user/bobgnarlynbd">DOOMSHOP RECORDS</a> - меинстримный фонк лейбл; на нем записывался <a href="https://www.youtube.com/channel/UC2l38bev0xgHr65Tz4jZ32w">Freddie Dredd</a>
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
        <a href="https://www.youtube.com/user/GusGusOfficial">Gusgus</a> - электроника из Исландии; любимцы в России, даж <a href="https://www.youtube.com/watch?v=1mYgRkO_YQ0">на Урганте были</a>
      </li>

      <li>
        <a href="https://www.youtube.com/user/HO99O9">Ho99o9 </a> - панкуха + репчик + электроника = заебись
      </li>

      <li>
        <a href="https://www.youtube.com/channel/UCp8dfFa6a5dZkmod_FLarog">Jessica Winter</a> - лайтовая электроника с мрачным визуалом
      </li>


    </ul>


    <h2>В процессе</h2>

    <ul id="wip">


      <li></li>
      <li>https://www.youtube.com/channel/UCL4BwOrBEKggPyqsdVpraFg</li>
      <li>https://www.youtube.com/user/GENERATlONY1989</li>
      <li>https://www.youtube.com/channel/UC4OQwFvLMPVFTqb0hyqknSw</li>
      <li>https://www.youtube.com/user/JuicyJu100500</li>
      <li>https://www.youtube.com/user/etjusticepourtous</li>
      <li>https://www.youtube.com/channel/UCZ-MB-wEYCxdjoFfIzbiAqQ</li>
      <li>https://www.youtube.com/user/muvici</li>
      <li>https://www.youtube.com/user/KLO1ish</li>
      <li>https://www.youtube.com/user/KeroKeroBonito</li>
      <li>https://www.youtube.com/user/itsemaev</li>
      <li>https://www.youtube.com/channel/UCtpMlizUrJlTtAONzxX6vpQ</li>
      <li>https://www.youtube.com/channel/UCOILAkDvEALOcImsv7mdVUw</li>
      <li>https://www.youtube.com/user/kora0081</li>
      <li>https://www.youtube.com/channel/UCBVZa_qgKhT8_MMqvR0bNQA</li>
      <li>https://www.youtube.com/channel/UCKs2h-XpfI_9IIC67v873bw</li>
      <li>https://www.youtube.com/user/AnimatingTouchTV</li>
      <li>https://www.youtube.com/user/Shma4nik</li>
      <li>https://www.youtube.com/channel/UCmWL8nQYdv0MMRlNMQ8NJJA</li>
      <li>https://www.youtube.com/channel/UCaBSjN27de0L5uDUw5laDuA</li>
      <li>https://www.youtube.com/user/Maddyblog</li>
      <li>https://www.youtube.com/user/MaddysonShow</li>
      <li>https://www.youtube.com/channel/UCCLC8dta4gbG9aCM5ynRIrw</li>
      <li>https://www.youtube.com/channel/UC_FOz-veAFBpymlPTj7Im-Q</li>
      <li>https://www.youtube.com/user/megahitmen</li>
      <li>https://www.youtube.com/channel/UCCULoq_cGVlwhncrVqMcS5g</li>
      <li>https://www.youtube.com/user/Mostcus</li>
      <li>https://www.youtube.com/user/Minitelroseofficial</li>
      <li>https://www.youtube.com/user/pythonMinsk</li>
      <li>https://www.youtube.com/channel/UCP8MtCo2ZcrJc7_Zhcjym9g</li>
      <li>https://www.youtube.com/user/moscowjs</li>
      <li>https://www.youtube.com/user/MrGurchik</li>
      <li>https://www.youtube.com/user/MrRegistrLULZ</li>
      <li>https://www.youtube.com/user/AltRegistr</li>
      <li>https://www.youtube.com/channel/UCp4bYTGrxZ27ifRxm29U5ow</li>
      <li>https://www.youtube.com/user/multiprogramm</li>
      <li>https://www.youtube.com/channel/UCPLZQD0GyiMdnsIXeCBoGpQ</li>
      <li>https://www.youtube.com/channel/UCOTyzz_DRPIXNaRcp2NcDiQ</li>
      <li>https://www.youtube.com/channel/UCiI_JBpGcn-vVb7nU5euBQw</li>
      <li>https://www.youtube.com/channel/UCCLUcmHagK0llc7X9Z-nr7g</li>
      <li>https://www.youtube.com/user/NiceAccount0513</li>
      <li>https://www.youtube.com/channel/UC3Xbp3NcAtiq0XHOcU3QdOA</li>
      <li>https://www.youtube.com/user/Nigevara</li>
      <li>https://www.youtube.com/user/niggacommunist</li>
      <li>https://www.youtube.com/user/vsevolod2008</li>
      <li>https://www.youtube.com/channel/UC9tGxaMEYVSFLvNTuQu35jQ</li>
      <li>https://www.youtube.com/channel/UCLc1vUexbRTlRBJcUG9U6ug</li>
      <li>https://www.youtube.com/channel/UC4m-Z-MOiz-egKShl9OcJRQ</li>
      <li>https://www.youtube.com/channel/UCwlOIwsrJAUbkEvmf12qW8A</li>
      <li>https://www.youtube.com/user/OrangePowderTV</li>
      <li>https://www.youtube.com/channel/UCCqNFXg3NRbRA6qNKFRecdw</li>
      <li>https://www.youtube.com/user/panteros666</li>
      <li>https://www.youtube.com/channel/UCbhMGG0ZievPtK8mzLH5jhQ</li>
      <li>https://www.youtube.com/user/durov</li>
      <li>https://www.youtube.com/user/Hekamasta</li>
      <li>https://www.youtube.com/channel/UCK-F4NhrTXMcO-65QijrGNA</li>
      <li>https://www.youtube.com/channel/UClWNObkxBvAwmqwvoPGUPXg</li>
      <li>https://www.youtube.com/user/PigDestroyerOfficial</li>
      <li>https://www.youtube.com/channel/UCa_67jMsISCDprNqaOMhc9w</li>
      <li>https://www.youtube.com/channel/UCN9aK6ZG5PS1nnJZqscsmKw</li>
      <li>https://www.youtube.com/channel/UCgF8rcKszUOAnElu7zhwVMQ</li>
      <li>https://www.youtube.com/user/Poopstream</li>
      <li>https://www.youtube.com/channel/UC4_fTVmkuYlzcV8OY24UeRg</li>
      <li>https://www.youtube.com/channel/UCAL3JXZSzSm8AlZyD3nQdBA</li>
      <li>https://www.youtube.com/channel/UCgs-54tlVBF80MMD9_YqBng</li>
      <li>https://www.youtube.com/channel/UCNp0wlIOiOF_3Fr5KhQtc7g</li>
      <li>https://www.youtube.com/channel/UCak6beUTLlVmf0E4AmnQkmw</li>
      <li>https://www.youtube.com/channel/UCwTD5zJbsQGJN75MwbykYNw</li>
      <li>https://www.youtube.com/channel/UCrJhliKNQ8g0qoE_zvL8eVg</li>
      <li>https://www.youtube.com/channel/UCsX05-2sVSH7Nx3zuk3NYuQ</li>
      <li>https://www.youtube.com/channel/UCxs2IIVXaEHHA4BtTiWZ2mQ</li>
      <li>https://www.youtube.com/channel/UCqC1iSQnRIDz_rOy8LHe69g</li>
      <li>https://www.youtube.com/channel/UCI_10IRftFes3lxlTVEjTzg</li>
      <li>https://www.youtube.com/channel/UCUG9wVMP-xyriDW15wEKPcw</li>
      <li>https://www.youtube.com/channel/UCZbQmZS0qxfMh3O8pkzOIyQ</li>
      <li>https://www.youtube.com/user/bezglaz</li>
      <li>https://www.youtube.com/channel/UC7hjrpB81FSipI1oqtOaZqQ</li>
      <li>https://www.youtube.com/user/RottenRollRex</li>
      <li>https://www.youtube.com/user/WINmordREPORT</li>
      <li>https://www.youtube.com/channel/UCqpcO047_wiKpaThyjHQSrg</li>
      <li>https://www.youtube.com/channel/UCTYtwR_r-KKIw-FWRTepcJg</li>
      <li>https://www.youtube.com/channel/UCz4Yz77YvHQ_kL5R0l28IAQ</li>
      <li>https://www.youtube.com/channel/UCi3lxprPEKGjpmzzN90sceA</li>
      <li>https://www.youtube.com/user/heynineseconds</li>
      <li>https://www.youtube.com/channel/UCnW2hq-0-3Urmz12oK2z3mQ</li>
      <li>https://www.youtube.com/channel/UC9srkwSmNZtqMnxwziYcdTg</li>
      <li>https://www.youtube.com/user/Sgbash64Rus</li>
      <li>https://www.youtube.com/user/SHPIDEN</li>
      <li>https://www.youtube.com/user/MisterUsualHat</li>
      <li>https://www.youtube.com/user/DarkEvil135</li>
      <li>https://www.youtube.com/channel/UCX4ZPOBQ9jZpB68PpjCznBA</li>
      <li>https://www.youtube.com/channel/UCQ5X_o8s14fbozhtxO5BgIA</li>
      <li>https://www.youtube.com/channel/UCowEgblusjCEor_kfesJoBw</li>
      <li>https://www.youtube.com/channel/UCio6GuoBNWU97ge5iREZiJQ</li>
      <li>https://www.youtube.com/channel/UCVTtDXTPysE8jHpcfM8xwUA</li>
      <li>https://www.youtube.com/channel/UCHazuj46mNssZynjQCgESVg</li>
      <li>https://www.youtube.com/user/pisokrytp</li>
      <li>https://www.youtube.com/channel/UCu_9_zRVfKee4v7xXXcv2ag</li>
      <li>https://www.youtube.com/channel/UCWjDubFXv8I1vWEb47s9_IA</li>
      <li>https://www.youtube.com/user/squareheadcat</li>
      <li>https://www.youtube.com/user/mojetono</li>
      <li>https://www.youtube.com/user/thearmed</li>
      <li>https://www.youtube.com/user/therealhypnoskull</li>
      <li>https://www.youtube.com/user/therealmodeselektor</li>
      <li>https://www.youtube.com/user/TheWhoreChurch</li>
      <li>https://www.youtube.com/user/thumpchannel</li>
      <li>https://www.youtube.com/channel/UCwjiraJptZwb99ucc7EfTIg</li>
      <li>https://www.youtube.com/user/officialtiga</li>
      <li>https://www.youtube.com/user/vitalicofficial</li>
      <li>https://www.youtube.com/user/cxielamiko</li>
      <li>https://www.youtube.com/channel/UCX4w2P-M4cuWQG0WKgU3TTQ</li>
      <li>https://www.youtube.com/user/WeekendOpenSpace</li>
      <li>https://www.youtube.com/channel/UCQWicBBUlcqvIFY4kSWtzXw</li>
      <li>https://www.youtube.com/channel/UCuZeHD5SGecQomz2pVDHGzg</li>
      <li>https://www.youtube.com/channel/UClF92ZZd8NeMCeNH3d61e0g</li>
      <li>https://www.youtube.com/channel/UCu-RrZ8JmADlGZGO8d3OW5w</li>
      <li>https://www.youtube.com/user/XAAPAKTEP</li>
      <li>https://www.youtube.com/user/XiuXiuForLife</li>
      <li>https://www.youtube.com/channel/UCCG0_rOGqzcs85BexeTx4MQ</li>
      <li>https://www.youtube.com/user/YOUWILLLOVEEACHOTHER</li>
      <li>https://www.youtube.com/user/ZebraFuckingKatz</li>
      <li>https://www.youtube.com/user/MrWhooy</li>
      <li>https://www.youtube.com/user/djifointie</li>
      <li>https://www.youtube.com/channel/UC25Ol81YfP1wvJG37mTdYww</li>
      <li>https://www.youtube.com/channel/UCTUyoZMfksbNIHfWJjwr5aQ</li>
      <li>https://www.youtube.com/channel/UCSa8TRcoSLujiYFh_kCavxQ</li>
      <li>https://www.youtube.com/user/andrekabo</li>
      <li>https://www.youtube.com/channel/UCeVC9vItGoMh0T_0Kn6vYDg</li>
      <li>https://www.youtube.com/channel/UCtUBTVHESXXcyi72ggbXoQQ</li>
      <li>https://www.youtube.com/channel/UCdAsMEhr_9ZmwZo3ZJ9YMYA</li>
      <li>https://www.youtube.com/user/BiZSekrety</li>
      <li>https://www.youtube.com/user/videoitpeople</li>
      <li>https://www.youtube.com/channel/UClJyWcfMtyqbkWCHx9rXJMw</li>
      <li>https://www.youtube.com/user/Gufovicky</li>
      <li>https://www.youtube.com/channel/UCDdU92nbc3FGxEbOvxpNfUQ</li>
      <li>https://www.youtube.com/channel/UC1DjDHroLdWawdNj7EJi7xg</li>
      <li>https://www.youtube.com/channel/UC1mbfseW4WdZsku-6hCz1NA</li>
      <li>https://www.youtube.com/user/MultiDepr</li>
      <li>https://www.youtube.com/user/DmitryMalikov</li>
      <li>https://www.youtube.com/channel/UCmhLAusKEdo8JF8WnU-KhFA</li>
      <li>https://www.youtube.com/channel/UC7I96JhjLaEEphHyhYLINfw</li>
      <li>https://www.youtube.com/user/Ze6ypo</li>
      <li>https://www.youtube.com/channel/UCgISDXr5ZVZzTPnFYSMXTVA</li>
      <li>https://www.youtube.com/user/kinopoisk</li>
      <li>https://www.youtube.com/user/Scstudio58</li>
      <li>https://www.youtube.com/channel/UCERxUjmqL6mvu0E6VbbLGAA</li>
      <li>https://www.youtube.com/channel/UCSJ27QZvhCZskbsj59s76nA</li>
      <li>https://www.youtube.com/channel/UC5Aln3eK41wovAQggcQj0dQ</li>
      <li>https://www.youtube.com/channel/UC6OTDVVAvYHPku3LbhLIeBA</li>
      <li>https://www.youtube.com/user/MikhailZakirov</li>
      <li>https://www.youtube.com/user/ogomk</li>
      <li>https://www.youtube.com/user/slooowblog</li>
      <li>https://www.youtube.com/channel/UCiTQ6lyKRtsfd9RSNI0OrdA</li>
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
