<template>
  <div class="mendel-card">
    <p>
      Дороу, это Блог из-под палки — блог про легкость и приятность <i>(а также про разработку, про еду, про меня, и,
      возможно, про тебя)</i>
    </p>

    <hr>

    <div class="space-x-2 overflow-x-auto flex ">
      <link-btn class="flex-shrink-0" href="/changelog">Новое</link-btn>
      <link-btn class="flex-shrink-0" href="/n/reviews">Отзывы</link-btn>
      <link-btn class="flex-shrink-0" href="/n/goals-2022">Цели 2022</link-btn>
      <link-btn class="flex-shrink-0" href="/n">Обо мне</link-btn>
      <link-btn class="flex-shrink-0" href="/n/wishlist">Вишлист</link-btn>
    </div>

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
