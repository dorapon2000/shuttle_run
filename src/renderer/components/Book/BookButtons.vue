<template>
  <div class="divBookButtons">
    <button><i class="fas fa-info-circle"></i></button>
    <button><i class="far fa-copy"></i></button>
    <button><i class="fas fa-backspace"></i></button>
  </div>  
</template>

<script>
export default {
  name: 'bookButtons'
}
</script>

<style>
.divBookButtons {
  box-sizing: inherit;
  padding: 0 1em;
  width: 100%;
  display: flex;
  justify-content:space-between;
}
.divBookButtons > button{
  flex-direction: row;
  text-align: center;
  vertical-align: middle;
  height: 3em;
  width: 3em;
  background-color: whitesmoke;
  border: thistle 1px;
  border-radius: 3em;
}
</style>