function unpaired (arr) {
  var sorted = arr.sort()
  var result = null
  sorted.forEach(function (number, index, array) {
    if (index % 2 === 0) {
      if (array[index] !== array[index + 1]) result = number
    }
  })
  return result
}

var result = unpaired([1, 9, 2, 9, 1, 7, 2])
console.log(result)
