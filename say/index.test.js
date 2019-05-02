import test from 'ava'
import { translate } from './index'

test('should return -4 in words', t => {
  t.is(translate(-4), 'Invalid number. Only numbers between 0 and 999999 are allowed.')
})

test('should return 0 in words', t => {
  t.is(translate(0), 'zero')
})

test('should return 1 in words', t => {
  t.is(translate(1), 'one')
})

test('should return 2 in words', t => {
  t.is(translate(2), 'two')
})

test('should return 3 in words', t => {
  t.is(translate(3), 'three')
})

test('should return 4 in words', t => {
  t.is(translate(4), 'four')
})

test('should return 11 in words', t => {
  t.is(translate(11), 'eleven')
})

test('should return 23 in words', t => {
  t.is(translate(23), 'twenty-three')
})

test('should return 99 in words', t => {
  t.is(translate(99), 'ninety-nine')
})

test('should return 74 in words', t => {
  t.is(translate(74), 'seventy-four')
})

test('should return 159 in words', t => {
  t.is(translate(159), 'one hundred fifty-nine')
})

test('should return 596 in words', t => {
  t.is(translate(596), 'five hundred ninety-six')
})

test('should return 1323 in words', t => {
  t.is(translate(1323), 'one thousand three hundred twenty-three')
})

test('should return 26579 in words', t => {
  t.is(translate(26579), 'twenty-six thousand five hundred seventy-nine')
})

test('should return 744625 in words', t => {
  t.is(translate(744625), 'seven hundred fourty-four thousand six hundred twenty-five')
})

test('should return 957619 in words', t => {
  t.is(translate(957619), 'nine hundred fifty-seven thousand six hundred nineteen')
})

test('should return 1000 in words', t => {
  t.is(translate(1000), 'one thousand')
})

test('should return 10000 in words', t => {
  t.is(translate(10000), 'ten thousand')
})

test('should return 500 in words', t => {
  t.is(translate(500), 'five hundred')
})

test('should return 100000 in words', t => {
  t.is(translate(100000), 'one hundred thousand')
})
