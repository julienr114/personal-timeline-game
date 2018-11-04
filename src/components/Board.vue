<template lang="pug">
  .board
    .timeline__wrapper
      //- .timeline
      //- button.interval(@click="game.selectedInterval = 0", :class="{ active: game.selectedInterval === 0 }") x
      draggable(
        class="timeline",
        v-model="game.board",
        :options="{ group: { name: 'timeline', pull: false, put: 'desk' }, sort: false }",
        @add="checkMove"
      )
          .event(v-for="(event, index) in game.board") 
            card(:event="event", :key="index")
          //- button.interval(@click="game.selectedInterval = index + 1", :class="{ active: game.selectedInterval === index + 1 }") x
    .desk__wrapper(v-if="game.desk.length > 0")
      .desk
        button(@click="game.toPrevCardOfTheDeck()") prev
        draggable(v-model="topOfTheDesk", :options="{ group: { name: 'desk', pull: 'timeline', put: false } }")
          card(v-for="(event, index) in topOfTheDesk",  :event="event", :enabled-date="false")
        button(@click="game.toNextCardOfTheDeck()") next
    //- .play__wrapper
      button(v-if="game.selectedInterval !== null", @click="game.play()") Play
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
      background-color: rgba(0, 0, 0, .08);
      border-bottom: 1px solid rgba(0, 0, 0, .1);
      justify-content: flex-start;
      
      .timeline {
        flex-wrap: wrap;
        min-height: 236px;
        width: 100%;
        position: relative;
        .event {
          flex-basis: 16%;
        }
      }

    }

    .desk__wrapper {
      height: 32%;
      justify-content: center;
    }

    .play__wrapper {
      height: 3%;
    }
  }
</style>

