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
