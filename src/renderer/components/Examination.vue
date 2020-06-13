<template>
  <div class="divExamination">
    <header>
      <link-to-top></link-to-top>
      <div>
        <h1 class="title">{{book.title}}</h1>
        <count-timer ref="examTimer" :limitOfTime="limitOfTime"></count-timer>
      </div>
      <h2>{{currentIndex + 1}} / {{examOrder.length}}</h2>
      <p class='history'>
        <span v-for='(value, index) in result' :key='index'>
            <i class="success far fa-check-circle" v-show="value===1"></i>
            <i class="wrong fas fa-times" v-show="value===-1"></i>
            <i class="far fa-question-circle" v-show="!value"></i>
        </span>
      </p>
    </header>
    <div class="question">
      {{this.nextProblem.text}}
    </div>
    <div class="answer">
      <p>{{currentAnswer}}</p>
      <button class="buttonAnswer" :disabled="!isAnswering" @click="showAnswer">答えを見る</button>
    </div>
    <div class="result">
      <div class="checkAnswer success" @click="submitResult(true)"><i class="far fa-check-circle"></i></div>or
      <div class="checkAnswer wrong" @click="submitResult(false)"><i class="fas fa-times"></i></div>
    </div>
  </div>
</template>

<script>
import { shuffleArray } from '../utils/manipuleteObj'
import CountTimer from './Timer/Timer'
import LinkToTop from './Link/LinkToIndex.vue'
const timeoutMilliSeconds = 500
export default {
  name: 'examination',
  components: {CountTimer, LinkToTop},
  data: function () {
    return {
      currentAnswer: '',
      isAnswering: true,
      currentIndex: 0,
      limitOfTime: 20,
      examOrder: [],
      result: [],
      evetManager: null
    }
  },
  props: {
    book: Object
  },
  computed: {
    nextProblem: function () {
      return this.book.problems[this.examOrder[this.currentIndex]]
    },
    isCorrect: function () {
      return this.result[this.currentIndex]
    }
  },
  methods: {
    showAnswer: function () {
      this.currentAnswer = this.book.problems[this.examOrder[this.currentIndex]].answer
    },
    submitResult: function (result) {
      if (this.evetManager) {
        return
      }

      this.result[this.currentIndex] = result ? 1 : -1
      this.isAnswering = false
      this.showAnswer()

      if (this.currentIndex < this.result.length - 1) {
        this.evetManager = setTimeout(() => {
          this.goNext()
          clearTimeout(this.evetManager)
          this.evetManager = null
        }, timeoutMilliSeconds)
      } else {
        this.evetManager = setTimeout(() => {
          this.showTotal()
          clearTimeout(this.evetManager)
          this.evetManager = null
        }, timeoutMilliSeconds)
      }
    },
    goNext: function () {
      this.currentAnswer = ''
      this.currentIndex++
      this.isAnswering = true
      this.timer.resetCount()
      this.timer.startCount()
    },
    showTotal: function () {
      this.$router.push({
        name: 'examResult',
        params: {
          book: this.book,
          result: this.result,
          examOrder: this.examOrder
        }
      })
    }
  },
  created: function () {
    for (let index = 0; index < this.book.problems.length; index++) {
      this.examOrder.push(index)
    }
    this.examOrder = shuffleArray(this.examOrder)
    this.result = new Array(this.book.problems.length)
  },
  mounted: function () {
    this.$nextTick(function () {
      this.timer = this.$refs.examTimer
      this.timer.startCount()
    })
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
.title{
  display: inline-block;
  width: 50vw;
}
.header{
  height: 30vh;
}
.question{
  height: 50vh;
  width: 90vw;
  padding: 1em;
  font-size: 2em;
  background-color: azure;
}
.answer{
  display: table-cell;
  margin-top: 1em;
  height: 10vh;
  width: 90vw;
  text-align: center;
  vertical-align: middle;
  background-color: lightskyblue;
}
.answer > p{
  text-decoration: underline rgba(1, 1, 1, 0.5);
  display: inline-block;
  width: 20em;
  font-size: 2em;
}
.buttonAnswer{
  display: inline;
  padding: 10px;
  border-radius: 0.3em;
  font-size: 1.5em;
  color: whitesmoke;
  background-color: cornflowerblue;
}
.result{
  width: 100%;
  height: 20vh;
  top:0;
  left: 0;
  text-align: center;
  font-size: 2em;
}
.checkAnswer{
  display: inline-block;
  margin: 0 1em;
  font-size: 3em;
}
.checkAnswer:hover{
  cursor: pointer;
}
.success{
  color: red;
}
.wrong{
  color: blue;
}
</style>