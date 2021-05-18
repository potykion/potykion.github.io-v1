<template>
  <article>
    <h1>Идеи для проектов</h1>
    <p>Здесь будут описаны идеи для проектов, на которые в данный момент у меня нет времени, но хотелось бы их
      реализовать в будущем.</p>
    <h2 id="yt-shuffle">Рандомайзер Ютуб видосов</h2>

    <a href="https://github.com/potykion/yt-shuffle">Выполнено!</a>

    <p>У меня есть <a href="https://www.youtube.com/playlist?list=PLdb8DVmvU9i5bGINNz10f-ga_bqD41O4q">плейлист с
      ебанутыми клипами</a>, их там штук 200. Соответственно, хочется иметь возможность запускать их
      в рандомном порядке.</p>
    <p>Ютуб не умеет рандомизировать видосы нормально: те видосы, которые ты посмотрел, могут выпасть ещё раз. Причем
      может случиться ситуация, когда ты попадешь в петлю рандома, где рандом будет показывать тебе одни и те же
      видосы.</p>
    <p>Есть решение этой проблемы - <a href="https://youtube-playlist-randomizer.bitbucket.io/">https://youtube-playlist-randomizer.bitbucket.io/</a>.
      Этот сервис нормально рандомит видосы, но например, нельзя смотреть видео с ограничением по возрасту.</p>
    <p>Есть мысль, что будучи авторизованным, такие видео можно будет смотреть (<a
      href="https://www.reddit.com/r/youtube/comments/k536y3/any_way_to_play_age_restricted_youtube_videos">видимо
      незя</a>)
    </p>
    <p>Ещё мысль, что в апишке есть <a href="https://developers.google.com/youtube/v3/docs/playlistItems">возможность
      менять порядок плейлиста</a> =&gt; приложуха будет перемешивать плейлист
      и все заебок будет</p>

    <h2>Шаринг едой с соседями</h2>

    <p>Бывают ситуации, когда я че-нить сготовлю, и выходит порций 4.</p>

    <p>
      2-3 дня есть одно и то же неохота, к тому же
      разогретая еда уже не такая вкусная. И хочется приложуху, в которой ты говоришь, что ты сготовил хавчик, и готов
      им поделится за бабос, и еду забирает курьер или сосед.</p>

    <p>В асашай говорят уже есть <a
      href="https://vc.ru/tribuna/242704-kak-zarabotat-na-kulinarnom-airbnb-v-svoem-gorode-ili-rayone-zapusk-biznesa-za-7-dney-bez-programmistov">что-то
      подобное</a></p>
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
    title: "Идеи для проектов"
  }),
})
export default class ideas extends Vue {

}
</script>

<style scoped>
</style>
