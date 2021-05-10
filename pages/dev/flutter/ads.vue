<template lang="md">
  ## Flutter / Реклама с Admobs

  [Основа](https://www.youtube.com/watch?v=m0d_pbgeeG8&t=2s) - здесь дают минимум теории о рекламе (типа, ad-unit) + сетап рекламы во флаттер проекте

  ### Доп телодвижения и заметочки

  1. Проект должен юзать [свеженькую версию градла](https://github.com/googleads/googleads-mobile-flutter/issues/127#issuecomment-810022705)
  2. Если в консоли появляется сообщение `Ad failed to load : 3`, значит код написан верно, просто надо либо [подождать](https://stackoverflow.com/questions/33566485/failed-to-load-ad-3), либо чето недо настроено в admobs, напр. реквизиты

  ### Ссылкота

  - [Либа для рекламы](https://github.com/googleads/googleads-mobile-flutter)
  - [Тестовые айди-рекламы](https://developers.google.com/admob/android/test-ads#sample%5C_ad%5C_units)

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Реклама с Admobs"
  }),
})
export default class ads extends Vue {

}
</script>

<style scoped>
</style>
