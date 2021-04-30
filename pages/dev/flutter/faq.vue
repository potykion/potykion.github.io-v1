<template>
  <article>
    <h2>Flutter / Штуки, которые часто забываются</h2>

    <h3>Получение аргументов роута</h3>

    <pre><code v-highlight class="dart">
ModalRoute.of(context)!.settings.arguments
    </code></pre>

    <h3>Аналог initState для hook-виджетов</h3>

    <pre><code v-highlight>
useEffect(
    () {
      WidgetsBinding.instance!.addPostFrameCallback((_) async {
          ...
      });
    },
    [],
);
    </code></pre>
  </article>
</template>

<script lang="ts">

import {
  Component, mixins,
  Prop,
  Vue,
} from "nuxt-property-decorator"
import TrimCodeMixin from "~/components/trim-code-mixin";

@Component({
  head: () => ({
    title: "Штуки, которые часто забываются"
  }),
})
export default class faq extends mixins(TrimCodeMixin) {

}
</script>

<style scoped>
</style>
