<template>
  <div>
    <h1>Ченжлог</h1>

    <h2>1.0.0 - 2021-03-11</h2>
    <ul>
      <li>
        Все, что есть на данный момент
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

@Component({
  head: () => ({
    title: "Ченжлог"
  }),
})
export default class changelog extends Vue {

}
</script>

<style scoped>
</style>
