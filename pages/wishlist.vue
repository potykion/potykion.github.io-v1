<template>
  <div>
    <h1>Вишлист</h1>

    <ul>
      <li><a HREF="https://www.citilink.ru/catalog/computers_and_notebooks/hdd/ssd_in/1134605/"><b>SSD</b></a></li>

      <li>
        Смарт-часы на WearOS, напр.
        <a href="https://www.ozon.ru/product/smart-chasy-oppo-watch-46mm-ow19w8-black-259438398">
          такие
        </a>
      </li>

      <li>
        Любые беспроводные науши с микро, напр. <a
        href="https://www.ozon.ru/category/igrovye-naushniki-15827/steelseries-26303411/?wire=32735">SteelSeries</a>
      </li>


      <li>
        <a href="https://vk.com/market-134304854?w=product-134304854_5156527">Худи</a>
      </li>
      <li><a href="https://streamlabs.com/vansamaofficial/merch/1116981">Футболочка</a></li>


      <li>Любое постельное, напр. подушка, одеяло, матрас</li>

      <li>
        Любой спец шмот, напр. <a
        href="https://www.ozon.ru/product/kostyum-rabochiy-avangard-professionalnaya-ekipirovka-194176871/?asb=N8BuqW8q4Xe00NQbIFGb%252BIS5nhKcZQCZ6gNacFrQ0Dc%253D">костюм
        рабочего</a>
      </li>
      <li>
        Спортивный костюм адик с 3 полосками, напр.
        <a
          href="https://www.ozon.ru/product/sportivnyy-kostyum-adidas-essentials-tracksuit-211139784/?asb=bqcxrTRfxJyKjib%252BiMjTMiB%252BOctviva%252F0XiRtDgMd%252F4%253D">такой</a>
      </li>

      <li>
        Любой спорт инвентарь, напр. <a
        href="https://www.ozon.ru/product/begovaya-dorozhka-walkingpad-mi-walkingpad-a1-wpa1f-russkaya-versiya-174250077/">беговая
        дорожка</a>, велотренажер покруче <a href="https://www.ozon.ru/context/detail/id/166261877">этого</a>
      </li>
      <li>Любая кухонная техника, напр. мультиварка, электрогриль</li>


      <li><a href="https://www.lamoda.ru/giftcertificate/">Сертик на Lamoda</a></li>
      <li><a href="https://www.ozon.ru/category/podarochnye-sertifikaty-32060/">Сертик на Ozon</a></li>

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
    title: "Вишлист"
  })
})
export default class me extends Vue {

}
</script>

<style scoped>
li {
  @apply my-5;
}

</style>
