const findAcronym = (pattern) => {
  let words = pattern.split(' ')
  return words
    .map(word => word[0])
    .reduce((acc, character) => acc + character, '')
}

module.exports = { findAcronym }
