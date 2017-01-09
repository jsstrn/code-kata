const Inventory = require('./inventory')

class Order {
  constructor (products) {
    this.inventory = new Inventory(products)
  }

  order (country, quantity) {
    if (quantity > 200) {
      // out of stock
    }

    if (quantity > 100 && quantity <= 200) {
      // split to two orders
      const quantities = [100, quantity - 100]
      quantities.forEach((q) => {
        placeOrder()
      })
    }






    const otherCountry = this.inventory.productsNotFrom(country).country

    const options = [
      this.inventory.calculateCost(country, quantity),
      this.inventory.calculateCostWithShipping(otherCountry, quantity)
    ]

    const cheapest = this.inventory.findCheapestCost(options[0], options[1])

    if (cheapest === options[0]) this.inventory.deductStockFor(country, quantity)
    else this.inventory.deductStockFor(otherCountry, quantity)
  }
}

module.exports = Order
