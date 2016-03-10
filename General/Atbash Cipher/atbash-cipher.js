function atbash (text) {
  return text.split('').map(function (character) {
    var letter = String.fromCharCode(155 - character.toUpperCase().charCodeAt(0))
    if (character === character.toUpperCase()) return letter
    return letter.toLowerCase()
  }).join('')
}

console.log(atbash('teSt')) // => gvHg
