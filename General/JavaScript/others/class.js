'use strict'

class Pet {
  constructor (options) {
    this.name = options.name
    this.born = options.born
    this.died = options.died
  }
  age () {
    return (this.died || new Date().getFullYear()) - this.born
  }
}

class Dog extends Pet {
  constructor (breed, options) {
    super(options)
    this.breed = breed
  }
}

const dog = new Dog('Skip', {
  name: 'Roger',
  born: 1999,
  died: null
})

console.log(dog)
console.log(dog.age())
console.log(Object.getPrototypeOf(dog))
console.log(dog.constructor)
