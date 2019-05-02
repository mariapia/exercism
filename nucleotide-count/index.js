const counter = (pattern) => {
  const nucleotides = ['A', 'C', 'G', 'T']

  return nucleotides
    .map(n => (pattern.match(new RegExp(n, 'g')) || []).length.toString())
    .join(' ')
}

module.exports = { counter }
