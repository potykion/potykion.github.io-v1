<template>
</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "О себе"
  })
})
export default class me extends Vue {
  mounted() {
    this.$router.push("/n");
  }
}
</script>


