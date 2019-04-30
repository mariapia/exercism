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
  // let score = 0

  return all
    .map(a => allergies[a.toLowerCase()])
    .reduce((acc, sc) => acc + sc, 0)
}

module.exports = { allergiescount }
