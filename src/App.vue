<template lang="pug">
  #app
    board
</template>

<script>
import Board from '@/components/Board.vue'

export default {
  components: {
    Board
  },

  name: 'app'
}
</script>

<style lang="less">
  body {
    margin: 0px;
    #app {
      height: 100vh;
    }
  }
</style>
