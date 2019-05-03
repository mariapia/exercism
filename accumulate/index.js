const accumulate = (list, operation) => {
  const operations = {
    'square': square(list),
    'increment': increment(list),
    'reverse': reverse(list)
  }

  return operations[operation]
}

function square (list) {
  return list.map(num => num * num)
}

function increment (list) {
  return list.map(num => num + 1)
}

function reverse (list) {
  return list.map(word => word.toString().split('').reverse().join(''))
}

module.exports = { accumulate }
