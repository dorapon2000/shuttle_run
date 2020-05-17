<template>
  <div id="wrapper">
    <aside>
      <a href="#" class="btn-add-book" @click="createBook">+</a>
    </aside>
    <main>
      <Book v-for="book in books" :book="book" :key="book.id" @cloned="cloneBook" @updated="updateBook" @deleted="delBook"></Book>
    </main>
  </div>
</template>

<script>
import Book from './Book.vue'
import { deepCopyJSON } from '../utils/manipuleteObj'
const storage = require('electron-json-storage')
const templateBook = {
  id: null,
  tag: 1,
  title: '',
  problems: []
}
export default {
  name: 'Shelf',
  components: { Book },
  data () {
    return {
      books: []
    }
  },
  methods: {
    getNewId: function () {
      let booksValues = Object.values(this.books)
      if (this.books.length === 0 || !booksValues || booksValues.length === 0) {
        return 1
      }
      return (booksValues.reduce((a, b) => { return a.id > b.id ? a : b })).id + 1
    },
    getNewCardId: function () {
      let booksValues = Object.values(this.books)
      let beginFrom = 0
      if (this.books.length === 0 || !booksValues || booksValues.length === 0) {
        beginFrom = 1
      } else {
        let maxBook = booksValues.reduce((a, b) => { return this.getMaxCardIdInBook(a) > this.getMaxCardIdInBook(b) ? a : b })
        beginFrom = maxBook ? this.getMaxCardIdInBook(maxBook) + 1 : 1
      }
      return beginFrom
    },
    getMaxCardIdInBook: function (book) {
      let maxCard = book.problems.reduce((a, b) => {
        return a.id > b.id ? a : b
      })
      return maxCard ? maxCard.id : 0
    },
    renumberingCards: function (cardList) {
      let beginFrom = this.getNewCardId()
      for (let index = 0; index < cardList.length; index++) {
        cardList[index].id = beginFrom++
      }
      return cardList
    },
    getAllBook: function () {
      storage.getAll((err, books) => {
        if (err) throw err
        this.books = books
      })
    },
    setStorage: function (id, data) {
      storage.set(`book${id}`, data, err => {
        if (err) throw err
      })
    },
    createBook: function (clone) {
      // generate from template
      const newBook = clone.id ? clone : {...deepCopyJSON(templateBook)}
      newBook.id = this.getNewId()
      this.setStorage(newBook.id, newBook)
      // add book to books(Vue's data)
      // parse books to Array
      let added = Object.values(this.books)
      added.push(newBook)
      // parse books(Array) to books(Object)
      const reduced = added.reduce((val, data) => { return [ ...val, data ] }, {})
      this.books = reduced
    },
    updateBook: function (book) {
      this.setStorage(book.id, book)
      let updatedBook = Object.values(this.books).filter(a => { return a.id === book.id })
      updatedBook[0] = {...book}
    },
    delBook: function (bookId) {
      storage.remove(`book${bookId}`, err => {
        if (err) throw err
        this.books = Object.values(this.books).filter(b => b.id !== bookId)
      })
    },
    cloneBook: function (book) {
      const cloneTo = {...deepCopyJSON(book)}
      if (cloneTo.problems && cloneTo.problems.length > 0) {
        cloneTo.problems = this.renumberingCards(cloneTo.problems)
      }
      this.createBook(cloneTo)
    },
    clearShelf: function () {
      storage.clear(err => {
        if (err) throw err
        this.books = []
      })
    }
  },
  mounted: function () {
    this.getAllBook()
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
}

#wrapper {
  background: radial-gradient(
    ellipse at top left,
    rgba(255, 255, 255, 1) 40%,
    rgba(229, 229, 229, 0.9) 100%
  );
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "side main";
}

aside {
  grid-area: side;
  padding: 30px 0px;
  text-align: center;
  background-color: #e0ffff;
}

main {
  grid-area: main;
  background-color: #e0ffff;
  display: flex;
  flex-wrap: wrap;
}

.btn-add-book {
  display: inline-block;
  text-decoration: none;
  color: #668ad8;
  width: 120px;
  height: 120px;
  font-size: xx-large;
  line-height: 120px;
  border-radius: 50%;
  border: solid 2px #668ad8;
  text-align: center;
  overflow: hidden;
  font-weight: bold;
  transition: 0.4s;
}

.btn-add-book:hover {
  background: #b3e1ff;
}
</style>
