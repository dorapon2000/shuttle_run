<template>
  <div class="bookStats">
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
.bookStats{
  width:90%;
  height: 60%;
  margin: 1em auto;
  background-color: white;
}
</style>