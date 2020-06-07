<template>
  <div class="divBookButtons">
    <button @click="request(0)" class="tooltip"><i class="fas fa-info-circle"></i><span class="tooltiptext">問題の詳細ページ</span></button>
    <button @click="request(1)" class="tooltip"><i class="far fa-copy"></i><span class="tooltiptext">問題のコピー</span></button>
    <button @click="request(2)" class="tooltip"><i class="fas fa-backspace"></i><span class="tooltiptext">問題の削除</span></button>
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
@import url("../../assets/css/common.css");
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
.divBookButtons > button > .tooltiptext{
  width: 13em;
  left: -5em;
}
</style>