<template>
  <div class="bookStats">
    <canvas ref="canvasStats"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { SumOfOkAvg, OkAvg } from '../../utils/stats.js'
export default {
  name: 'BookStatistics',
  props: {
    problems: {
      type: Array
    }
  },
  methods: {
    SumOfOkAvg: SumOfOkAvg,
    OkAvg: OkAvg
  },
  mounted: function () {
    const canvas = this.$refs.canvasStats
    canvas.height = 250
    const chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['OK', 'NG'],
        datasets: [{
          data: [this.SumOfOkAvg(this.problems), 100 - this.SumOfOkAvg(this.problems)],
          backgroundColor: ['Red', 'Blue']
        }]
      }
    })
    chart.update()
  }
}
</script>

<style>
.bookStats{
  width:90%;
  height: 60%;
  margin: 1em auto;
  background-color: white;
  padding: 1em;
}
</style>