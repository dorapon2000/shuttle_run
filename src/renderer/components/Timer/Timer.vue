<template>
  <div class="timer">
    <i class="far fa-clock" :class="isTimeOut"></i><span>{{showLefttime}}</span>
  </div>
</template>

<script>
export default {
  name: 'CountTimer',
  props: ['limitOfTime'],
  data () {
    return {
      lefttime: 0,
      timeManager: undefined
    }
  },
  computed: {
    isTimeOut: function () {
      return this.lefttime > 0 ? 'inTime' : 'outOfTime'
    },
    showLefttime: function () {
      return this.lefttime
    }
  },
  methods: {
    resetCount: function () {
      this.lefttime = this.limitOfTime
      clearTimeout(this.timeManager)
    },
    startCount: function () {
      this.countDown()
    },
    countDown: function () {
      console.log(this.lefttime)
      this.timeManager = setTimeout(() => {
        this.lefttime--
        if (this.lefttime > 0) {
          this.countDown()
        }
      }, 1000)
    }
  },
  mounted: function () {
    this.lefttime = this.limitOfTime
  }
}
</script>

<style>
.timer{
  display: inline-block;
}
.inTime{
  color: chartreuse;
}
.outOfTime{
  color: red;
}
</style>