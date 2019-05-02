const word2math = (problem) => {
  let numbers = (problem.match(/\d+/g))
  if (numbers === null) {
    return 'No Math problem'
  }

  numbers = numbers.map(number => parseInt(number))
  // numbers = numbers.map(Number)
  let operators = []
  if (numbers.length > 1) {
    operators = problem.match(/(plus|minus|multiplied by|divided by)+/g)
  }

  const result = operators.reduce((acc, op, i) => {
    switch (op) {
      case 'plus':
        acc += numbers[i + 1]
        break
      case 'minus':
        acc -= numbers[i + 1]
        break
      case 'multiplied by':
        acc *= numbers[i + 1]
        break
      case 'divided by':
        acc /= numbers[i + 1]
        break
      default:
        break
    }
    return acc
  }, numbers[0])

  return 'Evaluates to ' + result
}

module.exports = { word2math }
