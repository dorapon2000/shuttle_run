<template>
  <div class="divBookDetail">
    <router-link to="/">戻る</router-link>
    <div>
      <h1 class="title">{{book.title}}</h1>
      <router-link to="/" class="btnGameStart">問題を解く</router-link>
    </div>
    <div class="stats-belt">
      <span class="tryCount">回数：{{book.tryCount}}</span>
      <span class="correctRate">正答率：{{sumOfOkAvg}}</span>
    </div>
    <div class="newProblem">
      <input class="newProblemTextForm" type="text" name="newProblemText" placeholder="新しい問題文を書いてエンター">
      <input class="newProblemAnswerForm" type="text" name="newProblemAnswer" placeholder="その答え">
    </div>
    <Card v-for="card in book.problems" :card="card" :key="card.id"></Card>
  </div>
</template>

<script>
import Card from './BookDetail/Card.vue'
import { SumOfOkAvg } from '../utils/stats.js'

export default {
  name: 'BookDetail',
  components: { Card },
  props: ['book'],
  data () {
    return {
      sumOfOkAvg: SumOfOkAvg(this.book.problems)
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

.divBookDetail {
  height: 100vh;
  width: 100vw;
  padding: 60px;
  background-color: #e0ffff;
}
.title {
  display: inline-block;
  padding: 20px;
  width: 80%;
  vertical-align: middle;
}
.btnGameStart {
  display: inline-block;
  text-align: center;
  width: 19%;
  padding: 0.8em;
  text-decoration: none;
  color: rgb(0, 11, 114);
  background: rgb(205, 231, 252);
  border:1px solid rgb(0, 11, 114);
}
.btnGameStart:hover {
  background: rgb(0, 11, 114);
  color: rgb(205, 231, 252);
  cursor: pointer;
  text-decoration: none;
}
.stats-belt {
  padding: 0px 20px 20px 10px;
}
.tryCount {
  padding-left: 20px;
}
.correctRate {
  padding-left: 20px;
}
.newProblem > input {
  margin-bottom: 10px;
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
}
.newProblemTextForm {
  margin-left: 20px;
  width: 65%;
}
.newProblemAnswerForm {
  margin-left: 10px;
  width: 25%;
}

</style>
