<template>
  <div>
    <template v-if="streamline">
      <img v-viewer="{title: false, toolbar: false, navbar: false}" :src="`/images${img}`" :alt="img"
           :class="[align === 'left' ? 'float-left' : 'float-right', 'm-3']">
      <div>
        <h3 v-if="header">{{ header }}</h3>

        <slot></slot>
      </div>
    </template>

    <template v-else>
      <div class="flex items-center space-x-3">
        <template v-if="align === 'left'">
          <img v-viewer="{title: false, toolbar: false, navbar: false}" :src="`/images${img}`" :alt="img">

          <div>
            <h3 v-if="header">{{ header }}</h3>
            <slot></slot>
          </div>
        </template>

        <template v-if="align === 'right'">
          <div>
            <h3 v-if="header">{{ header }}</h3>
            <slot></slot>
          </div>

          <img v-viewer="{title: false, toolbar: false, navbar: false}" :src="`/images${img}`" :alt="img">
        </template>
      </div>
    </template>
  </div>
</template>


<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class ImgCard extends Vue {
  @Prop({default: "left"}) align!: "left" | "right";

  @Prop() img!: string;
  @Prop() header!: string;

  @Prop({default: false}) streamline!: boolean;
}
</script>

<style scoped>

img {
  @apply w-28  rounded;
}

</style>
