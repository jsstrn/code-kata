/* globals describe, it, expect */

const square = require('../square')

describe('Square', () => {
  it('should draw a square of length 2', () => {
    expect(square.drawSquare(2)).toEqual('xx\nxx')
  })

  it('should draw a square of length 3', () => {
    expect(square.drawSquare(3)).toEqual('xxx\nx x\nxxx')
  })

  it('should draw a square of length 4', () => {
    expect(square.drawSquare(4)).toEqual('xxxx\nx  x\nx  x\nxxxx')
  })

  it('should draw two squares of length 2 and 3', () => {
    expect(square.drawTwoSquares(3, 4)).toEqual('xxxx\nx xx\nxxxx\nxxxx')
  })

  it('should draw two squares of length 3 and 6', () => {
    expect(square.drawTwoSquares(3, 6)).toEqual(`xxxxxx\nx x  x\nxxx  x\nx    x\nx    x\nxxxxxx`)
  })
})
