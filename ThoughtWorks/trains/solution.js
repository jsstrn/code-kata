'use strict'

function Solution () {
  this.arr = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7']
  this.routes = this.arr.map((route) => {
    return {
      start: route[0],
      end: route[1],
      distance: Number(route[2])
    }
  })
}

Solution.prototype.doesRouteExist = function (start, end) {
  return this.routes.find(route => route.start === start && route.end === end)
}

Solution.prototype.getDistance = function () {
  const stations = arguments
  const stops = arguments.length - 1
  let distance = 0
  for (let i = 0; i < stops; i++) {
    const routeExists = this.doesRouteExist(stations[i], stations[i + 1])
    if (routeExists) {
      distance += routeExists.distance
    } else {
      return 'NO SUCH ROUTE'
    }
  }
  return distance
}

Solution.prototype.routesStartingAt = function (start) {
  return this.routes.filter(route => route.start === start)
}

Solution.prototype.routesEndingAt = function (end) {
  return this.routes.filter(route => route.end === end)
}

Solution.prototype.routesFinder = function (start, end, route) {
  if (end === route.end) {
    return route
  }
  this.routes.find(route => route.start === start)
  return this.routesFinder(route.end, end, route)
}

const solution = new Solution()

console.log(
  solution.routesStartingAt('C'),
  solution.routesEndingAt('C'),
  solution.routesFinder(5)
)

module.exports = new Solution()
