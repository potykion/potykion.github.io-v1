<template>
  <div>
    <h1>ГИГИ</h1>


    <img-row :images="['/gigs.jpg']">

    </img-row>

    <p>
      Здесь будет список конциков, на которые я хочу сходить в этому году, если ковид конечно закончится.
    </p>

    <ul>
      <li v-for="c in concerts">
        <a :href="c.link"><b>{{ c.title }}</b> · {{ c.date.toLocaleDateString('ru-RU') }} · {{ c.club }}</a>
      </li>
    </ul>

    <h2>Афиши</h2>

    <ul>
      <li><a href="https://afisha.yandex.ru/moscow/concert">Яндекс Афиша</a></li>
      <li><a href="https://vk.com/madstreambooking">MADSTREAM BOOKING AGENCY</a></li>
      <li><a href="https://vk.com/gosbooking">GRAINS OF SAND BOOKING</a></li>
      <li><a href="https://vk.com/msc_events">Афиша Москва | Концерты вечеринки</a></li>
    </ul>

  </div>
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
  head: () => ({
    title: "ГИГИ"
  }),
})
export default class gigs extends Vue {
  concerts: Concert[] = [
    {
      title: "GusGus",
      link: "https://afisha.yandex.ru/moscow/concert/gusgus-msk",
      date: new Date("2021-05-23"),
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
      date: new Date("2021-09-21"),
    },

  ].sort((a, b) => a.date.getTime() - b.date.getTime());
}
</script>

<style scoped>
</style>

