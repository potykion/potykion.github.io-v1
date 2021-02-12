<template>
  <div>
    <h2>Вишлист</h2>

    <ul>
      <li>Мультиварка</li>
      <li>Электрогриль</li>
      <li><a href="https://streamlabs.com/vansamaofficial/merch/1116981">Футболочка</a></li>
      <li><a HREF="https://www.citilink.ru/catalog/computers_and_notebooks/hdd/ssd_in/1134605/">SSD</a></li>
      <li>Сертик на <a href="https://www.ozon.ru/category/podarochnye-sertifikaty-32060/">Ozon</a></li>
      <li>Сертик на <a href="https://www.lamoda.ru/giftcertificate/">Lamoda</a></li>
      <li>Постельное (подушка, одеяло, матрас)</li>
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
  head: () => ({
    title: "Вишлист"
  })
})
export default class me extends Vue {

}
</script>
