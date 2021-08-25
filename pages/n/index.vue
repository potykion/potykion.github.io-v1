<template>
  <article>
    <article-heading :title="page.title" :description="page.description" emote="kappa"/>
    <hr/>
    <nuxt-content :document="page"/>
  </article>
</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  async asyncData({$content, params}) {
    const page = await $content("n/index").fetch();
    return {page};
  },
  head() {
    return generateSeoHead(
      this.page.title,
      this.page.description,
      "/n",
      "2021-08-17",
      {
        "@type": "Person",
        "name": "Nikita Leybovich",
      }
    );
  },
}
</script>

<style scoped>

.card {
  @apply px-4 md:px-4 py-4 rounded my-4;

}

.white-text {
  @apply text-white;
}

.white-text a {
  @apply text-white;
}

.white-text a:visited {
  @apply text-white;
}

.white-text figcaption {
  @apply text-white !important;
}

.link-btn {
  @apply py-1 px-2 rounded no-underline inline-block font-bold;
}

/* Custom */

.steam {
  position: relative;
}



.spotify {
  @apply card white-text;
  background-color: rgb(80, 40, 240);
  --background-noise: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=");
  background-image: linear-gradient(rgba(0, 0, 0, .6) 0, #121212 100%), var(--background-noise);
}

.spotify > iframe {
  @apply h-60 w-full;
}


.kp {
  @apply my-4 rounded;
  background: linear-gradient(90deg, #fff, #f9f9f9 5%, #f9f9f9 95%, #fff);
}

.kp > h3 {
  @apply text-white py-4 px-4;
  background: #1F1F1F;
}

.kp > .kp-body {
  @apply px-3 md:px-4 pb-2;
}

.kp a {
  @apply no-underline;
  color: #060077;
}

.kp a:hover {
  color: #f60;
}

.kp a:visited {
  color: #060077;
}

.kp-link {
  @apply link-btn text-white !important;
  background: #f60;
}

.kp-link {
  @apply text-white;
}

.kp .swiper-pagination-bullet-active {
  color: #f60 !important;
}

.casino {
  @apply card;
  position: relative;
}


.vdud {
  @apply card white-text bg-black;
}


.programmer {
  @apply card;
  background: rgb(185,255,216);
  background: linear-gradient(180deg, rgba(185,255,216,1) 0%, rgba(90,114,152,1) 100%);
}


.money {
  @apply link-btn text-black;
  background: #FFDD2D
}
.money:hover {
  background: #FCC521;
}

.calendly {
  @apply link-btn text-white;
  background: #006BFF;
}

.calendly:hover {
  background: #66A6FF;
}

.yt {
  @apply link-btn ;
  background: #FF0000;
}

.aim {
  @apply text-center h-52 rounded flex justify-center flex-col py-6;
}
.aim a {
  @apply text-black no-underline;
}

</style>
