const allFuns = {}

const sumAll = (arr, i=0, sum=0) => {
  if (arr.length < 2) return sum
  if (i === arr.length) return sum
  sum += arr[i]
  return sumAll(arr, i+1, sum)
}

const findLargest = (arr, i=0, largest= -Infinity) => {
  if (i === arr.length) return largest
  if (arr.length < 1) return largest
  if (arr[i] > largest) {largest = arr[i]}
  return findLargest(arr, i+1, largest)
}

allFuns.sumAll = sumAll
allFuns.findLargest = findLargest

module.exports = allFuns
