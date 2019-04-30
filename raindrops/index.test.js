import test from 'ava'
import { findfactors } from './index'

test('should return Plong', t => {
  t.deepEqual(findfactors(28), 'Plong')
})

test.skip('shoud return Pling', t => {
  t.deepEqual(findfactors(9), 'Pling')
})

test.skip('should return Plang', t => {
  t.deepEqual(findfactors(25), 'Plang')
})

test.skip('should return PlingPlang', t => {
  t.deepEqual(findfactors(30), 'PlingPlang')
})

test.skip('should return 34', t => {
  t.deepEqual(findfactors(34), '34')
})
