import { expect } from 'chai'
import Canvas from '../canvas'

describe('#canvas', () => {
  describe('creates a canvas with the specified height and width', () => {
    let canvas

    beforeEach(() => {
      const rows = 5
      const columns = 3
      canvas = new Canvas(columns, rows)
    })

    it('has correct number of rows and columns', () => {
      expect(canvas.rows).to.equal(5)
      expect(canvas.cols).to.equal(3)
    })

    it('fills all tiles with a filler', () => {
      canvas.fillCanvas('🔶')
      expect(canvas.tiles).to.deep.equal([
        ['🔶', '🔶', '🔶'],
        ['🔶', '🔶', '🔶'],
        ['🔶', '🔶', '🔶'],
        ['🔶', '🔶', '🔶'],
        ['🔶', '🔶', '🔶'],
      ])
    })

    it('draws a horizontal line with specified length', () => {
      canvas.drawLine(1, 1, 2, 1)
      expect(canvas.tiles).to.deep.equal([
        ['⬜️', '⬜️', '⬜️'],
        ['⬜️', '⬛️', '⬛️'],
        ['⬜️', '⬜️', '⬜️'],
        ['⬜️', '⬜️', '⬜️'],
        ['⬜️', '⬜️', '⬜️'],
      ])
    })

    it('draws a vertical line with specified length', () => {
      canvas.drawLine(1, 1, 1, 2)
      expect(canvas.tiles).to.deep.equal([
        ['⬜️', '⬜️', '⬜️'],
        ['⬜️', '⬛️', '⬜️'],
        ['⬜️', '⬛️', '⬜️'],
        ['⬜️', '⬜️', '⬜️'],
        ['⬜️', '⬜️', '⬜️'],
      ])
    })

    it('throws an error when it is not a vertical or horizontal line', () => {
      expect(() => canvas.drawLine(1, 1, 2, 2)).to.throw()
    })

    it('draws a rectangle with specified dimensions', () => {
      canvas.drawRect(0, 0, 2, 3)
      expect(canvas.tiles).to.deep.equal([
        ['⬛️', '⬛️', '⬛️'],
        ['⬛️', '⬜️', '⬛️'],
        ['⬛️', '⬜️', '⬛️'],
        ['⬛️', '⬛️', '⬛️'],
        ['⬜️', '⬜️', '⬜️'],
      ])
    })

    it('fills entire segment of the canvas at specified position and filler', () => {
      canvas.drawLine(1, 1, 2, 1)
      canvas.paintSegment(0, 1, '🔶')
      expect(canvas.tiles).to.deep.equal([
        ['🔶', '🔶', '🔶'],
        ['🔶', '⬛️', '⬛️'],
        ['🔶', '🔶', '🔶'],
        ['🔶', '🔶', '🔶'],
        ['🔶', '🔶', '🔶'],
      ])
    })
  })
})
