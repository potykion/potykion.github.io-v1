<template>
  <table>
    <tbody>


    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-red-400">S</td><td><slot name="s"></slot></td></tr>
    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-yellow-500">A</td><td><slot name="a"></slot></td></tr>
    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-yellow-200">B</td><td><slot name="b"></slot></td></tr>
    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-green-300">C</td><td><slot name="c"></slot></td></tr>
    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-blue-300">D</td><td><slot name="d"></slot></td></tr>
    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-purple-500">E</td><td><slot name="e"></slot></td></tr>
    <tr><td class="font-bold w-8 h-8 md:w-16 md:h-16 bg-pink-400">F</td><td><slot name="f"></slot></td></tr>
    </tbody>
  </table>
</template>

<script lang="ts">

import {
  Component,
  Vue,
} from "nuxt-property-decorator"

@Component({
})
export default class TierList
  extends Vue {

}
</script>

<style scoped>
td {
  @apply text-center;
}
table, td, th {
  @apply border;
}
table {
  @apply w-full;
}


</style>
