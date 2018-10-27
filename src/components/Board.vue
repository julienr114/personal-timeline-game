<template lang="pug">
  .board
    .timeline
      h2 Timeline
      button.interval(@click="game.selectedInterval = 0", :class="{ active: game.selectedInterval === 0 }") x
      .event(v-for="(event, index) in game.board")
        img(:src="event.pictureUrl", width="200px")
        span {{ event.year }}
        button.interval(@click="game.selectedInterval = index + 1", :class="{ active: game.selectedInterval === index + 1 }") x
    .desk(v-if="game.desk.length > 0")
      h2 Desk
      button(@click="game.toPrevCardOfTheDeck()") prev
      img(:src="game.topOfTheDesk.pictureUrl", width="200px")
      button(@click="game.toNextCardOfTheDeck()") next
    button(v-if="game.selectedInterval !== null", @click="game.play()") Play
</template>

<script>
import events from '@/events.js'
import Game from '@/TimelineGame.js'

export default {
  data () {
    return {
      game: new Game(events)
    }
  }
}
</script>

<style lang="less">
  button.interval.active {
    background-color: blue;
  }
</style>

