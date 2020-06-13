<template>
  <div class="divBookTitle" @click="this.changeMode" @keydown.enter="rename">
    <span v-if="!this.isUpdate">{{getTitle}}</span>
    <input class="inputUpdatedName" type="text" v-model="newName" v-if="this.isUpdate" placeholder="名前を入力してください" @blur="cancelRename">
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
    /**
     * タイトルの編集状態の変更
     * - isUpdate
     *     - 更新中かどうか
     */
    changeMode: function () {
      this.isUpdate = true
      this.newName = this.title
    },
    /**
     * タイトルの変更
     */
    rename: function (event) {
      if (event.keyCode !== 13) return
      this.$emit('renamed', this.newName)
      this.isUpdate = false
    },
    /**
     * タイトル変更の中止
     */
    cancelRename: function () {
      this.newName = ''
      this.isUpdate = false
    }
  },
  computed: {
    /**
     * タイトル取得処理
     * - タイトルが無い場合、No Nameを返却
     */

    getTitle: function () {
      return this.title ? this.title : 'No Name'
    }
  },
  /**
   * 初期化処理
   * - 編集中タイトル名の設定
   */
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