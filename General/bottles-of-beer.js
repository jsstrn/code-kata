(function () {
  'use strict'
  function beer (bottles) {
    for (var bottle = bottles; -1 < bottle; bottle--) {
      if (bottle === 1) {
        console.log(bottle + ' bottle of beer on the wall, ' + bottle + ' bottle of beer.')
        console.log('Take it down, pass it around, ' + 'no more' + ' bottles of beer on the wall.')
      } else if (bottle === 0) {
        console.log('No more' + ' bottles of beer on the wall, ' + 'no more' + ' bottles of beer.')
        console.log('Go to the store and buy some more ' + bottles + ' bottles of beer on the wall.')
      } else {
        console.log(bottle + ' bottles of beer on the wall, ' + bottle + ' bottles of beer.')
        console.log('Take one down, pass it around, ' + (bottle - 1) + ' bottles of beer on the wall.')
      }
    }
  }
  beer(99)
}())
