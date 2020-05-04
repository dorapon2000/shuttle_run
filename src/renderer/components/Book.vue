<template>
  <div class="divBook">
    <book-belt v-bind:title="book.title" @renamed="renamedEvent"></book-belt>
    <book-statistics v-bind:problems="book.problems"></book-statistics>
    <book-buttons></book-buttons>
  </div>
</template>

<script>
import BookBelt from './Book/Belt'
import BookStatistics from './Book/Statistics'
import BookButtons from './Book/BookButtons'
export default {
  name: 'Book',
  components: { BookBelt, BookStatistics, BookButtons },
  props: {
    book: {
      type: Object
    }
  },
  data: function () {
    return {
      isUpdate: false
    }
  },
  methods: {
    renamedEvent: function (renamed) {
      this.book.title = renamed
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