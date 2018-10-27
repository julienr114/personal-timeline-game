export default class Timeline {
  constructor (events) {
    this.events = this.initializeEvents(events)
    this.board = []
    this.rounds = 0
    this.fails = 0
  }

  initializeEvents (events) {
    return this.orderByDate(events).map((event, index) => {
      event.onBoard = false
      event.id = index
      return event
    })
  }

  orderByDate (events) {
    return events.sort((a, b) => a.year - b.year)
  }

  get desk () {
    return this.events.filter(event => !event.onBoard)
  }

  play (event, targetIndex = 0) {
    this.rounds++
    if (this.eventCanBePutThere(event, targetIndex)) {
      this.events[event.id].onBoard = true
      this.board.splice(targetIndex, 0, event)
    } else {
      this.fails++
    }
  }

  getInterval (targetIndex) {
    return {
      MIN: this.board[targetIndex - 1] ? this.board[targetIndex - 1].year : this.events[0].year,
      MAX: this.board[targetIndex] ? this.board[targetIndex].year : this.events[this.events.length - 1].year
    }
  }

  eventCanBePutThere (event, targetIndex) {
    const interval = this.getInterval(targetIndex)
    return event.year >= interval.MIN && event.year <= interval.MAX
  }
}
