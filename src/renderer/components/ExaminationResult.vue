<template>
  <div class="divExamination">
    <header>
      <router-link to="/">戻る</router-link>
      <div>
        <h1 class="title">{{book.title}}：回答結果</h1>
      </div>
    </header>
    <main>
      <div class="divResultGraph">
        <div class="divCurrentResult">
          今回の結果
          <book-statistics style="width:40vw;" :problems="book.problems"></book-statistics>
        </div>
        <div class="divTotalResult">
          今までの合計
          <book-statistics style="width:40vw;" :problems="book.problems"></book-statistics>
        </div>
      </div>
      <div class="cardList">
        <div class="divCard" v-for="(problem, index) in book.problems" :key="problem.id">
          <i v-if="isCorrect(index)" class="success far fa-check-circle"></i>
          <i v-else class="wrong fas fa-times"></i>
          <span class="cardText">{{problem.text}}</span><span class="cardAnswer">{{problem.answer}}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import BookStatistics from './Book/Statistics'
export default {
  name: 'examResult',
  components: {
    BookStatistics
  },
  props: {
    book: Object,
    result: Array,
    examOrder: Array
  },
  methods: {
    isCorrect: function (cardIndex) {
      for (let index = 0; index < this.examOrder.length; index++) {
        const order = this.examOrder[index]
        if (order === cardIndex) {
          return this.result[index] === 1
        }
      }
      return false
    }
  },
  mounted: {
  }
}
</script>

<style>
.divExamination{
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 10px;
  background-color: #e0ffff;
}
.divResultGraph {
    margin: 0 auto;
    display: flex;
    align-items: center;
    width: 90vw;
    height: 50vh;
    justify-content: space-between;
}
.cardList{
  margin: 0 auto;
  width: 90vw;
  height: 30vh;
  overflow-y: scroll;
}
.divCard > span{
  margin-top: 1em;
  border-bottom:solid 1px aqua;
}
.divCard > i {
  text-align: center;
  vertical-align: bottom;
  padding-bottom: 5px;
  width: 1em;
}
book-statistics{
  width: 40vw;
}
.cardText {
  width: 65%;
  margin-right: 1em;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
.cardAnswer {
  width: 20%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
}
</style>