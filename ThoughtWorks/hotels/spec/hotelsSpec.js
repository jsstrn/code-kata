/*globals describe, it, expect*/

const solution = require('../solution')

describe('tests the hotel room reservation app', () => {
  const weekday = new Date(2009, 2, 20)
  const weekend = new Date(2009, 2, 21)
  describe('checks if a date is a weekend', () => {
    it('should return true for a weekend', () => {
      expect(solution.isWeekend(weekend)).toBe(true)
    })
    it('should return false for a weekday', () => {
      expect(solution.isWeekend(weekday)).toBe(false)
    })
    it('should return weekend', () => {
      expect(solution.getTypeOfDay(weekend)).toBe('weekend')
    })
    it('should return weekday', () => {
      expect(solution.getTypeOfDay(weekday)).toBe('weekday')
    })
  })
  describe('checks if correct hotel object is returned', () => {
    it('should return Lakewood', () => {
      expect(solution.getHotelByName('Lakewood').name).toBe('Lakewood')
      expect(solution.getHotelByName('Bridgewood').name).toBe('Bridgewood')
      expect(solution.getHotelByName('Ridgewood').name).toBe('Ridgewood')
    })
    it('should return Bridgewood', () => {
      expect(solution.getHotelByName('Bridgewood').name).toBe('Bridgewood')
    })
    it('should return Ridgewood', () => {
      expect(solution.getHotelByName('Ridgewood').name).toBe('Ridgewood')
    })
  })
  describe('checks if correct rates are returned for a given cutomer type and date', () => {
    it('should return the weekday rates for regular customers', () => {
      expect(
        solution.getRateForHotel('Lakewood', 'regular', weekday)
      ).toBe(110)
    })
    it('should return the weekday rates for reward customers', () => {
      expect(
        solution.getRateForHotel('Ridgewood', 'rewards', weekday)
      ).toBe(150)
    })
    it('should return the weekend rates for regular customers', () => {
      expect(
        solution.getRateForHotel('Lakewood', 'regular', weekend)
      ).toBe(80)
    })
    it('should return the weekend rates for rewards customers', () => {
      expect(
        solution.getRateForHotel('Bridgewood', 'rewards', weekend)
      ).toBe(50)
    })
  })
  describe('check test input and output', () => {
    it('', () => {
      const date1 = new Date(2009, 2, 16)
      const date2 = new Date(2009, 2, 17)
      const date3 = new Date(2009, 2, 18)
      expect(
        solution.getCheapestRates('regular', date1, date2, date3)
      ).toBe('Lakewood')
    })
    it('', () => {
      const date1 = new Date(2009, 2, 20)
      const date2 = new Date(2009, 2, 21)
      const date3 = new Date(2009, 2, 22)
      expect(
        solution.getCheapestRates('regular', date1, date2, date3)
      ).toBe('Bridgewood')
    })
    it('', () => {
      const date1 = new Date(2009, 2, 26)
      const date2 = new Date(2009, 2, 27)
      const date3 = new Date(2009, 2, 28)
      expect(
        solution.getCheapestRates('rewards', date1, date2, date3)
      ).toBe('Ridgewood')
    })
  })
})
