class Validator {
  constructor () {}
  validate (input) {
    const validations = {
      'number': (list) => list.some(this.isNumber),
      'uppercase': (list) => list.some(this.isUpperCase),
      'lowercase': (list) => list.some(this.isLowerCase),
      'symbol': (list) => list.some(this.isSymbol)
    }
    return Object.keys(validations).filter((key) => !validations[key](input.split('')))
  }
  isNumber (char) { return /[0-9]/.test(char) }
  isUpperCase (char) { return /[A-Z]/.test(char) }
  isLowerCase (char) { return /[a-z]/.test(char) }
  isSymbol (char) { return /[^a-zA-Z0-9'\n']/.test(char) }
}

module.exports = new Validator()
