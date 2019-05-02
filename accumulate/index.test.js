import test from 'ava'
import { accumulate } from './index'

test('should square the numbers of the list', t => {
  const list = [2]
  t.is(accumulate(list, 'square'), [4])
})
