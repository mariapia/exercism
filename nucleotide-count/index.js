const counter = (pattern) => {
  const nucleotides = ['A', 'C', 'G', 'T']
  let occurrences = []

  for (let i = 0; i < nucleotides.length; i++) {
    occurrences[i] = ((pattern.match(new RegExp(nucleotides[i], 'g')) || []).length).toString()
  }
  return occurrences.join(' ')
}

module.exports = { counter }
