const findPrime = (num) => {
  if (num === 0) {
    return 'ILLEGAL INPUT'
  }
  let j = 2
  let count = 0
  const primeArray = []
  while (count <= num) {
    if (isPrime(j)) {
      primeArray.push(j)
      if (primeArray.length === num) {
        return j
      } else {
        count++
        j++
      }
    } else {
      j++
    }
  }
}

function isPrime (n) {
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

module.exports = { findPrime }
