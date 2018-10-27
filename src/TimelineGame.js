export default class Timeline {
  constructor (events) {
    this.events = this.initializeEvents(events)
    this.shuffelisedEvents = this.shuffle(this.events.map((e, i) => i))
    this.topOfTheDeskIndex = 0
    this.selectedInterval = null
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
    return this.shuffelisedEvents.map(index => this.events[index]).filter(event => !event.onBoard)
  }

  get topOfTheDesk () {
    if (this.topOfTheDeskIndex === this.desk.length - 1) {
      this.topOfTheDeskIndex = 0
    }
    return this.desk[this.topOfTheDeskIndex]
  }

  play (event = this.topOfTheDesk, targetIndex = this.selectedInterval) {
    this.rounds++
    if (this.eventCanBePutThere(event, targetIndex)) {
      this.selectedInterval = null
      this.events[event.id].onBoard = true
      this.board.splice(targetIndex, 0, event)
    } else {
      this.fails++
      window.alert('Fail !')
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

  toNextCardOfTheDeck () {
    this.selectedInterval = null
    this.topOfTheDeskIndex < this.desk.length - 1 ? this.topOfTheDeskIndex++ : this.topOfTheDeskIndex = 0
  }

  toPrevCardOfTheDeck () {
    this.selectedInterval = null
    this.topOfTheDeskIndex > 0 ? this.topOfTheDeskIndex-- : this.topOfTheDeskIndex = this.desk.length - 1
  }

  shuffle (array) {
    let counter = array.length
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter)
      // Decrease counter by 1
      counter--
      // And swap the last element with it
      let temp = array[counter]
      array[counter] = array[index]
      array[index] = temp
    }
    return array
  }
}
