<template>
  <div class="divBookDetail">
    <router-link to="/">戻る</router-link>
    <h1>{{books[$route.params.id].title}}</h1>
    <Card v-for="card in books[$route.params.id].problems" :card="card" :key="card.id"></Card>
  </div>
</template>

<script>
import Card from './BookDetail/Card.vue'

export default {
  name: 'BookDetail',
  components: { Card },
  data () {
    return {
      books: [
        {
          id: 0,
          tag: 1,
          title: 'ナポレオン',
          problems: [
            {
              id: 0,
              text: 'ナポレオンの出身国は？',
              answer: 'フランス',
              stats: { OK: 1, NG: 2 }
            },
            {
              id: 1,
              text: 'ナポレオンが死んだ島は？',
              answer: 'セントヘレナ島',
              stats: { OK: 1, NG: 2 }
            }
          ]
        },
        {
          id: 1,
          tag: 1,
          title: 'フランス革命',
          problems: [
            {
              id: 2,
              text: 'フランス革命の発端は何監獄への襲撃？',
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

.divBookDetail {
  height: 100vh;
  width: 100vw;
  background-color: #e0ffff;
}
</style>
