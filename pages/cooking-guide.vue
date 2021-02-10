<template>
  <div>
    <h2>Готовка-гайд</h2>

    <p>Думаю, запилить гайд по готовке, всяких советов, ЛаЙфХаКов написать.</p>

    <p>Пока напишу, что я пробовал готовить:</p>

    <ul>
      <li>
        <a href="https://www.youtube.com/playlist?list=PLS5NPENuMzpOAzLYg04IzaoUOpgI71jnT">
          Готовим быстро и легко с Джейми Оливером
        </a>
      </li>
      <li>
        <a href="https://econet.ru/articles/65946-20-retseptov-vkusneyshih-i-polezneyshih-smuzi"> Дохуя рецептов
          смузи</a>
        <ul>
          <li>5. «Лучший в мире» смузи - кавычки тут не зря))) не самый вкусный смузи</li>
          <li>15. Смузи «Ягодно-ванильная сенсация» - вкуснее варианта выше</li>
        </ul>

      </li>
    </ul>

    <p>Неопробованные рецепты:</p>

    <ul>
      <li>
        <a href="https://www.youtube.com/watch?v=XJ5KAU_oyFg">ПОВТОРЯЕМ НЕВЕРОЯТНУЮ УЛИЧНУЮ ЕДУ СО ВСЕГО МИРА /
          ОГРОМНЫЕ КРЕВЕТКИ / ЭКЗОТИЧЕСКИЕ ФРУКТЫ / ТАКО</a> - Дениска грит, что тако топ
      </li>
    </ul>

  </div>

</template>
<script lang="ts">

import {
  Component,
  Vue,
} from "nuxt-property-decorator"

@Component({
  head: () => ({
    title: "Готовка-гайд"
  })
})
export default class cookingGuide extends Vue {

}
</script>
