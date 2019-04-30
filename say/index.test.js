import test from 'ava'
import { translate } from './index'

test('should return error', t => {
  t.is(translate(-4), 'Invalid number. Only numbers between 0 and 999999 are allowed.')
})

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

test('should return eleven', t => {
  t.is(translate(11), 'eleven')
})

test('should return twenty-three', t => {
  t.is(translate(23), 'twenty-three')
})

test('should return ninety-nine', t => {
  t.is(translate(99), 'ninety-nine')
})

test('should return seventy-four', t => {
  t.is(translate(74), 'seventy-four')
})

test('should return one hundred fifty-nine', t => {
  t.is(translate(159), 'one hundred fifty-nine')
})

test('should return five hundred ninety-six', t => {
  t.is(translate(596), 'five hundred ninety-six')
})

test('should return one thousand nine hundred ninety-three', t => {
  t.is(translate(1323), 'one thousand three hundred twenty-three')
})

test('should return twenty-six thousand five hundred seventy-nive', t => {
  t.is(translate(26579), 'twenty-six thousand five hundred seventy-nine')
})

test('should return seven hundred fourty-four thousand six hundred twenty-five', t => {
  t.is(translate(744625), 'seven hundred fourty-four thousand six hundred twenty-five')
})

test('should return nine hundred fifty-seven thousand six hundred nineteen', t => {
  t.is(translate(957619), 'nine hundred fifty-seven thousand six hundred nineteen')
})

test('should return one thousand', t => {
  t.is(translate(1000), 'one thousand')
})

test('should return ten thousand', t => {
  t.is(translate(10000), 'ten thousand')
})

test('should return five hundred', t => {
  t.is(translate(500), 'five hundred')
})
