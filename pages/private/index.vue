<template>
 <div>
   PRIVATO4KA

   <ul>
     <li><nuxt-link to="/private/fin">fin</nuxt-link> </li>
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
   layout: 'private'
})
export default class index extends Vue {

}
</script>

<style scoped>
</style>
