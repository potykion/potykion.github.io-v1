<template>
  <div class="mendel-card">


    <input class="p-2" type="password" v-model="password" placeholder="Ты крутой или говно?!">
    <button @click="tryAuth">давай проверим!</button>

    <div class="text-red-500">{{err}}</div>
  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({
})
export default class auth extends Vue {
  password = "";
  err = "";

  async tryAuth() {
    const [success, err] = await this.$store.dispatch('tryAuth', this.password);
    if (success) {
      this.$router.push("/private");
    }
    else {
      this.err = err;
    }
  }
}
</script>

<style scoped>
</style>
