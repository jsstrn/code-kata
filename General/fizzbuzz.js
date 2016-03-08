function fizzbuzz (limit) {
  for (var number = 0; number <= limit; number++) {
    if (number % 15 === 0) {
      console.log('fizzbuzz')
    } else if (number % 5 === 0) {
      console.log('buzz')
    } else if (number % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(number)
    }
  }
}

fizzbuzz(100)
