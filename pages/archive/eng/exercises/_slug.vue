<template>
  <div>
    <h1>{{ exerciseInfo.topic }}</h1>
    <template v-for="(ex, exerciseIndex) in exercises">
      <exercise-item  :key="exerciseIndex" :ex="ex" :answer="keys[exerciseIndex]"></exercise-item>
      <hr>
    </template>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from "nuxt-property-decorator";
import {Context} from "@nuxt/types";
import ExerciseItem from "~/components/exercise-item.vue";
import {IContentDocument} from "@nuxt/content/types/content";

@Component({
  components: {ExerciseItem},
  async asyncData({$content, params}: Context) {
    const grammarExercisesToc = await $content("archive/eng/grammar-exercises-toc").fetch();

    const eng = await $content("archive/eng").fetch() as IContentDocument[];
    const exercises = eng.filter(item => item.slug === params.slug);
    const keys = eng.filter(item => item.slug === `${params.slug}_answers`);

    console.log(exercises[0]);
    console.log(keys[0]);
    console.log(exercises.length);
    console.log(keys.length);

    return {grammarExercisesToc, exercises, keys};
  },
  // fetchOnServer: false
})
export default class ExercisePage extends Vue {
  grammarExercisesToc!: GrammarExercises.TocItem[];
  exercises!: GrammarExercises.Exercise[];
  keys!: GrammarExercises.Answer[];


  get exerciseInfo(): GrammarExercises.TocItem {
    return this.grammarExercisesToc.find(toc => toc.slug === this.$route.params.slug)!;
  }

}
</script>

<style scoped>

</style>
