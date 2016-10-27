class Hamming {
  compute (original, replicate) {
    if (original.length !== replicate.length)
      throw new Error('DNA strands must be of equal length.')
    let difference = 0
    original
      .split('')
      .forEach((char, index) => {
        if (char !== replicate[index]) difference += 1
      })
    return difference
  }
}

module.exports = Hamming
