import test from 'ava'
import { counter } from './index'

test('should return 2 3 1 0', t => {
  t.deepEqual(counter('AAFRGHHCVCRC'), '2 3 1 0')
})

test('empty strand', t => {
  t.deepEqual(counter(' '), '0 0 0 0')
})

test('strand with repeated nucleotide', t => {
  t.deepEqual(counter('GGGGGGG'), '0 0 7 0')
})

test('strand with multiple nucleotides', t => {
  t.deepEqual(counter('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC'), '20 12 17 21')
})
