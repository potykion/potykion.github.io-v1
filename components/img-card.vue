<template>
  <div>
    <template v-if="streamline">
      <figure :class="[align === 'left' ? 'float-left' : 'float-right', 'm-3']">
        <img v-viewer="{title: false, toolbar: false, navbar: false}" :src="`/images${img}`" :alt="alt || img"
        :class="['mx-auto', 'rounded', full ? 'max-h-96' : 'w-28']">
        <figcaption v-if="alt">{{ alt }}</figcaption>
      </figure>

      <div>
        <h3 v-if="header">{{ header }}</h3>

        <slot></slot>
      </div>
    </template>

    <template v-else>
      <div class="flex items-center space-x-3">
        <template v-if="align === 'left'">
          <img v-viewer="{title: false, toolbar: false, navbar: false}" :src="`/images${img}`" :alt="alt || img">

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

          <img v-viewer="{title: false, toolbar: false, navbar: false}" :src="`/images${img}`" :alt="alt || img">
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
  @Prop() alt!: string;
  @Prop() header!: string;
  @Prop({default: false}) full!: boolean;

  @Prop({default: false}) streamline!: boolean;
}
</script>

<style scoped>


</style>
