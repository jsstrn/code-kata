'use strict'

class Hotel {
  constructor (name, regularRates, rewardsRates) {
    this.name = name
    this.rates = {
      regular: {
        weekday: regularRates[0],
        weekend: regularRates[1]
      },
      rewards: {
        weekday: rewardsRates[0],
        weekend: rewardsRates[1]
      }
    }
  }
}

class Hotels {
  constructor () {
    this.hotels = [
      new Hotel('Lakewood', [110, 80], [90, 80]),
      new Hotel('Bridgewood', [160, 110], [60, 50]),
      new Hotel('Ridgewood', [220, 150], [150, 40])
    ]
  }
  isWeekend (date) {
    return (date.getDay() === 0 || date.getDay() === 6)
  }
  getRateFor (hotelName, customerType, date) {
    const hotel = this.hotels.find((hotel) => {
      return hotel.name === hotelName
    })
    const typeOfDay = this.isWeekend(date) ? 'weekend' : 'weekday'
    return hotel.rates[customerType][typeOfDay]
  }
  getCheapestRates (customerType) {
    const dates = [arguments[1], arguments[2], arguments[3]]
    const rates = this.hotels.map(hotel => {
      return dates.map(date => {
        return this.getRateFor(hotel.name, customerType, date)
      }).reduce((prev, curr) => prev + curr)
    })
    const cheapestRate = rates.reduce((prev, curr) => Math.min(prev, curr))
    return this.hotels[rates.indexOf(cheapestRate)].name
  }
}

module.exports = new Hotels()
