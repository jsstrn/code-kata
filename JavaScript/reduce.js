'use strict'
function range (start, end) {
  const arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  console.log(...arr)
  return arr
}

function sum (arr) {
  return arr.reduce((prev, curr) => {
    return prev + curr
  })
}
const result = sum(range(1, 10))
console.log(result)
