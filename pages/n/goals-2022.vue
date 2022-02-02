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
      {category: 'rel', type: 'note', text: 'Тут Мила сама все придумает'},
      {category: 'rel', type: 'done', text: 'Глинтвейн сделать'},
      {category: 'rel', type: 'done', text: 'Стейки сделать'},
      {category: 'rel', type: 'done', text: 'Экскурсия в Плехановке'},
      {category: 'rel', type: 'done', text: 'В Икею сгонять'},
      {category: 'rel', type: 'done', text: 'Пазл собрать'},
      {category: 'rel', type: 'done', text: 'На стендап сгонять'},
      {category: 'rel', type: 'done', text: 'Огонечки сделать: гирлянду на всю стену повесить'},
      {category: 'rel', type: 'done', text: 'Выставка в художке'},
      {category: 'rel', type: 'done', text: 'На конц сходить'},
      {category: 'rel', type: 'done', text: 'На выставку <a href="https://bodyworlds.site/">BodyWorlds</a> сходить - пизда стремно, у меня аж потом член не вставал'},
      {category: 'rel', type: 'done', text: 'Артишоки из глины слепить - <a href="https://www.instagram.com/terracat_studio/">тут</a> '},
      {category: 'rel', type: 'done', text: 'Прыганье на батутах - <a href="https://www.instagram.com/nebo_tyt/">Неботут</a>'},
      {category: 'rel', type: 'done', text: 'Палеонтологический музей'},
      {category: 'rel', type: 'done', text: 'В басик сходить'},
      {category: 'rel', type: 'done', text: 'Музей Дарвина'},
      {category: 'rel', type: 'done', text: 'Кофе ебашить'},
      {category: 'rel', type: 'done', text: 'На морозе пидорить несколько километров, а потом в киношку'},
      {category: 'rel', type: 'done', text: 'Ебланить дома и смотреть уебищный серик - Sex/Life'},

      {category:'friends', type: 'note', text: 'Что вы скажите про цели в сфере "Друзья"? - "Пацанское, хули"'},
      {category:'friends', type: 'wait', text: 'Сходить в чебуречную'},
      {category:'friends', type: 'wip', text: 'Сходить в раковую'},
      {category:'friends', type: 'wait', text: 'Ежегодное тетатет бухалово пивка с Михой и сватанье его'},
      {category: 'growth', id: 'books', type: 'note', text: "Книги читать много"},
      {category: 'growth', parent: 'books', type: 'note', text: "Я какие-то книги в прошлом году купил, надо их читать бля!"},
      {category: 'growth', parent: 'books', type: 'wip', text: "Биография Шварца"},
      {category: 'growth', parent: 'books', type: 'wip', text: "Искусство любить Фрома"},
      {category: 'growth', parent: 'books', type: 'wip', text: "То как мы работаем не работает Шварца (Тони)"},
      {category: 'growth', type: 'wait', text: "Права получить"},

      {category: "rest", type: "wip", text: "Сделать загран"},
      {category: "rest", type: "wip", text: "Получить латвийское гражданство (нихуясебе)"},
      {category: "rest", type: "wip", text: "Дальше айзека дрочить - сейчас: 423 из 637"},
      {
        category: "rest",
        type: "wip",
        text: "Дальше блог пилить - теперь в <a href='/changelog'>ченжлоге</a> всегда есть секция WIP - о том, какие статьи пилятся в данный момент"
      },
      {category: "rest", type: "wait", text: "Винду 11 потраить - на ноуте доступна!"},

      {category: "soul", type: 'note', text: 'Вот тут хз'},
      {category: "soul", type: 'note', text: 'Надо больше отдыхать, больше цели пилить, а не ебланить'},
      {category: "soul", type: 'note', text: 'Сделать сервис, типа "Чем заняться"'},
      {category: "soul", type: 'note', text: 'Сделать интерактивное колесо жизни, чтобы видеть перекосы'},
    ];

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
