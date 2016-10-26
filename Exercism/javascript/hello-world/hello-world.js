var HelloWorld = function() {};

HelloWorld.prototype.hello = function (input) {
  return input ? `Hello, ${input}!` : `Hello, World!`
}

module.exports = HelloWorld;
