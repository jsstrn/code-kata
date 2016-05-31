/*globals describe, it, expect*/
const solution = require('../hotels/solution.js')

describe('', () => {
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
