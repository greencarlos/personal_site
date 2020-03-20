
const getMostLikely = (obj, i=0, max=-Infinity, name=null) => {
  const entries = Object.entries(obj)
  if (i === entries.length) return name  
  const [key, value] = entries[i]
  if (value > max) {
    name = key
    max = value
  }
  return getMostLikely(obj, i+1, max, name)
}

const result = getMostLikely({})
// result is null

const result2 = getMostLikely({
  meat: 0.987,
  veggie: 0.187,
  store: 0.287
})
// result2 is 'meat'

const result3 = getMostLikely({
  meat: 0.287,
  veggie: 0.187,
  store: 0.987
})
// result3 is 'store'

console.log(result, null)
console.log(result2, 'meat')
console.log(result3, 'store')
