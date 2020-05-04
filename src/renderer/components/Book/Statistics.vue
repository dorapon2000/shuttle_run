<template>
  <div class="bookStats">
    <canvas ref="canvasStats"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'BookStatistics',
  props: {
    problems: {
      type: Array
    }
  },
  methods: {
    SumOfOkAvg: function () {
      let result = 0.0
      for (let index = 0; index < this.problems.length; index++) {
        const problem = this.problems[index]
        result += this.OkAvg(problem)
      }
      return result / this.problems.length
    },
    OkAvg: function (problem) {
      return Math.ceil(problem.stats.OK / (problem.stats.OK + problem.stats.NG) * 100, -1)
    }
  },
  mounted: function () {
    const canvas = this.$refs.canvasStats
    canvas.height = 250
    const chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['OK', 'NG'],
        datasets: [{
          data: [this.SumOfOkAvg(), 100 - this.SumOfOkAvg()],
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