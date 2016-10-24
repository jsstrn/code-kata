class Validator {
  constructor (minimumLengthRequired, maximumLengthAllowed) {
    this.minimumLengthRequired = minimumLengthRequired
    this.maximumLengthAllowed = maximumLengthAllowed
  }
  validate (input) {
    const validations = {
      'number': (list) => list.some(this.isNumber),
      'uppercase': (list) => list.some(this.isUpperCase),
      'lowercase': (list) => list.some(this.isLowerCase),
      'symbol': (list) => list.some(this.isSymbol),
      'minimum': (list) => true,
      'maximum': (list) => true
    }
    return Object.keys(validations).filter((key) => !validations[key](input.split('')))
  }
  isNumber (char) { return /[0-9]/.test(char) }
  isUpperCase (char) { return /[A-Z]/.test(char) }
  isLowerCase (char) { return /[a-z]/.test(char) }
  isSymbol (char) { return /[^a-zA-Z0-9'\n']/.test(char) }
  meetsMinimumLengthRequirement (input, min) { return input.length === min }
  meetsMaximumLengthAllowed (input, max) { return input.length <= max }
  print (result) {
    console.log(result)
  }
}

module.exports = new Validator()
