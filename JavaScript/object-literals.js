var Pet = {
  init: function (options) {
    this.name = options.name
    this.born = options.born
    this.died = options.died
  }
}

var Dog = {
  init: function (breed, options) {
    Pet.init.call(this, options)
    this.breed = breed
  },
  age: function () {
    return (this.died || new Date().getFullYear()) - this.born
  }
}

var dog = Object.create(Dog)
dog.init('Labrador', {
  name: 'Roger',
  born: 1999,
  died: null
})

console.log(dog)
console.log(dog.age())
console.log(Object.getPrototypeOf(dog))
console.log(dog.constructor)
