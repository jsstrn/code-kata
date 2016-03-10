(function () {
  'use strict'
  function capitalize (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  function beer (bottles) {
    for (var bottle = bottles; bottle > -1; bottle--) {
      var word = (bottle === 1) ? 'bottle' : 'bottles'
      console.log(`${bottle} ${word} of beer on the wall, ${bottle} ${word} of beer on the wall.`)
      console.log(`Take one down, pass it around, ${bottle} ${word} of beer on the wall.`)
    }
  }
  beer(99)
}())
