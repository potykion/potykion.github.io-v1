<template>
  <div>
    <h1>Contents</h1>
    <ul>
      <li v-for="toc in grammarExercisesToc">
        <nuxt-link :to="`/archive/eng/exercises/${toc.slug}`" >{{ toc.topic }}</nuxt-link>
      </li>

    </ul>
  </div>

</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";

@Component({
  async asyncData({$content}: Context) {
    const grammarExercisesToc = await $content("archive/eng/grammar-exercises-toc").fetch();
    return {grammarExercisesToc};
  }
})
export default class toc extends Vue {
  grammarExercisesToc!: GrammarExercises.TocItem[];
}
</script>

<style scoped lang="scss">

</style>
