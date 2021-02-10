<template>
  <div >


    <h2>SQL-запросы на питоне</h2>
    <p>
      По умолчанию sql-запросы рендерятся без конкретных значений. Чтобы получить полный sql-запрос с конкретными
      значениями:
    </p>
    <pre ><code v-highlight class="python">query.compile(compile_kwargs={"literal_binds": True})</code></pre>

  </div>


</template>
<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "SQL-запросы на питоне"
  })
})
export default class index extends Vue {

}
</script>
