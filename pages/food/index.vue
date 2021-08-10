<template>
  <div>
    <article-heading title="Про еду" description='Пробую решить проблему "бля что поесть"'></article-heading>

    <h2>Завтраки</h2>
    <div class="flex space-x-2 overflow-auto">
      <food-entity title="Творог" img="/images/food/cottage-cheese.png"></food-entity>
      <food-entity title="Сухие завтраки" img="/images/food/cereals.png"></food-entity>
      <food-entity title="Бутерброды" img="/images/food/sandwich.png"></food-entity>
    </div>

    <h2>Гарниры</h2>
    <div class="flex space-x-2 overflow-auto">
      <food-entity title="Рис" img="/images/food/rice.png"></food-entity>
      <food-entity title="Гречка" img="/images/food/grechka.png"></food-entity>
      <food-entity title="Картошка" img="/images/food/potato.png"></food-entity>
    </div>

    <h2>Основное блюдо</h2>
    <div class="flex space-x-2 overflow-auto">
      <food-entity title="Стейк" img="/images/food/steak.png"></food-entity>
      <food-entity title="Рыба" img="/images/food/fish.png"></food-entity>
    </div>

    <h2>Салаты</h2>
    <div class="flex space-x-2 overflow-auto">
      <food-entity title="Помидоры с огурцами" img="/images/food/pomidory-ogurcy.png"></food-entity>
      <food-entity title="Винегрет" img="/images/food/vinegret.png"></food-entity>
    </div>


  </div>

</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  async asyncData({$content, params}) {
    const page = await $content("/food/index").fetch();
    return {page};
  },
  head() {
    return generateSeoHead(
      "Про еду",
      'Пробую решить проблему "бля что поесть"'
    );
  },
}
</script>
