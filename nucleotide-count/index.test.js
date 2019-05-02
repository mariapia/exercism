import test from 'ava'
import { counter } from './index'

test('should count the nucleotide in AAFRGHHCVCRC', t => {
  t.deepEqual(counter('AAFRGHHCVCRC'), '2 3 1 0')
})

test('should count the nucleotide in an empty strand', t => {
  t.deepEqual(counter(' '), '0 0 0 0')
})

test('should count the nucleotide in GGGGGGG', t => {
  t.deepEqual(counter('GGGGGGG'), '0 0 7 0')
})

test('should count the nucleotide in AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC', t => {
  t.deepEqual(counter('AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC'), '20 12 17 21')
})
