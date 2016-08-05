function Validator () {
  this.validate = (input) => {
    const validations = {
      'number': (list) => list.some(this.isNumber),
      'uppercase': (list) => list.some(this.isUpperCase),
      'lowercase': (list) => list.some(this.isLowerCase),
      'symbol': (list) => list.some(this.isSymbol)
    }
    return Object.keys(validations).filter((key) => !validations[key](input.split('')))
  }
  this.isNumber = (char) => /[0-9]/.test(char)
  this.isUpperCase = (char) => /[A-Z]/.test(char)
  this.isLowerCase = (char) => /[a-z]/.test(char)
  this.isSymbol = (char) => /[^a-zA-Z0-9'\n']/.test(char)
}

module.exports = new Validator()
