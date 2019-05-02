const findfactors = (number) => {
  const half = Math.floor(number)
  let factors = []
  for (let i = 0; i <= half; i++) {
    if (number % i === 0) {
      factors.push(i)
    }
  }

  console.log(factors)

  var raindrops = factors.reduce((acc, factor) => {
    if (factor === 3) {
      acc = acc.concat('Pling')
    } else if (factor === 5) {
      acc = acc.concat('Plang')
    } else if (factor === 7) {
      acc = acc.concat('Plong')
    }
    return acc
  }, '')

  if (raindrops === '') {
    raindrops = number.toString()
  }

  return raindrops
}

module.exports = { findfactors }
