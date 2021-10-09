<template>
  <div>
    <nuxt-link :to="to"
               :class="[
                 'no-underline text-black visited:text-black font-display leading-none h-14  flex justify-center  items-center',
                 forceActive ? 'font-bold border-b-4 border-black' : ''
                ]"
               active-class="font-bold border-b-4 border-black">
      <div>
        <span :class="emote ? 'hidden lg:inline' : ''">{{ title }}</span>
        <img-emote v-if="emote" size="small" :emote="emote"></img-emote>
      </div>
    </nuxt-link>
  </div>

</template>

<script lang="ts">

import {
  Component,
  Prop,
  Vue, Watch,
} from "nuxt-property-decorator"

@Component({})
export default class NavItem extends Vue {
  @Prop() to!: string;
  @Prop() title!: string;
  @Prop() emote!: string;

  forceActive = false

  /**
   * Хак для /n роутов
   * nav-item для раздела "Лайфстайл" открывает страницу /n/toc с ссылками вида /n, /n/principles
   */
  @Watch("$route.path", {immediate: true})
  setActiveForN() {
    this.forceActive = this.$route.path.startsWith("/n") && this.to.startsWith("/n");
  }
}
</script>
