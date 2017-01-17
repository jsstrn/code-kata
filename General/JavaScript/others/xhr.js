// XMLHttpRequest Web API on MDN http://is.gd/lZiY1X
var xhr = new window.XMLHttpRequest()

xhr.open('GET', 'https://api.doughnuts.ga/doughnuts')

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 400) {
    var data = xhr.responseText
    console.log(data)
  } else {
    console.log('Error on the server side.')
  }
}

xhr.onerror = function () {
  console.log('Error on the client side.')
}

xhr.send()
