<template lang="pug">
  canvas#confetti-holder
</template>

<script>
import "confetti-js"

const SETTINGS = {
  target: 'confetti-holder',
  max: '408',
  size: '1',
  animate: true,
  props: [
    'circle',
    'square',
    'triangle',
    'line'
  ],
  colors: [
    [
      165,
      104,
      246
    ],
    [
      230,
      61,
      135
    ],
    [
      0,
      199,
      228
    ],
    [
      253,
      214,
      126
    ]
  ],
  clock: '25',
  rotate: true
}

export default {
  data () {
    return {
      confetti: null
    }
  },

  mounted () {
    this.confetti = new ConfettiGenerator(SETTINGS)
    this.confetti.render()
  }
}
</script>

<style lang="less">
  canvas#confetti-holder {
    position: absolute;
    top: 0;
  }
</style>

