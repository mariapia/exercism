import test from 'ava'
import { allergiescount } from './index'

test('Should return the score for eggs and peanuts allergies', t => {
  const allergicTo = ['eGgs', 'Peanuts']
  t.deepEqual(allergiescount(allergicTo), 3)
})

test('Should return the score for Tomatoes, Strawberries, eggs, shellfish', t => {
  const allergicTo = ['eggs', 'TOMAtoes', 'strawberries', 'shellfish']
  t.deepEqual(allergiescount(allergicTo), 29)
})

test('Should return the score for Tomatoes', t => {
  const allergicTo = ['tomatoes']
  t.deepEqual(allergiescount(allergicTo), 16)
})

test('Should return the score with no allergies', t => {
  const allergicTo = []
  t.is(allergiescount(allergicTo), 0)
})

test('Test with other allergies', t => {
  const allergicTo = ['dogs']
  t.is(allergiescount(allergicTo), 0)
})

test('Test with an existing allergy and a not existing allergy', t => {
  const allergicTo = ['dogs', 'pollen']
  t.is(allergiescount(allergicTo), 64)
})
