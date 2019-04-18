import test from 'ava'
import { word2math } from './index'

test('What is 5?', t => {
  t.deepEqual(word2math('What is 5?'), 'Evaluates to 5')
})

test('What is 5 plus 6?', t => {
  t.deepEqual(word2math('What is 5 plus 6?'), 'Evaluates to 11')
})

test('What is 6 minus 4?', t => {
  t.deepEqual(word2math('What is 6 minus 4?'), 'Evaluates to 2')
})

test('What is 5 multiplied by 2?', t => {
  t.deepEqual(word2math('What is 5 multiplied by 2?'), 'Evaluates to 10')
})

test('What is 44 divided by 2?', t => {
  t.deepEqual(word2math('What is 44 divided by 2?'), 'Evaluates to 22')
})

test('What is 10 divided by 2 plus 4?', t => {
  t.deepEqual(word2math('What is 10 divided by 2 plus 4?'), 'Evaluates to 9')
})

test('No math problem', t => {
  t.deepEqual(word2math('Who is the president?'), 'No Math problem')
})
