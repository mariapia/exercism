import test from 'ava'
import { search } from './index'

test('search the key 5 in an empty array', t => {
  const newarray = []
  t.is(search(newarray, newarray.length, 5), false)
})

test('search the key 4 in a sorted array', t => {
  const newarray = [2, 4, 5, 6, 7]
  t.is(search(newarray, newarray.length, 4), true)
})

test('search the key 7 in a not sorted array', t => {
  const newarray = [3, 6, 5]
  t.is(search(newarray, newarray.length, 7), 'Not sorted array')
})

test('search the key 3 in a sorted array', t => {
  const newarray = [3, 5, 6]
  t.is(search(newarray, newarray.length, 3), true)
})

test('search the item 7 in a sorted array', t => {
  const newarray = [3, 5, 6]
  t.is(search(newarray, newarray.length, 7), false)
})

test('search the item 8 in a sorted array', t => {
  const newarray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  t.is(search(newarray, newarray.length, 8), true)
})
