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
export function SumOfOkAvg (problems) {
  return SumOfAvg(problems, true)
}

export function OkAvg (problem) {
  if (!problem.stats.OK || !problem.stats.NG || problem.stats.OK + problem.stats.NG === 0) {
    return 0
  }

  return Math.ceil(problem.stats.OK / (problem.stats.OK + problem.stats.NG) * 100, -1)
}

export function SumOfNgAvg (problems) {
  return SumOfAvg(problems, false)
}

export function NgAvg (problem) {
  if (!problem.stats.OK || !problem.stats.NG || problem.stats.OK + problem.stats.NG === 0) {
    return 0
  }

  return Math.ceil(problem.stats.NG / (problem.stats.OK + problem.stats.NG) * 100, -1)
}
