<template>
  <div class="mendel-card">
    <h2>dict_to_json</h2>
    <p>Конвертит питоновский словарь в json</p>


    <textarea class="w-full h-56 p-1 border-gray-100 border rounded" placeholder="Сюда словарь" v-model="dict"></textarea>
    <div class="flex justify-end">
      <button :disabled="loading" @click="convert">Конвертнуть</button>
    </div>
    <div class="text-red-500">{{ err }}</div>


  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class dict_to_json extends Vue {
  dict = "";
  loading = false;
  err = '';

  async convert() {
    if (!this.dict) return;

    this.loading = true;
    try {
      this.err = '';
      let response = await fetch(
        "https://functions.yandexcloud.net/d4evjj6ajnla3qrutemd",
        {
          body: JSON.stringify({tool: 'dict_to_json', dict: this.dict}),
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
        }
      );
      if (response.status !== 200) {
        throw await response.text();
      }

      this.dict = await response.text();
    }
    catch (e) {
      this.err = e;
    }
    finally {
      this.loading = false;
    }
  }
}
</script>

<style scoped>
</style>
