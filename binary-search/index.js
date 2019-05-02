const search = (array, size, key) => {
  if (!isSorted(array, array.length)) return 'Not sorted array'

  if (key === array[Math.floor(size / 2)]) {
    return true
  }

  if (key < array[Math.floor(size / 2)]) {
    return search(array.slice(0, Math.floor(size / 2)), Math.floor(size / 2), key)
  } else if (key > array[Math.floor(size / 2)]) {
    return search(array.slice(Math.floor(size / 2), size), Math.floor(size / 2), key)
  }

  return false
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

module.exports = { search }
