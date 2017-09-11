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

  drawLine (colStart, rowStart, colEnd, rowEnd, filler = '⬛️') {
    if (colStart !== colEnd && rowStart !== rowEnd) {
      throw new Error();
    }
    this.tiles.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if (rowIndex >= rowStart && rowIndex <= rowEnd && colIndex >= colStart && colIndex <= colEnd) {
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

  print () {
    this.tiles.forEach((rows, index) => {
      console.log(rows.join('  '))
      if (index === this.tiles.length - 1) {
        console.log('\n')
      }
    })
  }
}
