import test from 'ava'
import { findAcronym } from './index'

test('shoud return PDF', t => {
  t.deepEqual(findAcronym('Portable Document Format'), 'PDF')
})
