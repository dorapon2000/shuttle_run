<template>
  <div>
    {{SumOfOK}}
  </div>
</template>

<script>
export default {
  name: 'BookStatistics',
  props: {
    problems: {
      type: Array
    }
  },
  computed: {
    SumOfOK: function () {
      let result = 0
      this.problems.forEach(problem => {
        result += problem.stats.OK
      })
      return result
    }
  }
}
</script>

<style>

</style>