<template>
  <div class="divBookButtons">
    <button @click="request(0)"><i class="fas fa-info-circle"></i></button>
    <button @click="request(1)"><i class="far fa-copy"></i></button>
    <button @click="request(2)"><i class="fas fa-backspace"></i></button>
  </div>  
</template>

<script>
export default {
  name: 'bookButtons',
  props: {
    id: Number
  },
  methods: {
    request: function (requestCode) {
      switch (requestCode) {
        case 0:
          this.$emit('request-information')
          break
        case 1:
          this.$emit('request-clone')
          break
        case 2:
          this.$emit('request-delete')
          break
        default:
          break
      }
    }
  }
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