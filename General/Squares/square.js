class Square {
  createLength (length) {
    return 'x'.repeat(length)
  }

  createHeight (length) {
    return 'x' + ' '.repeat(length - 2) + 'x'
  }

  createArray (length) {
    return Array.from('x'.repeat(length))
  }

  isFirstOrLastElement (index, last) {
    return (index === 0 || index === last)
  }

  createLengthAndHeight (element, index, array) {
    if (this.isFirstOrLastElement(index, array.length - 1)) {
      return this.createLength(array.length)
    } else {
      return this.createHeight(array.length)
    }
  }

  createSquare (length) {
    return this.createArray(length)
      .map(this.createLengthAndHeight.bind(this))
  }

  drawSquare (length) {
    return this.printSquare(this.createSquare(length))
  }

  printSquare (square) {
    return square.join('\n')
  }

  combineTwoSquares (innerSquare, outerSquare) {
    return this.combineFirstSegment(innerSquare, outerSquare)
      .concat(this.combineSecondSegment(innerSquare, outerSquare))
  }

  combineFirstSegment (innerSquare, outerSquare) {
    return innerSquare.map((row, index) => {
      return row.concat(outerSquare[index].slice(innerSquare.length))
    })
  }

  combineSecondSegment (innerSquare, outerSquare) {
    return outerSquare.slice(innerSquare.length)
  }

  drawTwoSquares (innerLength, outerLength) {
    const outerSquare = this.createSquare(outerLength)
    const innerSquare = this.createSquare(innerLength)
    const combinedSquares = this.combineTwoSquares(innerSquare, outerSquare)

    return this.printSquare(combinedSquares)
  }
}

module.exports = new Square()

