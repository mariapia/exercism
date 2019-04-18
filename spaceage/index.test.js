import test from 'ava'
import { convert } from './index'

test('should convert seconds in Earth age', t => {
  let expected = convert('Earth', 1000000000)
  t.deepEqual(31.69, expected)
})

test('should convert seconds in Mercury age', t => {
  let expected = convert('Mercury', 2134835688)
  t.deepEqual(280.88, expected)
})

test('should convert seconds in Venus age', t => {
  let expected = convert('Venus', 189839836)
  t.deepEqual(9.78, expected)
})
