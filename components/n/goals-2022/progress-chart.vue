<template>
  <highchart :options="chartOptions"/>
</template>

<script lang="ts">

import {
  Component, Prop,
  Vue,
} from "nuxt-property-decorator"
import {Goal} from "~/logic/n/models";

@Component({})
export default class ProgressChart extends Vue {
  @Prop() goals!: Goal[];

  categories = [
    'health',
    'money',
    'work',
    'rel',
    'friends',
    'growth',
    "rest",
    "soul",
  ];
  categoryLabels = [
    '🏥 Здоровье',
    '💵 Деньги',
    '👷‍♀️ Работа',
    '💑 Отношач',
    '🍻 Друзья',
    '🚗 Развитие',
    '🎮 Отдых / хобби',
    '⛪ Дух',
  ];


  typeLabels = {
    'wait': '🔜 На очереди',
    'wip': '🚧 В процессе',
    'done': '✅ Выполнено',
  }


  get series() {
    let flatGoals = this.goals
      .flatMap(g => [g, ...(g.children ?? [])])
      .filter(g => g.type !== 'note');

    return Object.keys(this.typeLabels).map(
      type => ({
        name: this.typeLabels[type],
        data: [
          ...this.categories
            .map(c =>
              flatGoals
                .filter(g => g.category === c)
                .filter(g => g.type === type)
                .length
            )
        ]
      })
    );

  }


  /**
   * Основа:
   * https://www.highcharts.com/docs/chart-and-series-types/bar-chart#fromHistory
   */
  chartOptions = {
    chart: {type: 'bar'},
    title: {text: ''},
    xAxis: {
      categories: this.categoryLabels,
      title: {text: null}
    },
    yAxis: {
      labels: {overflow: 'justify'},
      title: {text: null}
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      floating: true,
    },
    credits: {enabled: false},
    series: this.series,
  }


}
</script>

<style scoped>
</style>
