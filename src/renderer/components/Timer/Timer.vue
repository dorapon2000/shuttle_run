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
    /**
     * 時間切れの判定をし、cssのクラスを返却
     */
    isTimeOut: function () {
      return this.lefttime > 0 ? 'inTime' : 'outOfTime'
    },
    /**
     * 残り時間の返却
     */
    showLefttime: function () {
      return this.lefttime
    }
  },
  methods: {
    /**
     * 時間のリセット
     */
    resetCount: function () {
      this.lefttime = this.limitOfTime
      clearTimeout(this.timeManager)
    },
    /**
     * カウントダウンの開始
     */
    startCount: function () {
      this.countDown()
    },
    /**
     * カウントダウン処理
     */
    countDown: function () {
      this.timeManager = setTimeout(() => {
        this.lefttime--
        if (this.lefttime > 0) {
          this.countDown()
        }
      }, 1000)
    }
  },
  /**
   * 初期化処理
   * 残り時間の初期化
   */
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