import test from 'ava'
import { isPangram } from './index'

test('check if empty string is pangram', t => {
  t.is(isPangram(''), false)
})

test('check if \'The quick brown fox jumps over the lazy dog.\' is a pangram', t => {
  t.is(isPangram('The quick brown fox jumps over the lazy dog.'), true)
})

test('check if the alphabet is pangram', t => {
  t.is(isPangram('abcdefghijklmnopqrstuvwxyz'), true)
})

test('check if my name is pangram', t => {
  t.is(isPangram('Maria Pia'), false)
})

test('check if uppercase alphabet is pangram', t => {
  t.is(isPangram('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), true)
})

test('check if upper case and lowercase alphabet is pangram', t => {
  t.is(isPangram('QwErTyUiOpAsDfGhJkLzXcVbNm'), true)
})
