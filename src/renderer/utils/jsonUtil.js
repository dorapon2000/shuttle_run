export default class JsonUtil {
  constructor () {
    this.storage = require('electron-json-storage')
  }

  updateStorage (book) {
    this.storage.set(`book${book.id}`, book, err => {
      if (err) throw err
    })
  }

  _getAllBooks (callback) {
    this.storage.getAll((err, books) => {
      if (err) throw err
      callback(books)
    })
  }

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

  _getMaxCardIdInBook (book) {
    if (book.problems.length === 0) return 0

    let maxCard = book.problems.reduce((a, b) => {
      return a.id > b.id ? a : b
    })
    return maxCard ? maxCard.id : 0
  }
}
