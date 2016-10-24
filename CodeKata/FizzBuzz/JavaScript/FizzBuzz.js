class FizzBuzz {
  getAnswerFor (number) {
    if (number % 15 === 0) return 'fizzbuzz'
    if (number % 3 === 0) return 'fizz'
    if (number % 5 === 0) return 'buzz'
    return number
  }
  loop (limit) {
    const result = []
    for (var i = 1; i <= limit; i++) result.push(this.getAnswerFor(i))
    return result
  }
}

module.exports = new FizzBuzz()
