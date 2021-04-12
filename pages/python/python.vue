<template>

  <div>
    <h2>Python</h2>

    <p>
      Здесь будут заметки про питончик.
    </p>






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
    title: "Python"
  })
})
export default class index extends Vue {
  mounted() {
    document.querySelectorAll("code").forEach(e => e.innerHTML = e.innerHTML.trim());
  }

}
</script>
