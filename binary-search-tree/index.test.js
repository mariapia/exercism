import test from 'ava'
import { Tree } from './index'

test('create binary tree', t => {
  const tree = new Tree(4)
  t.is(tree.value, 4)
  t.is(tree.left, null)
  t.is(tree.right, null)
})

test('insert a value greater than the root', t => {
  const tree = new Tree(4)
  tree.insert(5)
  t.is(tree.right.value, 5)
})

test('insert a value less than the root', t => {
  const tree = new Tree(4)
  tree.insert(2)
  t.is(tree.left.value, 2)
})

test('create a tree with root 4, insert 2, then 3', t => {
  const tree = new Tree(4)
  tree.insert(4)
  tree.insert(2)
  tree.insert(3)
  t.is(tree.value, 4)
  t.is(tree.left.value, 2)
  t.is(tree.left.right.value, 3)
})

test('create a tree with root 4, insert 2, 6, 3, 1, 5, 7', t => {
  const tree = new Tree(4)
  tree.insert(2)
  tree.insert(6)
  tree.insert(3)
  tree.insert(1)
  tree.insert(5)
  tree.insert(7)

  t.is(tree.value, 4)
  t.is(tree.left.value, 2)
  t.is(tree.left.left.value, 1)
  t.is(tree.left.right.value, 3)
  t.is(tree.right.value, 6)
  t.is(tree.right.left.value, 5)
  t.is(tree.right.right.value, 7)
})
