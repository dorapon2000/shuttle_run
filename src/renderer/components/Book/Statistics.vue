<template>
  <div>
    {{sum}}
  </div>
</template>

<script>
export default {
  name: 'BookStatistics',
  props: {
    statisticks: {
      required: false,
      default: function () {
        return [{ OK: 0, NG: 0 }]
      }
    }
  },
  computed: {
    sum: function () {
      return this.statisticks.reduce((a, b) => { return a.OK + b.OK })
    }
  }
}
</script>

<style>

</style>