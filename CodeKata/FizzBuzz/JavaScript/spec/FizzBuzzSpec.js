/* globals describe, it, expect */

const FizzBuzz = require('../FizzBuzz')

describe('unit tests for fizz buzz solution', () => {
  describe('should return fizz for multiples of 3', () => {
    it('should return fizz for FizzBuzz(3)', () => {
      expect(FizzBuzz.getAnswerFor(3)).toBe('fizz')
    })
    it('should return fizz for FizzBuzz(6)', () => {
      expect(FizzBuzz.getAnswerFor(6)).toBe('fizz')
    })
    it('should return fizz for FizzBuzz(9)', () => {
      expect(FizzBuzz.getAnswerFor(9)).toBe('fizz')
    })
  })
  describe('should return buzz for multiples of 5', () => {
    it('should return buzz for FizzBuzz(5)', () => {
      expect(FizzBuzz.getAnswerFor(5)).toBe('buzz')
    })
    it('should return buzz for FizzBuzz(10)', () => {
      expect(FizzBuzz.getAnswerFor(10)).toBe('buzz')
    })
    it('should return buzz for FizzBuzz(20)', () => {
      expect(FizzBuzz.getAnswerFor(20)).toBe('buzz')
    })
  })
  describe('should return fizzbuzz for multiples of 3 and 5', () => {
    it('should return fizzbuzz for FizzBuzz(15)', () => {
      expect(FizzBuzz.getAnswerFor(15)).toBe('fizzbuzz')
    })
    it('should return fizzbuzz for FizzBuzz(30)', () => {
      expect(FizzBuzz.getAnswerFor(30)).toBe('fizzbuzz')
    })
    it('should return fizzbuzz for FizzBuzz(45)', () => {
      expect(FizzBuzz.getAnswerFor(45)).toBe('fizzbuzz')
    })
  })
  describe('should return its number if not a multiple of 3, 5, or 3 and 5', () => {
    it('should return 1 for FizzBuzz(1)', () => {
      expect(FizzBuzz.getAnswerFor(1)).toBe(1)
    })
    it('should return 2 for FizzBuzz(2)', () => {
      expect(FizzBuzz.getAnswerFor(2)).toBe(2)
    })
    it('should return 14 for FizzBuzz(14)', () => {
      expect(FizzBuzz.getAnswerFor(14)).toBe(14)
    })
  })
  describe('should loop', () => {
    it('should return an array with one element', function () {
      expect(FizzBuzz.loop(1).length).toEqual(1)
    })
    it('should return an array with 100 elements', function () {
      expect(FizzBuzz.loop(100).length).toEqual(100)
    })
    it('should return an array with correct values in its elements', function () {
      expect(FizzBuzz.loop(5)).toEqual([1, 2, 'fizz', 4, 'buzz'])
    })
  })
})
