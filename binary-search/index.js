class BinarySearch {
  constructor (sortedArray) {
    this.sortedArray = isSorted(sortedArray) ? sortedArray : undefined
  }
}

const isSorted = (sortedArray, n) => {
  if (n === 1 || n === 0) {
    return true
  }

  if (sortedArray[n - 1] > sortedArray[n]) {
    return false
  }

  return isSorted(sortedArray, n - 1)
}

module.exports = { BinarySearch }
