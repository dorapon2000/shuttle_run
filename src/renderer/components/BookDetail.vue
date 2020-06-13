<template>
  <div class="divBookDetail">
    <router-link to="/">戻る</router-link>
    <div>
      <h1 class="title">{{book.title}}</h1>
      <router-link :to="{name:'exam', params:{book}}" class="btnGameStart">問題を解く</router-link>
    </div>
    <div class="stats-belt">
      <span class="tryCount">回数：{{book.tryCount}}</span>
      <span class="correctRate">正答率：{{sumOfOkAvg}} %</span>
      <div class="tooltip">
        <a href="#" class="statsReset tooltip" @click.prevent="resetStats"><i class="fas fa-undo fa-xs"></i></a>
        <span class="tooltiptext">統計データの初期化</span>
      </div>
    </div>
    <div class="newProblem">
      <input class="newProblemTextForm" type="text" v-model="newProblemText" placeholder="新しい問題文を書いてエンター" @keydown.enter="addCard">
      <input class="newProblemAnswerForm" type="text" v-model="newProblemAnswer" placeholder="その答え" @keydown.enter="addCard">
    </div>
    <Card v-for="card in book.problems" :card="card" :key="card.id" @deleted="delCard" @updated="updateCard"></Card>
  </div>
</template>

<script>
import Card from './BookDetail/Card.vue'
import { SumOfOkAvg } from '../utils/stats.js'
import JsonUtil from '../utils/jsonUtil.js'

export default {
  name: 'BookDetail',
  components: { Card },
  props: ['book'],
  data () {
    return {
      newProblemText: '',
      newProblemAnswer: ''
    }
  },
  methods: {
    /**
     * カードの追加
     * カード名がブランクの場合、実行しない
     * ストレージに反映
    */
    addCard: function () {
      if (this.newProblemText === '' || this.newProblemAnswer === '') return
      const json = new JsonUtil()
      const newProblemText = this.newProblemText
      const newProblemAnswer = this.newProblemAnswer
      json.getNewCardId((newCardId) => {
        const newCard = {
          id: newCardId,
          text: newProblemText,
          answer: newProblemAnswer,
          stats: { OK: 0, NG: 0 }
        }
        this.book.problems.push(newCard)
        json.updateStorage(this.book)
      })
      this.newProblemText = ''
      this.newProblemAnswer = ''
    },
    /**
     * カードの削除
     * ストレージに削除結果を反映
     */
    delCard: function (cardId) {
      this.book.problems = this.book.problems.filter(c => c.id !== cardId)
      const json = new JsonUtil()
      json.updateStorage(this.book)
    },
    /**
     * カードの更新
     * ストレージに更新結果を反映
     */
    updateCard: function (card) {
      const json = new JsonUtil()
      json.updateStorage(this.book)
    },
    /**
     * テスト結果をリセット
     * 全てのカードの成績をリセットし、ストレージに反映
     */
    resetStats: function () {
      this.book.tryCount = 0
      for (let i = 0; i < this.book.problems.length; i++) {
        this.book.problems[i].stats.OK = 0
        this.book.problems[i].stats.NG = 0
      }

      const json = new JsonUtil()
      json.updateStorage(this.book)
    }
  },
  computed: {
    /**
     * 正解率を取得
     */
    sumOfOkAvg: function () {
      return SumOfOkAvg(this.book.problems)
    }
  }
}
</script>

<style scoped>
@import url("../assets/css/common.css");
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
.statsReset {
  display: inline-block;
  color: deeppink;
  background-color: white;
  text-align: center;
  vertical-align: middle;
  margin-left: 5px;
  padding: 0 4px;
  border-style: solid;
  border-width : 1px 1px 1px 1px;
  border-radius: 4px;
  border-color: lightgray;
}
</style>
