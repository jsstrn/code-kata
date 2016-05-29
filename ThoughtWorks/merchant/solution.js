'use strict'

function Solution () {
  this.conversionTable = [
    {
      name: 'glob',
      symbol: 'I',
      value: 1
    },
    {
      name: 'prok',
      symbol: 'V',
      value: 5
    },
    {
      name: 'pish',
      symbol: 'X',
      value: 10
    },
    {
      name: 'tegj',
      symbol: 'L',
      value: 50
    },
    {
      name: '',
      symbol: 'C',
      value: 100
    },
    {
      name: '',
      symbol: 'D',
      value: 500
    },
    {
      name: '',
      symbol: 'M',
      value: 1000
    }
  ]
}

Solution.prototype.convertValues = function () {
  const arr = []
  arguments.forEach(name => {
    arr.push(this.conversionTable.find(x => x.name === name))
  })
}

module.exports = new Solution()
