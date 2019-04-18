import test from 'ava'
import { allergiescount } from './index'

test('Eggs and peanuts', t => {
  let expected = 3
  t.deepEqual(allergiescount(['eGgs', 'Peanuts']), expected)
})

test('Tomatoes, Strawberries, eggs, shellfish', t => {
  let expected = allergiescount(['eggs', 'TOMAtoes', 'strawberries', 'shellfish'])
  t.deepEqual(29, expected)
})

test('Tomatoes', t => {
  const allergicTo = ['tomatoes']
  const expected = allergiescount(allergicTo)
  t.deepEqual(16, expected)
})
