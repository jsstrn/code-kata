/*globals describe, it, expect*/

const solution = require('../solution/train.js')

describe('Problem Set 1 - Trains', () => {
  describe('Compute the distance along a certain route', () => {
    it('The distance of the route A-B-C.', () => {
      expect(
        solution.getDistance('A', 'B', 'C')
      ).toBe(9)
    })
    it('The distance of the route A-D.', () => {
      expect(
        solution.getDistance('A', 'D')
      ).toBe(5)
    })
    it('The distance of the route A-D-C.', () => {
      expect(
        solution.getDistance('A', 'D', 'C')
      ).toBe(13)
    })
    it('The distance of the route A-E-B-C-D.', () => {
      expect(
        solution.getDistance('A', 'E', 'B', 'C', 'D')
      ).toBe(22)
    })
    it('The distance of the route A-E-D.', () => {
      expect(
        solution.getDistance('A', 'E', 'D')
      ).toBe('NO SUCH ROUTE')
    })
  })
  describe('Get the number of different routes between two towns.', () => {

  })
  describe('Get the shortest route between two towns', () => {

  })
})
