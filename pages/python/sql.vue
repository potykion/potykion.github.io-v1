<template>
  <article>
    <h3>
      Python / SQL
    </h3>

    <p>
      По умолчанию в SQLAlchemy sql-запросы рендерятся без конкретных значений. Чтобы получить полный sql-запрос с
      конкретными
      значениями:
    </p>
    <pre><code v-highlight class="python">query.compile(compile_kwargs={"literal_binds": True})</code></pre>

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
    title: "Python / SQL"
  }),
})
export default class sql extends Vue {

}
</script>

<style scoped>
</style>
