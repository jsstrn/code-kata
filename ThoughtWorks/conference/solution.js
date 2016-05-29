'use strict'
const data = require('./data.json')

function Talk (title, duration) {
  this.title = title
  this.duration = duration
}

function Track (track) {
  this.track = track
  this.am = []
  this.pm = []
}

function Solution () {
  this.schedule = [new Track(1), new Track(2)]
  this.talks = data.map((talk) => {
    return (
      talk.duration === 'lightning'
      ? new Talk(talk.title, 5) : new Talk(talk.title, talk.duration)
    )
  })
}
Solution.prototype.createSchedule = function () {
  this.talks.reduce((prev, curr, index) => {
    if (prev.duration <= 3 * 60) {
      this.schedule[0].am.push(curr)
    }
    if (prev.duration > 3 * 60 && prev.duration <= 6 * 60) {
      this.schedule[1].am.push(curr)
    }
    if (prev.duration > 6 * 60 && prev.duration <= 10 * 60) {
      this.schedule[0].pm.push(curr)
    }
    if (prev.duration > 10 * 60 && prev.duration <= 14 * 60) {
      this.schedule[1].pm.push(curr)
    }
    return {duration: prev.duration + curr.duration}
  })
}

Solution.prototype.printSchedule = function () {
  this.schedule.forEach((track) => {
    console.log()
  })
}

const solution = new Solution()
solution.createSchedule()
console.log(
  solution.schedule
)
