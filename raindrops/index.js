const findfactors = (number) => {
  const half = Math.floor(number)
  let factors = []
  for (let i = 0; i < half; i++) {
    if (number % i === 0) {
      factors.push(i)
    }
  }

  console.log(factors)
  var raindrops = ''

  for (let i = 0; i < factors.length; i++) {
    if (factors[i] === 3) {
      raindrops = raindrops.concat('Pling')
    } else if (factors[i] === 5) {
      raindrops = raindrops.concat('Plang')
    } else if (factors[i] === 7) {
      raindrops = raindrops.concat('Plong')
    }
  }
  if (raindrops === '') {
    raindrops = raindrops.concat(number)
  }

  return raindrops
}

module.exports = { findfactors }
