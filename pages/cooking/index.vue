<template>
  <div>
    <article-heading title="Еда" description='Пробую решить проблему "бля что поесть"'></article-heading>

    <h2>Завтраки</h2>
    <div class="flex space-x-2 overflow-auto">
      <cooking-entity title="Творог" img="/images/food/cottage-cheese.png"></cooking-entity>
      <cooking-entity title="Сухие завтраки" img="/images/food/cereals.png"></cooking-entity>
      <cooking-entity title="Бутерброды" img="/images/food/sandwich.png"></cooking-entity>
    </div>

    <h2>Гарниры</h2>
    <div class="flex space-x-2 overflow-auto">
      <cooking-entity title="Рис" img="/images/food/rice.png"></cooking-entity>
      <cooking-entity title="Гречка" img="/images/food/grechka.png"></cooking-entity>
      <cooking-entity title="Картошка" img="/images/food/potato.png"></cooking-entity>
    </div>

    <h2>Основное блюдо</h2>
    <div class="flex space-x-2 overflow-auto">
      <cooking-entity title="Стейк" img="/images/food/steak.png"></cooking-entity>
      <cooking-entity title="Рыба" img="/images/food/fish.png"></cooking-entity>
    </div>

    <h2>Салаты</h2>
    <div class="flex space-x-2 overflow-auto">
      <cooking-entity title="Помидоры с огурцами" img="/images/food/pomidory-ogurcy.png"></cooking-entity>
      <cooking-entity title="Винегрет" img="/images/food/vinegret.png"></cooking-entity>
    </div>


  </div>

</template>

<script>
import {generateSeoHead} from "@/logic/core/seo";

export default {
  async asyncData({$content, params}) {
    const page = await $content("/cooking/index").fetch();
    return {page};
  },
  head() {
    return generateSeoHead(
      "Еда",
      'Пробую решить проблему "бля что поесть"'
    );
  },
}
</script>
