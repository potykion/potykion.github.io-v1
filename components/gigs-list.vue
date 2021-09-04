<template>
  <ul>
    <li v-for="c in concerts" :key="c.title">
      <a :href="c.link"><b>{{ c.title }}</b> · {{ c.date.toLocaleDateString('ru-RU') }} · {{ c.club }}</a>
    </li>
  </ul>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"


type Club = "Главclub" | "Город";

interface Concert {
  title: string;
  link: string;
  club: Club;
  date: Date;
}

@Component({
})
export default class GigsList
extends
Vue
{
  concerts: Concert[] = [
    {
      title: "GusGus",
      link: "https://afisha.yandex.ru/moscow/concert/gusgus-msk",
      date: new Date("2021-10-15"),
      club: "Главclub" as Club,
    },
    {
      title: "Perturbator",
      link: "https://vk.com/perturbator_msk2021",
      club: "Главclub" as Club,
      date: new Date("2021-11-26"),
    },
    {
      title: "Ghostemane",
      link: "https://afisha.yandex.ru/moscow/concert/ghostemane-msk-2021",
      club: "Главclub" as Club,
      date: new Date("2021-09-29"),
    },

  ].sort((a, b) => a.date.getTime() - b.date.getTime());
}
</script>

<style scoped>
</style>
