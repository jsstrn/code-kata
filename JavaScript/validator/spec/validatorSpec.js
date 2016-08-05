/* globals describe it expect */

const validator = require('../validator')

describe('validations', () => {
  describe('number validation', () => {
    it('should return true if character contains a number', () => {
      expect(validator.isNumber(3)).toBe(true)
    })
    it('should return true if character contains a string that is a number', () => {
      expect(validator.isNumber('3')).toBe(true)
    })
    it('should return false if character does not contain a number', () => {
      expect(validator.isNumber('a')).toBe(false)
    })
    it('should return false if character contains an empty string', () => {
      expect(validator.isNumber(' ')).toBe(false)
    })
  })
  describe('uppercase letter validation', () => {
    it('should return true if character is in uppercase', () => {
      expect(validator.isUpperCase('A')).toBe(true)
    })
    it('should return false if character is not in uppercase', () => {
      expect(validator.isUpperCase('a')).toBe(false)
    })
  })
  describe('lowercase letter validation', () => {
    it('should return true if character is in lowercase', () => {
      expect(validator.isLowerCase('a')).toBe(true)
    })
    it('should return false if character is not in lowercase', () => {
      expect(validator.isLowerCase('A')).toBe(false)
    })
  })
  describe('symbol validation', () => {
    it('should return true if character is a symbol', () => {
      expect(validator.isSymbol('@')).toBe(true)
    })
    it('should return false if character is not a symbol', () => {
      expect(validator.isSymbol('a')).toBe(false)
    })
  })
  describe('output validation', () => {
    it('should return an empty list of errors', () => {
      const errors = []
      expect(validator.validate('SecurePassword123!')).toEqual(errors)
    })
    it('should return a list of errors for number, uppercase, and symbol', () => {
      const errors = ['number', 'uppercase', 'symbol']
      expect(validator.validate('insecurepassword')).toEqual(errors)
    })
    it('should return a list of errors for number, and symbol', () => {
      const errors = ['number', 'symbol']
      expect(validator.validate('insecurePassword')).toEqual(errors)
    })
    it('should return a list of errors for lowercase', () => {
      const errors = ['lowercase']
      expect(validator.validate('INSECUR3PASSWORD!')).toEqual(errors)
    })
  })
})
