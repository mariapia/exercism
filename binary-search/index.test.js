import test from 'ava'
import { BinarySearch } from './index'

test.skip('should return not found', t => {
  const newarray = new BinarySearch()
  t.is(newarray.search(2), 'Not Found')
})
