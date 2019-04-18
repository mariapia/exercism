class Tree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }

  insert (valueToInsert, currentTree = this) {
    if (currentTree.value < valueToInsert) {
      if (!currentTree.right) {
        currentTree.right = new Tree(valueToInsert)
        return currentTree.right
      }

      return currentTree.insert(valueToInsert, currentTree.right)
    }

    if (currentTree.value > valueToInsert) {
      if (!currentTree.left) {
        currentTree.left = new Tree(valueToInsert)
        return currentTree.left
      }
      return currentTree.insert(valueToInsert, currentTree.left)
    }
  }
}

module.exports = { Tree }
