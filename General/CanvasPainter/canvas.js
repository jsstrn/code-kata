export default class Canvas {
  constructor (columns, rows) {
    this.tiles = this.createCanvas(columns, rows)
    this.rows = this.tiles.length
    this.cols = this.tiles[0].length
  }

  createCanvas (cols, rows) {
    return Array.from(Array(rows)).map(() => (
      Array.from(Array(cols)).map(() => '⬜️')
    ))
  }

  drawLine (startPositionAtX, startPositionAtY, endPositionAtX, endPositionAtY, filler = '⬛️') {
    if (startPositionAtX !== endPositionAtX && startPositionAtY !== endPositionAtY) {
      throw new Error();
    }
    this.tiles.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (rowIndex >= startPositionAtY && rowIndex <= endPositionAtY && colIndex >= startPositionAtX && colIndex <= endPositionAtX) {
          this.tiles[rowIndex][colIndex] = filler
        }
      })
    })
  }

  drawRect (colStart, rowStart, colEnd, rowEnd, filler = '⬛️') {
    this.drawLine(colStart, rowStart, colEnd, rowStart, filler)
    this.drawLine(colStart, rowStart, colStart, rowEnd, filler)
    this.drawLine(colEnd, rowStart, colEnd, rowEnd, filler)
    this.drawLine(colStart, rowEnd, colEnd, rowEnd, filler)
  }

  fillCanvas (filler) {
    this.tiles.forEach((col, colIndex) => {
      col.forEach((row, rowIndex) => {
        this.tiles[colIndex][rowIndex] = filler
      })
    })
  }

  paintSegment (positionAtX, positionAtY, filler, originalFiller) {
    if (filler === originalFiller) { return }

    if (positionAtX < 0 || positionAtY < 0 || positionAtX >= this.cols || positionAtY >= this.rows) { return }

    if (originalFiller === undefined) { originalFiller = this.tiles[positionAtY][positionAtX] }

    if (this.tiles[positionAtY][positionAtX] !== originalFiller) { return }

    this.tiles[positionAtY][positionAtX] = filler;

    this.paintSegment(positionAtX - 1, positionAtY - 1, filler, originalFiller)
    this.paintSegment(positionAtX - 1, positionAtY, filler, originalFiller)
    this.paintSegment(positionAtX - 1, positionAtY + 1, filler, originalFiller)
    this.paintSegment(positionAtX, positionAtY - 1, filler, originalFiller)
    this.paintSegment(positionAtX, positionAtY + 1, filler, originalFiller)
    this.paintSegment(positionAtX + 1, positionAtY - 1, filler, originalFiller)
    this.paintSegment(positionAtX + 1, positionAtY, filler, originalFiller)
    this.paintSegment(positionAtX + 1, positionAtY + 1, filler, originalFiller)
  }

  display () {
    return this.tiles.reduce((acc, row) => ( acc + row.join('  ') + '\n' ), '')
  }

  print () {
    console.log(this.display())
  }
}
