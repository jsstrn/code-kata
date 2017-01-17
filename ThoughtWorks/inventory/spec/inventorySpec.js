/* globals describe, it, expect, beforeEach */

const Inventory = require('../inventory')

describe('test suite for inventory management system', () => {
  let inventory
inventory.produ
  beforeEach(() => {
    inventory = new Inventory([
      {
        country: 'Brazil',
        price: 100,
        stock: 100
      },
      {
        country: 'Argentina',
        price: 50,
        stock: 100
      }
    ])
  })

  it('should display stock for Brazil', () => {
    expect(inventory.displayStockFor('Brazil')).toBe(100)
  })

  it('should display stock for Argentina', () => {
    expect(inventory.displayStockFor('Argentina')).toBe(100)
  })

  it('should filter products by country', () => {
    expect(inventory.productsFrom('Argentina').country).toBe('Argentina')
  })

  it('should calculate total cost of order', () => {
    expect(inventory.calculateCost('Brazil', 5)).toBe(500)
    expect(inventory.calculateCost('Argentina', 5)).toBe(250)
  })

  it('should calculate total shipping cost', () => {
    expect(inventory.calculateShipping(1)).toBe(400)
    expect(inventory.calculateShipping(10)).toBe(400)
    expect(inventory.calculateShipping(19)).toBe(800)
    expect(inventory.calculateShipping(20)).toBe(800)
    expect(inventory.calculateShipping(21)).toBe(1200)
  })

  it('should calculate total cost inclusive of shipping', () => {
    expect(inventory.calculateCostWithShipping('Brazil', 5)).toBe(900)
  })

  it('should find cheapest cost', () => {
    const options = [
      inventory.calculateCost('Brazil', 5),
      inventory.calculateCostWithShipping('Argentina', 5)
    ]
    expect(inventory.findCheapestCost(options[0], options[1])).toBe(500)
  })

  it('should deduct stock from country', () => {
    inventory.deductStockFor('Brazil', 20)
    expect(inventory.productsFrom('Brazil').stock).toBe(80)
  })

  it('should place an order from Brazil', () => {
    inventory.placeOrder('Brazil', 5)
    expect(inventory.productsFrom('Brazil').stock).toBe(95)
  })

  it('should place an order from Argentina', () => {
    inventory.placeOrder('Brazil', 50)
    expect(inventory.productsFrom('Argentina').stock).toBe(50)
  })

  it('should place an order from Argentina', () => {
    inventory.placeOrder('Brazil', 50)
    expect(inventory.productsFrom('Argentina').stock).toBe(50)
  })
})
