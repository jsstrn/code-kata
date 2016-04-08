'use strict'
function expect (first, operator, second, compare, right) {
  const operation = {
    'plus': (first, second) => first + second,
    'minus': (first, second) => first - second,
    'times': (first, second) => first * second,
    'divide': (first, second) => first / second
  }
  const comparison = {
    'equal': (left, right) => left === right,
    'greater than': (left, right) => left > right,
    'less than': (left, right) => left < right
  }
  const left = operation[operator](first, second)
  const result = comparison[compare](left, right) ? 'Pass' : 'Fail'
  console.log(left, compare, right, '=>', result)
  return result
}

expect(5, 'plus', 5, 'equal', 10)
expect(5, 'minus', 5, 'greater than', -1)
expect(5, 'times', 5, 'less than', 26)
expect(10, 'divide', 5, 'equal', 2)
expect(5, 'plus', 5, 'less than', 10)
