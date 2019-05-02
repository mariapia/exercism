import test from 'ava'
import { findfactors } from './index'

test('should evaluate the factors of 28 and return the associated string', t => {
  t.deepEqual(findfactors(28), 'Plong')
})

test('should evaluate the factors of 9 and return the associated string', t => {
  t.deepEqual(findfactors(9), 'Pling')
})

test('should evaluate the factors of 25 and return the associated string', t => {
  t.deepEqual(findfactors(25), 'Plang')
})

test('should evaluate the factors of 30 and return the associated string', t => {
  t.deepEqual(findfactors(30), 'PlingPlang')
})

test('should evaluate the factors of 34 and return the associated string', t => {
  t.deepEqual(findfactors(34), '34')
})
