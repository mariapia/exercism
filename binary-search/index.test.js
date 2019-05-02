import test from 'ava'
import { search } from './index'

test('should return false', t => {
  const newarray = []
  t.is(search(newarray, newarray.length, 5), false)
})

test('should return true', t => {
  const newarray = [2, 4, 5, 6, 7]
  t.is(search(newarray, newarray.length, 4), true)
})

test('should return that the array is not sorted', t => {
  const newarray = [3, 6, 5]
  t.is(search(newarray, newarray.length, 4), 'Not sorted array')
})

test('should true', t => {
  const newarray = [3, 5, 6]
  t.is(search(newarray, newarray.length, 3), true)
})

test('item not found', t => {
  const newarray = [3, 5, 6]
  t.is(search(newarray, newarray.length, 7), false)
})

test('find the item 3', t => {
  const newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  t.is(search(newarray, newarray.length, 3), true)
})
