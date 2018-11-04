<template lang="pug">
  .board
    .timeline__wrapper
      .timeline__area
        span(v-if="game.board.length === 0") Déposes ta première carte ici 
      //- .timeline
      draggable(
        class="timeline",
        v-model="game.board",
        :options="{ group: { name: 'timeline', pull: false, put: 'desk' }, sort: false }",
        @add="checkMove"
      )
        .event(v-for="(event, index) in game.board", :key="index") 
          card(:event="event")
    .desk__wrapper(v-if="game.desk.length > 0")
      .desk
        button(@click="game.toPrevCardOfTheDeck()") prev
        draggable(v-model="topOfTheDesk", :options="{ group: { name: 'desk', pull: 'timeline', put: false } }")
          card(v-for="(event, index) in topOfTheDesk",  :event="event", :enabled-date="false")
        button(@click="game.toNextCardOfTheDeck()") next
</template>

<script>
import events from '@/events.js'
import Game from '@/TimelineGame.js'
import Draggable from 'vuedraggable'

import Card from '@/components/Card.vue'

export default {
  components: {
    Card,
    Draggable
  },

  data () {
    return {
      game: new Game(events)
    }
  },

  computed: {
    topOfTheDesk: {
      get () {
        return [this.game.topOfTheDesk]
      },
      set (value) {
        // do Nothings
      }
    }
  },

  methods: {
    checkMove (evt) {
      this.game.board.splice(evt.newIndex, 1)
      this.game.play(this.game.topOfTheDesk[0], evt.newIndex)
    }
  }
}
</script>

<style lang="less">
  .board {
    height: 100vh;

    button.interval.active {
      background-color: blue;
    }

    .timeline__wrapper, .desk__wrapper, .play__wrapper {
      align-items: center;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
    }

    .timeline__wrapper .timeline, .desk__wrapper .desk {
      align-items: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .timeline__wrapper {
      height: 65%;
      position: relative;
      background-color: rgba(0, 0, 0, .08);
      justify-content: flex-start;

      .timeline__area {
        position: absolute;
        top: 5px;
        bottom: 5px;
        left: 10px;
        right: 10px;
        border-radius: 16px;
        border: 3px dashed rgba(0, 0, 0, .1);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 60px;
        color:  rgba(0, 0, 0, .1);
      }
      
      .timeline {
        padding-top: 10px;
        height: 100%;
        width: 100%;
        position: relative;
        align-items: flex-start;
        flex-wrap: wrap;
        .event {
          flex-basis: 13%;
          margin: 5px 1%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .desk__wrapper {
      height: 32%;
      justify-content: center;
    }
  }
</style>

