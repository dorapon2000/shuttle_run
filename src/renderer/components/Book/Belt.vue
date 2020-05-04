<template>
  <div class="divBookTitle" @click="this.changeMode" @keyup.enter="rename()">
    <span v-if="!this.isUpdate">{{getTitle}}</span>
    <input class="inputUpdatedName" type="text" v-model="newName" v-if="this.isUpdate" placeholder="名前を入力してください" @blur="rename()">
  </div>
</template>

<script>
export default {
  name: 'BookBelt',
  props: {
    title: {
      type: String,
      require: false
    }
  },
  data: function () {
    return {
      isUpdate: false,
      newName: ''
    }
  },
  methods: {
    changeMode: function () {
      this.isUpdate = true
    },
    rename: function () {
      this.$emit('renamed', this.newName)
      this.isUpdate = false
    }
  },
  computed: {
    getTitle: function () {
      return this.title ? this.title : 'No Name'
    }
  },
  mounted: function () {
    this.newName = this.title
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
.inputUpdatedName{
    border: none;
    height: 1em;
    font-size: 1em;
    text-align: center;
    text-decoration: underline;
    text-decoration-color: turquoise;
}
</style>