<template>
  <div class="divBook">
      <book-belt v-bind:title="book.title"></book-belt>
      <book-statistics v-bind:problems="book.problems"></book-statistics>
  </div>
</template>

<script>
import BookBelt from './Book/Belt'
import BookStatistics from './Book/Statistics'
export default {
  name: 'Book',
  components: { BookBelt, BookStatistics },
  props: {
    book: {
      type: Object
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