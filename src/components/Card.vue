<template lang="pug">
  .event__card(:style="[ background ]")
    span.event__card__date(v-if="enabledDate") {{ event.year }}
    span.event__card__title {{ event.title }}
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    },
    enabledDate: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    background () {
      return {
        backgroundImage: `url(${this.event.pictureUrl})`
      }
    }
  }
}
</script>

<style lang="less" scoped>

  .event__card {
    border: 8px solid white;
    box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 140px;
    height: 220px;
    background-size: cover;
    background-position: 50% 50%;
    
    .event__card__date, .event__card__title {
      position: absolute;
      background-color: white;
      padding: 4px 8px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }

    .event__card__title {
      bottom: 0px;
    }

    .event__card__date {
      bottom: 26px;
    }
  }
</style>
