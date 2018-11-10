<template lang="pug">
  .call__chantal(@mouseover="hover = true", @mouseleave="hover = false", :class="{ blink, using, used }")
    .dropdown__wrapper(v-if="(hover || using) && !used")
      .dropdown
        h4 📞 L'appel à Chantal
        button(@click="use", v-if="!using") Utiliser
        span(v-if="using") {{ timer > 0 ? 'Encore ' + timer + ' secondes ...' : 'fini ...' }}
    .chantal__button
</template>

<script>
export default {
  data () {
    return {
      hover: false,
      using: false,
      timer: 60,
      used: false
    }
  },

  computed: {
    blink () {
      return this.timer % 2 === 0 && this.timer !== 60 && this.timer !== 0
    }
  },

  methods: {
    use () {
      this.using = true
      var timer = setInterval(() => {
        if (this.timer === 0) {
          clearInterval(timer)
          setTimeout(() => {
            this.using = false
            this.used = true
          }, 3000)
        } else {
          this.timer--
        }
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
  .call__chantal {
    position: absolute;
    bottom: 20px;
    left: 20px;

    .chantal__button {
      background-image: url('../assets/pictures/Chantal.jpg');
      background-position: 50% 50%;
      background-size: 100%;
      height: 80px;
      width: 80px;
      border-radius: 50px;
      border: 4px solid white;
      box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.3);
      transition: all .3s ease;
      z-index: 99;
    }

    &:not(.using):not(.used):hover .chantal__button {
      box-shadow: 0px 3px 12px 5px rgba(0, 0, 0, 0.3);
      border-color: #0d92ff;
      cursor: pointer;
    }

    &.blink .chantal__button {
      border-color: #0d92ff;
    }

    &.used {
      opacity: .5;
    }

    .dropdown__wrapper {
      z-index: 1;
      position: absolute;
      min-height: 88px;
      width: 400px;
      left: 88px;
      bottom: 0px;
      .dropdown {
        position: absolute;
        left: 10px;
        bottom: 20px;
        width: 230px;
        background-color: white;
        box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        border-radius: 8px;

        h4 { margin: 0 0 10px 0; }
      }
    }
  }
</style>
