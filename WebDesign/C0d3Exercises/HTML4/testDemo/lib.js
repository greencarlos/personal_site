const lib = {};

const tokenize = (string, arr = string.split(' ')) => {
  return arr.reduce((acc, curr) => {
    curr = curr.toUpperCase();
    //console.log('current', curr)
    if (curr.length > 2) {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }
    return acc
  }, {});
};

const pushAll = (obj, arr, i = 0) => {
  const entries = Object.entries(obj)
  if (i === entries.length) return obj
  const [key, value] = entries[i]
  if (key) {value.push(arr)}
  return pushAll(obj, arr, i+1)
}

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

lib.tokenize = tokenize;
lib.pushAll = pushAll
lib.getMostLikely = getMostLikely

module.exports = lib
