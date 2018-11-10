<template lang="pug">
  .board
    .timeline__wrapper
      .timeline__area
        span(v-if="game.board.length === 0") Déposes ta première carte ici
      //- .timeline
      draggable(
        class="timeline",
        v-model="game.board",
        :options="{ group: { name: 'timeline', pull: false, put: 'desk' }, sort: false, fallbackOnBody: true }",
        @add="checkMove"
      )
        .event(v-for="(event, index) in game.board", :key="index")
          card(:event="event", width="140px", height="220px")
    .desk__wrapper
      .desk(v-if="game.desk.length > 0")
        button(@click="game.toPrevCardOfTheDeck()") Image précedente
        draggable(v-model="topOfTheDesk", :options="{ group: { name: 'desk', pull: 'timeline', put: false } }")
          card(v-for="(event, index) in topOfTheDesk",  :event="event", :enabled-date="false", width="140px", height="220px", :draggable="true")
        button(@click="game.toNextCardOfTheDeck()") Image suivante
      .end__message(v-else)
        h1 🏆 Fin du jeu ! 🏆
        h2 Bravo, tu as reussi à remettre un peu d'ordre dans tes souvenirs
    modal(name="success")
      .content.success__content(@click="$modal.pop()")
        h1.title ✅ Bien joué ! 👌
        card(v-if="lastCardPlay", :event="lastCardPlay", :enable-preview="false", width="420px", height="660px")
        span.text *Clique n'importe où pour revenir au jeu
    modal(name="error")
      .content.error__content(@click="$modal.pop()")
        h1.title ❌ Il semblerait que tu te sois trompé, recommence ! ❌
        card(v-if="lastCardPlay", :event="lastCardPlay", :enabled-date="false", :enable-preview="false", width="420px", height="660px")
        span.text *Clique n'importe où pour revenir au jeu
    confetti-canvas(v-if="game.desk.length === 0")
</template>

<script>
import events from '@/events.js'
import Game from '@/TimelineGame.js'
import ConfettiCanvas from '@/components/ConffetiCanvas.vue'
import Draggable from 'vuedraggable'

import Card from '@/components/Card.vue'

export default {
  components: {
    Card,
    Draggable,
    ConfettiCanvas
  },

  data () {
    return {
      game: new Game(events, { onSuccess: this.onSuccess, onError: this.onError }),
      lastCardPlay: null
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
    },

    onSuccess (event) {
      this.lastCardPlay = event
      this.$modal.push('success')
    },

    onError (event) {
      this.lastCardPlay = event
      this.$modal.push('error')
    }
  }
}
</script>

<style lang="less">
  @font-face {
    font-family: "Playfair Display";
    src: url("../assets/fonts/PlayfairDisplay-Regular.ttf") format("ttf");
  }

  .board {
    font-family: 'Playfair Display', serif;
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
        border: 3px dashed rgba(255, 255, 255, .4);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 60px;
        color:  rgba(255, 255, 255, .4);
      }

      .timeline {
        padding-top: 10px;
        min-height: 60%;
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
      
        .event__card.sortable-chosen:after {
          content: '';
          position: absolute;
          top: -8px;
          bottom: -8px;
          left: -8px;
          right: -8px;
          opacity: .6;
          border-radius: 8px;
          background-color: #0d92ff;
          z-index: 2;
        }
      }
    }

    .desk__wrapper {
      height: 32%;
      justify-content: center;

      .desk button {
        margin: 0px 20px;
        width: 100px;
      }

      .end__message {
        text-align: center;
        color: white;
      }
    }

    button {
      background: linear-gradient(#1245ee, #0f2188);
      border: 1px solid #0f2188;
      color: rgba(255, 255, 255, .7);
      padding: 6px 8px;
      border-radius: 4px;
      text-align: center;
    }

    button:hover {
      cursor: pointer;
      background: linear-gradient(tint(#1245ee, 10%), tint(#0f2188, 10%));
      color: rgba(255, 255, 255, 8);
    }
  }

  .modal-wrapper {
    .modal-backdrop {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .modal-content-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;

      .modal-content {
        position: relative;
        left: inherit;
        right: inherit;
        margin: inherit;
        padding: inherit;
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;

        &.error__content, &.success__content {
          .event__card:after {
            content: '' ;
            display: block;
            position: absolute;
            top: -13px;
            bottom: -13px;
            left: -13px;
            right: -13px;
            border-radius: 14px;
          }
        }

        &.error__content .event__card:after {
          border: 5px solid #ff4949;
        }

        &.success__content .event__card:after {
          border: 5px solid #33da33;
        }

        span.text {
          margin-top: 10px;
        }
      }
    }
  }
</style>
