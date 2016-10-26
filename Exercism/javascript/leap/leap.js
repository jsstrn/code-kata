class Year {
  constructor (annum) {
    this.annum = annum
  }
  isLeap () {
    return (this.isDivisibleBy4ButNotBy100() || this.isDivisibleBy4And100ButNotBy400())
  }
  isDivisibleBy4ButNotBy100 () {
    return (this.isDivisibleBy(4) && this.isNotDivisibleBy(100))
  }
  isDivisibleBy4And100ButNotBy400 () {
    return (this.isDivisibleBy(4) && this.isDivisibleBy(100) && this.isDivisibleBy(400))
  }
  isDivisibleBy (number) {
    return (this.annum % number === 0)
  }
  isNotDivisibleBy (number) {
    return (this.annum % number !== 0)
  }
}

module.exports = Year
