<template>
  <div>
    <div class="flex space-x-1 items-center">
      <div>
        <select v-model="material" class="border  py-1 rounded">
          <option disabled value="">Материал</option>
          <option value="oil"> Масло</option>
          <option value="watercolor"> Акварель</option>
          <option value="pencil"> Карандаш</option>
          <option value="ink"> Тушь / чернила</option>
          <option value="pen"> Ручка</option>
          <option value="coal"> Уголь</option>
          <option value="sanguine"> Сангина</option>
        </select>
      </div>
      <div>
        <select v-model="theme" class="border  py-1 rounded">
          <option disabled value="">Тематика</option>
          <option value="landscape"> Пейзаж</option>
          <option value="stilllife"> Натюрморт</option>
          <option value="portrait"> Портрет</option>
          <option value="sketch"> Скетч</option>
        </select>
      </div>
      <div>
        <button @click="generateTags">Сгенерить</button>
      </div>
    </div>

    <div v-if="showTags">
      <div class="my-2 font-bold">{{ tagsStr }}</div>
      <button class="" v-clipboard:copy="tagsStr">Скопировать</button>
    </div>
  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class ArtTagGen
  extends Vue {

  material: string = "";
  theme: string = "";

  showTags = false;
  tagsStr = "";

  generateTags() {
    this.showTags = true;

    let tags = ["#art", "#арт", "#drawing", "#рисунок"];

    switch (this.material) {
      case "oil":
        tags.push("#oilpainting", "#масло");
        break;
      case "watercolor":
        tags.push("#watercolor", "#акварель");
        break;
      case "pencil":
        tags.push("#pencildrawing", "#карандаш");
        break;
      case "ink":
        tags.push("#ink", "#тушь");
        break;
      case "pen":
        tags.push("#pen", "#ручка");
        break;
      case "coal":
        tags.push("#coal", "#уголь");
        break;
      case "sanguine":
        tags.push("#sanguine", "#сангина");
        break;
      default:
        break;
    }

    switch (this.theme) {
      case "portrait":
        tags.push("#portrait", "#портрет");
        break;
      case "stilllife":
        tags.push("#stilllife", "#натюрморт");
        break;
      case "landscape":
        tags.push("#landscape", "#пейзаж");
        break;
      case "sketch":
        tags.push("#sketching", "#скетч");
        break;
      default:
        break;
    }

    this.tagsStr = tags.join(" ");
  }

}
</script>

<style scoped>
</style>
