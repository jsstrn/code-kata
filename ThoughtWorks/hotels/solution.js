'use strict'

class Hotel {
  constructor (name, rating, regularRates, rewardsRates) {
    this.name = name
    this.rating = rating
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
  constructor (hotels) {
    this.hotels = hotels
  }
  isWeekend (date) {
    return (date.getDay() === 0 || date.getDay() === 6)
  }
  getTypeOfDay (date) {
    return this.isWeekend(date) ? 'weekend' : 'weekday'
  }
  getHotelByName (hotelName) {
    return this.hotels.find((hotel) => {
      return hotel.name === hotelName
    })
  }
  getRateForHotel (hotelName, customerType, date) {
    const hotel = this.getHotelByName(hotelName)
    return hotel.rates[customerType][this.getTypeOfDay(date)]
  }
  getCheapestRates (customerType) {
    const dates = [arguments[1], arguments[2], arguments[3]]
    const rates = this.hotels.map(hotel => {
      return dates.map(date => {
        return this.getRateForHotel(hotel.name, customerType, date)
      }).reduce((prev, curr) => prev + curr)
    })
    const cheapestRate = rates.reduce((prev, curr) => Math.min(prev, curr))
    return this.hotels[rates.indexOf(cheapestRate)].name
  }
}

module.exports = new Hotels([
  new Hotel('Lakewood', 3, [110, 80], [90, 80]),
  new Hotel('Bridgewood', 4, [160, 110], [60, 50]),
  new Hotel('Ridgewood', 5, [220, 150], [150, 40])
])
