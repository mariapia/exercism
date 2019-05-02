const translate = (number) => {
  if (number < 0 || number > 999999) {
    return 'Invalid number. Only numbers between 0 and 999999 are allowed.'
  }

  if (number < 100) {
    return twoDigits(number)
  }

  if (number < 1000) {
    return threeDigits(number)
  }

  if (number < 1000000) {
    if (number % 1000 === 0) {
      return translate(Math.floor(number / 1000)) + ' thousand'
    } else {
      return translate(Math.floor(number / 1000)) + ' thousand ' + threeDigits(number % 1000)
    }
  }
}

const singledigit = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
}

const tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

function twoDigits (num) {
  if (num < 20) {
    return singledigit[num]
  } else {
    return tens[Math.floor(num / 10)] + '-' + singledigit[num % 10]
  }
}

function threeDigits (num) {
  if (num % 100 === 0) {
    return translate(Math.floor(num / 100)) + ' hundred'
  } else {
    return singledigit[Math.floor(num / 100)] + ' hundred ' + twoDigits(num % 100)
  }
}

module.exports = { translate }
