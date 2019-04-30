import test from 'ava'
import { translate } from './index'

test('should return zero', t => {
  t.is(translate(0), 'zero')
})
