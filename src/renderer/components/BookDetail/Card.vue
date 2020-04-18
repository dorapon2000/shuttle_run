<template>
  <div class="card">
      <p>{{card.text}}</p>
      <p>{{card.answer}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object
    }
  }
}
</script>

<style>
</style>