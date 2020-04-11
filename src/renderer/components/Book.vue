<template>
  <div class="divBook">
      <book-belt v-bind:title="title"></book-belt>
      <book-statistics v-bind:problems="problems"></book-statistics>
  </div>
</template>

<script>
import BookBelt from './Book/Belt'
import BookStatistics from './Book/Statistics'

export default {
  name: 'Book',
  components: { BookBelt, BookStatistics },
  props: {
    id: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    problems: {
      type: Array,
      required: false,
      default: function () {
        return [{
          text: '',
          answer: '',
          statisticks: {
            OK: 0,
            NG: 0
          }
        }]
      }
    }
  }
}
</script>

<style>
.divBook{
    height: 20em;
    width: 15em;
    background-color: darkcyan;
}
</style>