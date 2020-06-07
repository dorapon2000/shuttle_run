<template>
  <div class="bookStats">
    <canvas v-if="isZero" canvas ref="canvasStats"></canvas>
    <div v-else class="resultNone">
      <i class="far fa-question-circle noneQuestion" ></i>
      <p class="noneMessage">
        問題を解くと正答率が表示されます
      </p>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'
import { SumOfOkAvg, SumOfNgAvg } from '../../utils/stats.js'
export default {
  name: 'BookStatistics',
  props: {
    problems: {
      type: Array
    }
  },
  data: function () {
    return {
      OkAvg: 0,
      NgAvg: 0
    }
  },
  methods: {
    SumOfOkAvg: SumOfOkAvg,
    SumOfNgAvg: SumOfNgAvg
  },
  computed: {
    isZero: function (params) {
      return this.OkAvg > 0 && this.NgAvg > 0
    }
  },
  mounted: function () {
    const canvas = this.$refs.canvasStats
    canvas.height = 250
    this.OkAvg = this.SumOfOkAvg(this.problems)
    this.NgAvg = this.SumOfNgAvg(this.problems)
    const chart = new Chart(canvas, {
      type: 'doughnut',
      data: {
        labels: ['OK', 'NG'],
        datasets: [{
          data: [this.OkAvg, this.NgAvg],
          backgroundColor: ['Red', 'Blue']
        }]
      }
    })
    chart.update()
  }
}
</script>

<style>
.resultNone{
  color: rgba(102, 126, 144, 0.64);
}
.noneQuestion{
  font-size: 7em;
}
.noneMessage{
  margin-top: 1em;
  font-weight: bold;
  font-size: 0.7em;
}
.bookStats{
  width:90%;
  height: 60%;
  margin: 1em auto;
  background-color: white;
  padding: 0.3em;
  text-align: center;
}
.divResultGraph{
  display: flexbox;
}
</style>