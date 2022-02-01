<template>
  <div>
    <ul>
      <template v-for="goal in goalsWithChildren">
        <li :class="goal.type">
          <div class="inline" v-html="goal.text"></div>

          <ul v-if="goal.children.length">
            <li v-for="child in goal.children" :key="child.text" :class="child.type" v-html="child.text"></li>
          </ul>
        </li>
      </template>
    </ul>
  </div>
</template>


<script lang="ts">

import {Component, Prop, Vue,} from "nuxt-property-decorator"
import {Goal} from "~/logic/n/models";

@Component({})
export default class GoalList
  extends Vue {
  @Prop() goals!: Goal[];

  get goalsWithParents() {
    return this.goals.filter(g => !!g.parent);
  }

  get goalsWithChildren() {
    return this.goals.filter(g => !g.parent)
      .map(g => ({
        ...g,
        children: this.goalsWithParents.filter(c => c.parent === g.id),
      }));
  }
}
</script>

<style scoped>

li.wip {
  list-style: none;
}

li.wip:before {
  content: '🚧 ';
}

li.wait {
  list-style: none;
}

li.wait:before {
  content: '⌛ ';
}

</style>
