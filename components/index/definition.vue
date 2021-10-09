<template>
  <div class="mendel-card">
    <a href="https://ru.wiktionary.org/wiki/%D0%B8%D0%B7-%D0%BF%D0%BE%D0%B4_%D0%BF%D0%B0%D0%BB%D0%BA%D0%B8">
      <h2 class="header bottom">из-под палки</h2>
    </a>
    <div class="subheader">
      Значение
    </div>
    <ol class="body list-outside ">
      <li>
        <span style="color: #0645ad; font-style: italic; background: #CCFFFF">разг.</span>
        <span style="color: #dd3333">под принуждением</span> ◆
        <span style="color: #006400">
          А сыно́чек как раз всегда́ был скло́нен отве́тственность перекла́дывать, поэ́тому и реши́лась на тако́й подхо́д :-),
          о́чень больши́е опасе́ния бы́ли, что на себя́ он бу́дет брать то́лько лёгкое и прия́тное,
          а тяжёлое и ну́жное исключи́тельно <span style="color: darkgreen; font-weight: bold; background: #EDF0FF">из-по́д па́лки</span>.
          <i class="wiki">«Наши дети: Подростки», 2004 г. [<span style="color: #bb6633">НКРЯ</span>]</i>
        </span>
      </li>
    </ol>


    <hr>
    Дороу, это Блог из-под палки — блог про легкость и приятность <i>(а также про разработку, про еду, про меня, и,
    возможно, про тебя)</i>
  </div>

</template>


<script lang="ts">

import {
  Component,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class definition extends Vue {

}
</script>

<style scoped>

.bottom {
  border-bottom: 1px solid #a2a9b1;
  margin-bottom: 0.25em;
}

.header {
  font-family: "Linux Libertine", Times, sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 37px;

}

.subheader {
  font-family: sans-serif;
  font-weight: 700;
  line-height: 22px;

  margin-top: 0.3em;
  padding-top: 0.5em;
}

.body {
  font-family: sans-serif;
  line-height: 22px;
}

i.wiki {
  font-size: 12px;

}

ol {
  margin: 0.3em 0 0 3.2em;
}

a {
  @apply no-underline  hover:underline;
  color: #0645ad;
}

</style>
