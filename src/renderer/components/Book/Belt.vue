<template>
  <div class="divBookTitle">{{title}}</div>
</template>

<script>
export default {
  name: 'BookBelt',
  props: {
    title: {
      type: String,
      require: false
    }
  }
}
</script>

<style>
.divBookTitle{
    background-color: white;
    margin: 1em auto;
    text-align: center;
    width: 90%;
    border-radius: 0.5em; 
}
</style>