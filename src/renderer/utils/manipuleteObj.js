/***
 * JSONをディープコピーする
 * @param {Object} object - コピーされるオブジェクト
 * @return {Object} コピーしたオブジェクト（↑とは別インスタンス）
 */
export function deepCopyJSON (object) {
  return JSON.parse(JSON.stringify(object))
}

/***
 * 配列の中身をランダムにシャッフルする
 * 問題出題時の出力順番決定に利用
 * @param {Object[]} array - 配列
 * @return {Object[]} シャッフル後の配列
 */
export function shuffleArray (array) {
  for (var i = array.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1))
    var tmp = array[i]
    array[i] = array[r]
    array[r] = tmp
  }
  return array
}
