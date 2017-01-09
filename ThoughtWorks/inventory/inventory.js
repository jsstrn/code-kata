class Inventory {
  constructor (products) {
    this.products = products
  }

  productsFrom (country) {
    return this.products.filter(p => p.country === country)[0]
  }

  productsNotFrom (country) {
    return this.products.filter(p => p.country !== country)[0]
  }

  displayStockFor (country) {
    return this.productsFrom(country).stock
  }

  calculateCost (country, quantity) {
    return this.productsFrom(country).price * quantity
  }

  calculateShipping (quantity) {
    return 400 * Math.ceil(quantity / 10)
  }

  calculateCostWithShipping (country, quantity) {
    return this.calculateCost(country, quantity) + this.calculateShipping(quantity)
  }

  findCheapestCost (first, second) {
    return Math.min(first, second)
  }

  deductStockFor (country, quantity) {
    this.products.forEach(p => {
      if (p.country === country) p.stock = p.stock - quantity
    })
  }
}

module.exports = Inventory
