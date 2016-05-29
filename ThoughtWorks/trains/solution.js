'use strict'

function Edge (start, end, weight) {
  this.start = start
  this.end = end
  this.weight = Number(weight)
}

function Solution () {
  this.nodes = ['A', 'B', 'C', 'D', 'E']
  this.edges = ['AB5', 'BC4', 'CD8', 'DC8', 'DE6', 'AD5', 'CE2', 'EB3', 'AE7']
  this.graph = this.edges.map((route) => {
    return new Edge(route[0], route[1], route[2])
  })
  this.matrix = [
    [-1, 5, -1, 5, 7],
    [-1, -1, 4, -1, -1],
    [-1, -1, -1, 8, 2],
    [-1, -1, 8, -1, 6],
    [-1, 3, -1, -1, -1]
  ]
}

Solution.prototype.doesRouteExist = function (start, end) {
  return this.graph.find(route => route.start === start && route.end === end)
}

Solution.prototype.getDistance = function () {
  const stations = arguments
  const stops = arguments.length - 1
  let distance = 0
  for (let i = 0; i < stops; i++) {
    const route = this.doesRouteExist(stations[i], stations[i + 1])
    if (route) {
      distance += route.weight
    } else {
      return 'NO SUCH ROUTE'
    }
  }
  return distance
}

Solution.prototype.routesStartingAt = function (start) {
  return this.graph.filter(route => route.start === start)
}

Solution.prototype.routesEndingAt = function (end) {
  return this.graph.filter(route => route.end === end)
}

Solution.prototype.routesFinder = function (start, end) {
  const paths = []
  this.routesStartingAt(start).forEach((route) => {
    paths.push([route])
  })
  return paths
}

const solution = new Solution()

console.log(
  // solution.routesFinder('C', 'C')
)

module.exports = new Solution()
