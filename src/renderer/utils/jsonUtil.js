export default class JsonUtil {
  constructor () {
    this.storage = require('electron-json-storage')
  }

  /***
   * Bookのストレージを更新
   * @param {Object} book - ストレージを更新したいBook
   */
  updateStorage (book) {
    this.storage.set(`book${book.id}`, book, err => {
      if (err) throw err
    })
  }

  /***
   * 全Bookを取得
   * @param {function} callback - 取得後に実行したいコールバック関数
   */
  _getAllBooks (callback) {
    this.storage.getAll((err, books) => {
      if (err) throw err
      callback(books)
    })
  }

  /***
   * Card新規作成時のIDを決定する
   * @param {function} callback - Card新規作成時に実行したいコールバック関数
   */
  getNewCardId (callback) {
    return this._getAllBooks((books) => {
      let booksValues = Object.values(books)
      let newCardId = 0
      if (books.length === 0 || !booksValues || booksValues.length === 0) {
        newCardId = 1
      } else {
        let maxBook = booksValues.reduce((a, b) => { return this._getMaxCardIdInBook(a) > this._getMaxCardIdInBook(b) ? a : b })
        newCardId = maxBook ? this._getMaxCardIdInBook(maxBook) + 1 : 1
      }
      callback(newCardId)
    })
  }

  /***
   * Bookに含まれるCardの中で最も大きいIDを取得
   * @param {Object} book - Book
   * @return {number} 全CardのIDの最大値
   */
  _getMaxCardIdInBook (book) {
    if (book.problems.length === 0) return 0

    let maxCard = book.problems.reduce((a, b) => {
      return a.id > b.id ? a : b
    })
    return maxCard ? maxCard.id : 0
  }
}
