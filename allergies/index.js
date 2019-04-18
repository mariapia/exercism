const allergiescount = (all) => {
  const allergies = {
    'eggs': 1,
    'peanuts': 2,
    'shellfish': 4,
    'strawberries': 8,
    'tomatoes': 16,
    'chocolate': 32,
    'pollen': 64,
    'cats': 128
  }
  let score = 0
  for (let i = 0; i < all.length; i++) {
    score = score + allergies[all[i].toLowerCase()]
  }
  return parseInt(score)
}

module.exports = { allergiescount }
// console.log(allergiescount(['eggs','tomatoes','strawberries','shellfish']))
