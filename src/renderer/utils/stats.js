export function SumOfOkAvg (problems) {
  let result = 0.0
  if (problems.length === 0) {
    return
  }
  for (let index = 0; index < problems.length; index++) {
    const problem = problems[index]
    result += OkAvg(problem)
  }
  return result / problems.length
}

export function OkAvg (problem) {
  return Math.ceil(problem.stats.OK / (problem.stats.OK + problem.stats.NG) * 100, -1)
}
