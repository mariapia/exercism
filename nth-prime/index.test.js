import test from 'ava'
import { findPrime } from './index'

test('should return 13', t => {
  t.deepEqual(findPrime(6), 13)
})

test('should return 23', t => {
  t.deepEqual(findPrime(9), 23)
})

test('should return 104743', t => {
  t.deepEqual(findPrime(10001), 104743)
})

test('no prime', t => {
  t.deepEqual(findPrime(0), 'ILLEGAL INPUT')
})
