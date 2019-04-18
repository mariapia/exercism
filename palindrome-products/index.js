const isPalindrome = (num) => {
  return String(num) === String(num.reverse())
}

class Palindromes {
  constructor (min, max) {
    this.min = min
    this.max = max
  }

  generate () {
    const factors = {}
    for (let a = this.min; a <= this.max; a++) {
      for (let b = a; b <= this.max; b++) {
        if (isPalindrome(a * b)) {
          factors[a*b] = (factors[a*b] || []).concat([[a, b]])
        }
      }
    }
}

module.exports = { Palindromes }
