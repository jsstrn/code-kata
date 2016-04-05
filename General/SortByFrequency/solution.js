const numbers = [3, 1, 2, 1, 3, 4, 2, 1, 4, 1, 4, -1, -3, -3, -3]
numbers.sort((a, b) => a - b)
const unique = [...new Set(numbers)]
const frequency = []

unique.forEach(x => {
  let filtered = numbers.filter(y => y === x)
  frequency.push(filtered)
})

frequency.sort((a, b) => a.length - b.length)

frequency.forEach(arr => {
  arr.forEach(number => console.log(number))
})
