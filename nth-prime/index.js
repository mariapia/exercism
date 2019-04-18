const findPrime = (num) => {
  const isPrime = (n) => {
    for (let i = 2; i < Math.floor(n / 2); i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }

  if (num === 0) {
    return 'ILLEGAL INPUT'
  }
  let j = 2
  let count = 0
  while (count <= num) {
    if (isPrime(j)) {
      if (count === num) {
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

module.exports = { findPrime }
