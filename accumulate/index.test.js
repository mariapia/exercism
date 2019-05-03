import test from 'ava'
import { accumulate } from './index'

test('should square the numbers of the list', t => {
  const list = [2]
  const squared = [4]
  t.deepEqual(accumulate(list, 'square'), squared)
})

test('should increment the numbers of the list', t => {
  const list = [4]
  const incremented = [5]
  t.deepEqual(accumulate(list, 'increment'), incremented)
})

test('should return the reversed string of the list', t => {
  const list = ['hello', 'how', 'are', 'you', '?']
  const reversed = ['olleh', 'woh', 'era', 'uoy', '?']
  t.deepEqual(accumulate(list, 'reverse'), reversed)
})
