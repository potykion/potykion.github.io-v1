<template>
  <li :class="status">
    <spoiler v-if="hasDescription">
      <slot></slot>

      <template slot="spoiled">
        <slot name="description"></slot>
      </template>
    </spoiler>

    <template v-else>
      <slot></slot>
    </template>
  </li>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator"

@Component({})
export default class GoalStep extends Vue {
  @Prop({default: "wip"}) status!: "done" | "wip" | "drop";

  get hasDescription(): boolean {
    return !!this.$slots.description;
  }
}
</script>

<style scoped>

.done:before {
  content: '✅';
  @apply mr-2;
}

.wip:before {
  content: '🚧';
  @apply mr-2;
}

.drop:before {
  content: '❌';
  @apply mr-2;
}

li {
  @apply list-none wip;
}

</style>
