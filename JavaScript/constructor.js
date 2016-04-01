function Pet (options) {
  this.name = options.name
  this.born = options.born
  this.died = options.died
}

Pet.prototype.age = function () {
  return (this.died || new Date().getFullYear()) - this.born
}

function Dog (breed, options) {
  Pet.call(this, options)
  this.breed = breed
}

Dog.prototype = Object.create(Pet.prototype)

const dog = new Dog('Skip', {
  name: 'Roger',
  born: 1999,
  died: null
})

console.log(dog)
console.log(dog.age())
console.log(Object.getPrototypeOf(dog))
console.log(dog.constructor)
