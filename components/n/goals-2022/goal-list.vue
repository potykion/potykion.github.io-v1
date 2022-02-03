<template>
  <div>
    <ul>
      <template v-for="goal in this.goals">
        <li :class="goal.type" :key="goal.text">
          <div class="inline" v-html="goal.text"></div>

          <ul v-if="(goal.children || []).length">
            <template v-for="child in goal.children">

              <li :key="child.text" :class="child.type">
                <div class="inline" v-html="child.text"/>

                <ul v-if="(child.children || []).length">
                    <li v-for="child2 in child.children" :key="child2.text"
                        :class="child2.type" v-html="child2.text" />
                </ul>
              </li>
            </template>
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
}
</script>

<style scoped>

li {
  @apply my-3;
}

li.note {
  list-style: none;
}

li.note:before {
  content: '– ';
}

li.done {
  list-style: none;
}

li.done:before {
  content: '✅ ';
}

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
  content: '🔜 ';
}

li.habit {
  list-style: none;
}

li.habit:before {
  content: '🔁 ';
}

</style>
