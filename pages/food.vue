<template lang="md">

# Еда

Здесь будут тир-листы еды

## Яблоки

<tier-list>
<template #a>Пинк Леди</template>
<template #c>Голден · Спартан</template>
<template #e>Гала</template>
</tier-list>

## Колбаска

<tier-list>
<template #b>Сервелат · Прошутто · Палермо</template>
<template #c>Докторская</template>
</tier-list>

## Сырический

<tier-list>
<template #a>Сливочный</template>
<template #b>Легкий</template>
<template #c></template>
</tier-list>

## Помидорки

<tier-list>
<template #b>Бархатный мед</template>
<template #c>Черри</template>
<template #c>Конфетто</template>
<template #e>Пинк Парадайз</template>
</tier-list>

## Стейки

<tier-list>
<template #b>Шейка</template>
<template #d>Рамп</template>
</tier-list>


</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import TierList from "~/components/tier-list.vue";


@Component({
  components: {TierList},
  head: () => ({
    title: "Еда"
  }),
})
export default class food extends Vue {

}
</script>

<style scoped>

</style>
