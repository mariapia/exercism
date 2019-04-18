const word2math = (problem) => {
  let numbers = (problem.match(/\d+/g))
  if (numbers === null) {
    return 'No Math problem'
  }
  numbers = numbers.map(Number)
  let result = numbers[0]

  let operators = ''
  if (numbers.length > 1) {
    operators = problem.match(/(plus|minus|multiplied by|divided by)+/g)
  }

  for (let i = 0; i < operators.length; i++) {
    let op = operators[i]
    switch (op) {
      case 'plus':
        result += numbers[i + 1]
        break
      case 'minus':
        result -= numbers[i + 1]
        break
      case 'multiplied by':
        result *= numbers[i + 1]
        break
      case 'divided by':
        result /= numbers[i + 1]
        break
      default:
        result = numbers
    }
  }
  return 'Evaluates to ' + result
}

module.exports = { word2math }
