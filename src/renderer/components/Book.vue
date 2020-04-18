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
    border-radius: 1em;
    padding: 0.5em;
    background-color: rgba(17, 171, 177, 0.79);
    margin: 0.5em;
}
</style>