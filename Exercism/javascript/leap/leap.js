class Year {
  constructor (annum) {
    this.annum = annum
  }
  isLeap () {
    return (this.isDivisibleBy(4) && !this.isDivisibleBy(100) || this.isDivisibleBy(400))
  }
  isDivisibleBy (number) {
    return (this.annum % number === 0)
  }
}

module.exports = Year
