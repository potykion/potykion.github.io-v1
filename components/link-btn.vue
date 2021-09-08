<template>
  <div class="inline">
  <template v-if="href.startsWith('/')">
    <nuxt-link :class="['link-btn', type]" :to="href">
      <slot></slot>
    </nuxt-link>
  </template>
  <template v-else>
    <a :class="['link-btn', type]" :href="href">
      <slot></slot>
    </a>
  </template>
  </div>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class LinkBtn
  extends Vue {
  @Prop({required: true}) href!: string;

  get type(): string {
    if (this.href.includes("t.me")) return "tg";
    if (this.href.includes("instagram.com")) return "ig";
    if (this.href.includes("tinkoff.ru")) return "tinkoff";
    if (this.href.includes("calendly.com")) return "calendly";
    if (this.href.includes("kinopoisk.ru")) return "kp";
    if (this.href.includes("youtube.com")) return "yt";
    if (this.href.includes("github.com")) return "gh";
    return "regular";
  }
}
</script>

<style scoped>

.link-btn {
  @apply py-1 px-3 rounded no-underline inline-block font-bold shadow;
}

.regular {
  @apply bg-pink-400 text-black;
}
.regular:hover {
  @apply  bg-pink-500;
}


.tg {
  background: #1d98dc;
  @apply text-white;
}
.tg:hover {
   background: #357ebd;
 }

.ig {
  background: #f09433;
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);

  @apply text-white;
}

.tinkoff {
  @apply text-black;
  background: #FFDD2D
}

.tinkoff:hover {
  background: #FCC521;
}

.calendly {
  @apply text-white;
  background: #006BFF;
}
.calendly:hover {
  background: #66A6FF;
}

.kp {
  @apply text-white !important;
  background: #f60;
}
.kp:hover{
  background: #F26100;
}


.yt {
  @apply text-white;
  background: #FF0000;
}
.yt:hover {
  background: #CC0000;
}

.gh {
  @apply text-white;
  background: #333;
}
</style>
