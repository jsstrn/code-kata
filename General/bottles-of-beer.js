(function () {
  'use strict'
  function capitalize (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  function beer (bottles) {
    for (var bottle = bottles; bottle > -1; bottle--) {
      var word = (bottle === 1) ? 'bottle' : 'bottles'
      var phrase = (bottle === 0) ? 'Go to the store and buy some more' : 'Take one down, pass it around'
      bottle = (bottle === 0) ? 'no more' : bottle
      console.log(`${(typeof bottle === 'string' ? capitalize(bottle) : bottle)} ${word} of beer on the wall, ${bottle} ${word} of beer.`)
      console.log(`${phrase}, ${bottle} ${word} of beer on the wall.`)
    }
  }
  beer(99)
}())
