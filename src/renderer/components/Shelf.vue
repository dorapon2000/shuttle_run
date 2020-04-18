<template>
  <div id="wrapper">
    <aside>
      <a href="#" class="btn-add-book">+</a>
    </aside>
    <main>
      <Book v-for="book in books" :book="book" :key="book.id"></Book>
    </main>
  </div>
</template>

<script>
import Book from './Book.vue'

export default {
  name: 'Shelf',
  components: { Book },
  data () {
    return {
      books: [
        {
          id: 1,
          tag: 1,
          title: 'ナポレオン',
          problems: [
            {
              text: 'ナポレオンの出身国は？',
              answer: 'フランス',
              stats: { OK: 1, NG: 2 }
            }
          ]
        },
        {
          id: 2,
          tag: 1,
          title: 'フランス革命',
          problems: [
            {
              text: 'フランス革命の発端は何監獄への襲撃',
              answer: 'バスティーユ',
              stats: { OK: 0, NG: 0 }
            }
          ]
        }
      ]
    }
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
