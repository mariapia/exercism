import test from 'ava'
import { translate } from './index'

test('should return zero', t => {
  t.is(translate(0), 'zero')
})

test('should return one', t => {
  t.is(translate(1), 'one')
})

test('should return two', t => {
  t.is(translate(2), 'two')
})

test('should return three', t => {
  t.is(translate(3), 'three')
})

test('should return four', t => {
  t.is(translate(4), 'four')
})
