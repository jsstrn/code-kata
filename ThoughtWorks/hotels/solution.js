'use strict'

class Hotel {
  constructor (name, customerType, weekdayRate, weekendRate) {
    this.name = name
    this.customerType = customerType
    this.rates = {
      weekday: weekdayRate,
      weekend: weekendRate
    }
  }
}

class Hotels {
  constructor () {
    this.rates = [
      new Hotel('Lakeside', 'regular', 110, 80),
      new Hotel('Lakeside', 'rewards', 90, 80),
      new Hotel('Bridgewood', 'regular', 160, 110),
      new Hotel('Bridgewood', 'rewards', 60, 50),
      new Hotel('Ridgewood', 'regular', 220, 100),
      new Hotel('Ridgewood', 'rewards', 150, 40)
    ]
  }
  getCheapestRates (customerType) {
    const filtered = this.rates.filter((hotel) => {
      return hotel[customerType]
    })
    console.log(filtered)
  }
}

const hotels = new Hotels()
console.log(hotels.rates)
hotels.getCheapestRates('regular', 'A', 'B', 'C')
