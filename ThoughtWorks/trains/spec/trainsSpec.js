/*globals describe, it, expect*/

const solution = require('../trains/solution.js')

describe('Problem Set 1 - Trains', () => {
  describe('Compute the distance along a certain route', () => {
    it('1. distance of the route A-B-C.', () => {
      expect(
        solution.getDistance('A', 'B', 'C')
      ).toBe(9)
    })
    it('2. distance of the route A-D.', () => {
      expect(
        solution.getDistance('A', 'D')
      ).toBe(5)
    })
    it('3. distance of the route A-D-C.', () => {
      expect(
        solution.getDistance('A', 'D', 'C')
      ).toBe(13)
    })
    it('4. distance of the route A-E-B-C-D.', () => {
      expect(
        solution.getDistance('A', 'E', 'B', 'C', 'D')
      ).toBe(22)
    })
    it('5. distance of the route A-E-D.', () => {
      expect(
        solution.getDistance('A', 'E', 'D')
      ).toBe('NO SUCH ROUTE')
    })
  })
  describe('Get the number of different routes between two towns.', () => {
    it('6. trips starting at C and ending at C with a maximum of 3 stops.', () => {
      expect(
        solution.routesFinder('C', 'C')
      ).toBe(2)
    })
    it('7. trips starting at A and ending at C with exactly 4 stops.', () => {
      expect(
        solution.routesFinder('A', 'C')
      ).toBe(3)
    })
  })
  describe('Get the shortest route between two towns', () => {

  })
})
