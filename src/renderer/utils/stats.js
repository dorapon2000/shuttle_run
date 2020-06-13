/***
 * Book中のCardのOK/NGの平均を返す
 * @param {Object[]} problems - Bookにある問題のリスト
 * @param {boolean} isRequestForOk - OKの数を数えるときはTrue
 * @return {number} - カードのOK/NGの数の平均
 */
export function SumOfAvg (problems, isRequestForOk) {
  let result = 0.0
  if (problems.length === 0) {
    return
  }
  for (let index = 0; index < problems.length; index++) {
    const problem = problems[index]
    result += isRequestForOk ? OkAvg(problem) : NgAvg(problem)
  }
  return Math.round(result / problems.length)
}

/***
 * Book中のCardのOKの平均を返す
 * @param {Object[]} problems - Bookにある問題のリスト
 * @return {number} - カードのOKの数の平均
 */
export function SumOfOkAvg (problems) {
  return SumOfAvg(problems, true)
}

/***
 * そのCardの正答率(%)を計算して返す
 * @param {Object} problem - カード
 * @return {number} - カードの正答率(%)
 */
export function OkAvg (problem) {
  if (problem.stats.OK + problem.stats.NG === 0) {
    return 0
  }

  return Math.ceil(problem.stats.OK / (problem.stats.OK + problem.stats.NG) * 100, -1)
}

/***
 * Book中のCardのNGの平均を返す
 * @param {Object[]} problems - Bookにある問題のリスト
 * @return {number} - カードのNGの数の平均
 */
export function SumOfNgAvg (problems) {
  return SumOfAvg(problems, false)
}

/***
 * そのCardの不正解率(%)を計算して返す
 * @param {Object} problem - カード
 * @return {number} - カードの不正解率(%)
 */
export function NgAvg (problem) {
  if (problem.stats.OK + problem.stats.NG === 0) {
    return 0
  }

  return Math.ceil(problem.stats.NG / (problem.stats.OK + problem.stats.NG) * 100, -1)
}
