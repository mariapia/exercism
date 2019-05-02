const accumulate = (list, operation) => {
  const square = (list) => {
    const squaredList = list.map(num => num * num)
    return squaredList
  }

  const increment = (list) => {
    return list.map(num => num++)
  }

  const operations = {
    'square': square(list),
    'increment': increment(list)
  }

}

module.exports = { accumulate }
