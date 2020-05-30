<template>
  <div class="card">
      <button class="btnCardDelete" @click="delCard"><i class="far fa-trash-alt "></i></button>
      <div class="cardText">{{card.text}}</div>
      <div class="cardAnswer">{{card.answer}}</div>
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
  methods: {
    correctRate: function () {
      return Math.round(this.card.stats.OK / (this.card.stats.OK + this.card.stats.NG) * 100)
    },
    delCard: function () {
      this.$emit('deleted', this.card.id)
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

</style>