<template>
  <article>
    <article-heading :article="article"/>
    <hr>
    <nuxt-content :document="article.content"/>
  </article>
</template>


<script lang="ts">

import {Component, Vue,} from "nuxt-property-decorator"
import {IContentDocument} from "@nuxt/content/types/content";
import {CoreArticle} from "~/logic/core/models";
import {Goal} from "~/logic/n/models";


@Component({
  async asyncData({$content, params}) {
    let page = await $content("n/goals-2022").fetch();

    // @ts-ignore
    page.goals = [
      // HEALTH
      {category:'health', type: 'note',  text:'Еще больше спорта', children: [
          {category:'health', type:'habit',  text:'<a href="https://seven.app/">7 минут</a> - приложуха с тренировками по 7 минут (12 упражнений по 30 сек с перерывами по 10 сек) - ну уж это скипать совсем стыдно'},
          {category:'health', type:'wait',  text:'Пилатез - должно быть забавная темка'},
      ]},
      {category:'health', type:'note',  text:'Зубки', children: [
          {category:'health', type:'wait',  text:'Фиксануть по лайту, а то чистить зубки бывает больно, бывает от холодного больно'},
          {category:'health', type:'wait',  text:'Говорят пора зубы мудрости дергать - пизда стремно, но что поделать'},
      ]},

      // MONEY
      {category:'money', type: 'wip', text: '3кк ', children: [
        {category: 'money', type: 'note', text: 'Хочется не просто зп откладывать, но и чтобы инвестиции свои плоды принести'}
      ]},
      {category:'money', type: 'wait', text: 'Ипотека?'},

      // WORK
      {category: 'work', type:'note', text: "Ой, это проще всего, тут явный перекос на лицо, а я и не против))"},
      {category: 'work', type:'note', text: "В прошлом году я вкатывался в мобилку, в этом буду вкатываться в девопс и немного статы"},
      {category: 'work', type:'note', text: "Курсы:", children: [
        {category: 'work', type:'wip', text: "Пройти Курс [OTUS] DevOps практики и инструменты (2019) (торрент-эдишн)"},
        {category: 'work', type:'wip', text: "Позырить курс <a href='https://youtube.com/playlist?list=PLaIsQH4uc08woJKRAA7mmjs9fU0jeKjjM'>Software Design</a>"},
        {category: 'work', type:'wait', text: "Пройти курс от Яндекса - <a href='https://practicum.yandex.ru/ycloud/'>Облачный инженер</a>"},
      ]},
      {category: 'work', type:'note', text: "Почитать книжки:", children: [
          {category: 'work', type:'wait', text: "Проект Феникс"},
          {category: 'work', type:'wip', text: "Девопс хэндбук"},
          {category: 'work', type:'wait', text: "Шаблоны корпоративных приложений"},
          {category: 'work', type:'wait', text: "Имплементинг домейн дривен дезигн"},
          {category: 'work', type:'done', text: "Статистика и котики - не оч, написано что зачем, напр. зач нужна линейная регрессия, но как ее считать не написано"},
      ]},
      {category: 'work', type:'wait', text: "НАПИСАТЬ В БЛЯДСКИЙ НОУШН ХУЛИ КОММЕНТЫ НЕ КОПИРУЮТСЯ НОРМАЛЬНО"},
      {category: 'work', type:'note', text: "Почитать всякие статьи, документации:", children: [
          {category: 'work', type:'wait', text: "<a href='https://docs.docker.com/get-started/orchestration/'>Про докер-сварм</a>"},
          {category: 'work', type:'wait', text: "<a href='https://youtube.com/playlist?list=PLpTASIMYgCp80c4YXgJDneAiGrAekOv4M'>Мб видики про сварм</a>"},
          {category: 'work', type:'done', text: "<a href='https://dockerswarm.rocks/'>Еще про докер-сварм</a>"},
          {category: 'work', type:'wait', text: "<a href='https://docs.docker.com/network/'>Про сети в докере</a>"},
          {category: 'work', type:'done', text: "<a href='https://ru.stackoverflow.com/a/241269/348589'>Про сетевые масочки</a>"},
          {category: 'work', type:'done', text: "<a href='https://swagger.io/docs/specification/about/'>Про openapi3</a>"},

      ]},
      {category: 'work', type:'done', text: "Позырить <a href='https://scale.yandex.ru/'>Yandex Scale 2021</a>", children: [
          {category: 'work', type: 'note', text: "Serverless Containers - прикольно, но только для сервов"},
          {category: 'work', type: 'note', text: "Есть <a href='https://github.com/yandex-cloud/ide-plugin-jetbrains'>плагин для Idea</a>"},
          {category: 'work', type: 'note', text: "<a href='https://github.com/yandex-cloud/examples'>Примерчики всякие</a>"},
          {category: 'work', type: 'note', text: "DataLens - прикольно, можно вместо своих отчетов эту темку юзать"},
        ]},
      {category: 'work', type:'done', text: "Узнать как линейную регрессию считать", children: [
          {category: 'work', type:'note', text: "Пару толковых видиков посмотрел: <a href='https://www.youtube.com/watch?v=eQ5t4OZh-bU'>как это делать в экселе</a>"},
          {category: 'work', type:'note', text: "И еще полезно <a href='https://www.youtube.com/watch?v=r62mP6-td1c'>корреляцию считать</a>, чтобы узнать какие признаки в принципе влияют на модель"},
      ]},
      {category: 'work', type:'done', text: "Почитать про <a href='https://vas3k.ru/blog/machine_learning/'>мл от Вастрика</a>", children: [
          {category: 'work', type:'note', text: "Почитал, удивительно, но в унике все это было (респект вышке) - немного нового узнал"},
      ]},
      {category: 'work', type:'done', text: "Почитать документацию сайтов по работе", children: [
          {category: 'work', type:'note', text: "Респект Паше за доку, но дизреспект за то, что уволился и девопсом теперь мне заниматься(((((((((((("},
      ]},

      // REL
      {category: 'rel', type: 'note', text: 'Тут Мила сама все придумает'},
      {category: 'rel', type: 'note', text: 'За январь вон сколько всего было:', children: [
          {category: 'rel',  type: 'done', text: 'Ебланить дома и смотреть уебищный серик - Sex/Life'},
          {category: 'rel',  type: 'done', text: 'На морозе пидорить несколько километров, а потом в киношку'},
          {category: 'rel',  type: 'done', text: 'Кофеварку купить и ебашить кофе'},
          {category: 'rel',  type: 'done', text: 'Сходить в музей Дарвина'},
          {category: 'rel',  type: 'done', text: 'Сходить в палеонтологический музей'},
          {category: 'rel',  type: 'done', text: 'В басик сходить'},
          {category: 'rel',  type: 'done', text: 'Попрыгать на батутах - <a href="https://www.instagram.com/nebo_tyt/">Неботут</a>'},
          {category: 'rel',  type: 'done', text: 'Артишоки из глины слепить - <a href="https://www.instagram.com/terracat_studio/">тут</a> '},
          {category: 'rel',  type: 'done', text: 'На выставку <a href="https://bodyworlds.site/">BodyWorlds</a> сходить - пизда стремно, у меня аж потом член не вставал'},
          {category: 'rel',  type: 'done', text: 'На конц сходить'},
          {category: 'rel',  type: 'done', text: 'Выставка в художке'},
          {category: 'rel',  type: 'done', text: 'Огонечки сделать: гирлянду на всю стену повесить'},
          {category: 'rel',  type: 'done', text: 'На стендап сгонять'},
          {category: 'rel',  type: 'done', text: 'Пазл собрать'},
          {category: 'rel',  type: 'done', text: 'В Икею сгонять'},
          {category: 'rel',  type: 'done', text: 'Экскурсия в Плехановке'},
          {category: 'rel',  type: 'done', text: 'Стейки сделать'},
          {category: 'rel',  type: 'done', text: 'Глинтвейн сделать'},
          {category: 'rel',  type: 'done', text: 'И все это сопровождается сексом'},
      ]},
      {category: 'rel', type: 'note', text: 'В планах такое:', children: [
          {category: 'rel', type: 'wip', text: 'Сгонять в Алмазный фонд'},
          {category: 'rel', type: 'wip', text: 'Мастер класс по римской мозаике'},
          {category: 'rel', type: 'wait', text: 'Сгонять в Заповедник с зубрами'},
          {category: 'rel', type: 'wait', text: 'Сгонять на выставку Врубеля'},
          {category: 'rel', type: 'wait', text: 'Сгонять в FRANK by БАСТА'},
          {category: 'rel', type: 'wait', text: 'Сгонять в Chick O\'Rico'},
          {category: 'rel', type: 'wait', text: 'На море'},
      ]},

      // FRIENDS
      {category:'friends', type: 'note', text: 'Что вы скажите про цели в сфере "Друзья"? - "Пацанское, хули"'},
      {category:'friends', type: 'wait', text: 'Сходить в чебуречную'},
      {category:'friends', type: 'done', text: 'Сходить в раковую', children: [
        {category: 'friends', type: 'note', text: 'Раки - ну такое - мяса мало, возни много - лучше взять креветок или крабов'},
      ]},
      {category:'friends', type: 'wait', text: 'Ежегодное тетатет бухалово пивка с Михой и сватанье его'},
      {category:'friends', type: 'wait', text: 'Сделать все настоечки, которые подарил Андрей с Машей'},

      // GROWTH
      {category: 'growth', type: 'habit', text: "Книги читать много", children: [
          {category: 'growth', type: 'note', text: "Я какие-то книги в прошлом году купил, надо их читать бля!"},
          {category: 'growth', type: 'wip', text: "Биография Шварца"},
          {category: 'growth', type: 'wip', text: "Искусство любить Фрома"},
          {category: 'growth', type: 'wip', text: "То как мы работаем не работает Шварца (Тони)"},
      ]},
      {category: 'growth', type: 'wait', text: "Права получить"},
      {category: "growth", type: "wip", text: "Сделать загран"},
      {category: "growth", type: "wip", text: "Получить латвийское гражданство (нихуясебе)"},

      // REST
      {category: "rest", type: "wip", text: "Дальше айзека дрочить - сейчас: 423 из 637"},
      {category: "rest",  type: "note", text: "Дальше блог пилить", children: [
          {category: "rest", type: "note", text: "Теперь в <a href='/changelog'>ченжлоге</a> всегда есть секция WIP - о том, какие статьи пилятся в данный момент"},
          {category: "rest", type: "done", text: "Цели 2022"},
          {category: "rest", type: "wip", text: "Итоги 2021"},
          {category: "rest", type: "wip", text: "Че глянуть можно"},
          {category: "rest", type: "done", text: "Openpyxl"},
          {category: "rest", type: "wip", text: "Че слушаешь"},
          {category: "rest", type: "wip", text: "Джанго рецепты"},
      ]},
      {category: "rest", type: "wait", text: "Винду 11 потраить - на ноуте доступна!"},
      {category: 'rest', type:'wait', text: "<a href='https://github.com/potykion/repka'>Репку</a> допилить, а то <a href='https://github.com/potykion/repka/issues/65'>она нужна кому-то</a>"},
      {category: 'rest', type:'note', text: "Диджитал уборочка", children: [
          {category: 'rest', type:'done', text: "Удалить ненужные приложухи"},
          {category: 'rest', type:'wait', text: "Разобраться с контактами"},
          {category: 'rest', type:'done', text: "Прибраться в закладках"},
          {category: 'rest', type:'done', text: "Разобрать аудюхи / дневники / заметки - все в OneNote"},
      ]},
      {category: "rest", type: "done", text: "Пазл склеить"},
      {category: "rest", type: 'wip', text: 'Сделать сервис, типа "Чем заняться"'},



      // SOUL
      {category: "soul", type: 'note', text: '<i>Поиск чего-то большего, чем сам человек: смысла жизни, Бога, идеи, предназначения, принципа, мокши</i>'},
      {category: "soul", type: 'note', text: 'Вот тут хз'},
      {category: "soul", type: 'note', text: 'Надо больше отдыхать, больше цели пилить, а не ебланить'},
      {category: "soul", type: 'wait', text: 'Прочитать <a href="https://goal-life.com/page/kniga/viktor-frankl/chto-takoe-smisl-zhizni-cheloveka">про смысл жизни</a>'},
      {category: "soul", type: 'done', text: 'Сделать интерактивное колесо жизни, чтобы видеть перекосы'},
    ] as Goal[];

    return {page};
  },
})
export default class goals2022
  extends Vue {
  page!: IContentDocument;

  get article() {
    return CoreArticle.fromNuxtContent(this.page);
  }

  head() {
    return this.article.seoHead;
  }

}
</script>

<style scoped>
</style>
