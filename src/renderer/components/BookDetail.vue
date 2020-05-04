<template>
  <div class="divBookDetail">
    <router-link to="/">戻る</router-link>
    <h1>{{book.title}}</h1>
    <Card v-for="card in book.problems" :card="card" :key="card.id"></Card>
  </div>
</template>

<script>
import Card from './BookDetail/Card.vue'

export default {
  name: 'BookDetail',
  components: { Card },
  props: ['book']
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
