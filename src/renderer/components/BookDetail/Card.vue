<template>
  <div class="card">
      <button class="btnCardDelete" @click="delCard"><i class="far fa-trash-alt "></i></button>
      <div class="cardText" @click="this.switchTextEditing" @keydown.enter="updateCard">
        <span v-if="!this.isTextEditing">{{card.text}}</span>
        <input class="editCard" type="text" v-model="newText" v-if="this.isTextEditing" placeholder="問題文" @blur="cancelEditText">
      </div>
      <div class="cardAnswer" @click="this.switchAnswerEditing" @keydown.enter="updateCard">
        <span v-if="!this.isAnswerEditing">{{card.answer}}</span>
        <input class="editCard" type="text" v-model="newAnswer" v-if="this.isAnswerEditing" placeholder="答え" @blur="cancelEditAnswer">
      </div>
      <div class="cardCorrectAnswer">{{this.correctRate()}} %</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object
    }
  },
  data: function () {
    return {
      isTextEditing: false,
      isAnswerEditing: false,
      newText: this.card.text,
      newAnswer: this.card.answer,
      composing: false
    }
  },
  methods: {
    switchTextEditing: function () {
      this.isTextEditing = true
      this.newText = this.card.text
    },
    switchAnswerEditing: function () {
      this.isAnswerEditing = true
      this.newAnswer = this.card.answer
    },
    cancelEditText: function () {
      this.newText = this.card.text
      this.isTextEditing = false
    },
    cancelEditAnswer: function () {
      this.newAnswer = this.card.answer
      this.isAnswerEditing = false
    },
    correctRate: function () {
      return Math.round(this.card.stats.OK / (this.card.stats.OK + this.card.stats.NG) * 100)
    },
    delCard: function () {
      this.$emit('deleted', this.card.id)
    },
    updateCard: function () {
      if (event.keyCode !== 13) return
      this.card.text = this.newText
      this.card.answer = this.newAnswer
      this.$emit('updated', this.card)
      this.isTextEditing = false
      this.isAnswerEditing = false
      // if (isUpdateAnswer) {
      //   this.$emit('updated', this.card.id, this.card.text, this.newAnswer)
      //   this.isAnswerEditing = false
      // } else {
      //   this.$emit('updated', this.card.id, this.newText, this.card.answer)
      //   this.istextEditing = false
      // }
    }
  }
}
</script>

<style scoped>
.btnCardDelete {
  flex-direction: row;
  text-align: center;
  vertical-align: middle;
  height: 3em;
  width: 3em;
  color: red;
  background-color: transparent;
  border: 0px;
  border-radius: 3em;
}
.cardText {
  width: 65%;
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
.cardCorrectAnswer {
  width: 5%;
  display: inline-block;
}

.editCard {
  margin-bottom: 10px;
  padding: 5px 15px;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  width: 95%;
}
</style>