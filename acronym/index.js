const findAcronym = (pattern) => {
  let words = pattern.split(' ')
  let acronym = ''

  for (let i = 0; i < words.length; i++) {
    acronym = acronym.concat(words[i].charAt(0))
  }
  return acronym
}

module.exports = { findAcronym }