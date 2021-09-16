<template>
  <div>
    <h2>Содержимое</h2>
    <ul>
      <li
        v-for="link of toc"
        :key="link.id"
        :class="['toc', link.depth === 2 ? 'toc2' : 'toc3']"
      >
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      </li>
    </ul>

  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class ArticleToc extends Vue {
  @Prop({required: true}) toc!: object;
}
</script>

<style scoped>
.toc a {
  @apply text-black ;
}

.toc {
  @apply list-none my-3;
}

.toc2 {
  @apply font-bold;
}

.toc3 {
  @apply ml-6;
}
</style>
