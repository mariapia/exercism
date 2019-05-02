import test from 'ava'
import { findPrime } from './index'

test('should return the sixth prime number', t => {
  t.deepEqual(findPrime(6), 13)
})

test('should return the nineth prime number', t => {
  t.deepEqual(findPrime(9), 23)
})

test('should return the 10001st prime number', t => {
  t.deepEqual(findPrime(10001), 104743)
})

test('should return the 0th prime number', t => {
  t.deepEqual(findPrime(0), 'ILLEGAL INPUT')
})

test('should return the first prime number', t => {
  t.is(findPrime(1), 2)
})
