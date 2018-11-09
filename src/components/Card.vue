<template lang="pug">
  .event__card(:style="[ background, { width, height } ]")
    span.event__card__date(v-if="enabledDate") {{ event.year }}
    span.event__card__title {{ event.title }}
    .event__cart__showmore__button(v-if="enablePreview", @click="bigMode = true")
      .text Afficher en grand
    .big__card__wrapper(v-if="bigMode", @click="bigMode = false")
      .big__card
        img(:src="event.pictureUrl")
        span.text *Clique n'importe où pour revenir au jeu

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
    },
    enablePreview: {
      type: Boolean,
      default: true
    },
    width : {
      type: String,
      default: 'auto'
    },
    height: {
      type: String,
      default: 'auto'
    }
  },

  data () {
    return {
      bigMode: false
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
    background-color: #bebebe;
    background-size: cover;
    background-position: 50% 50%;
    
    .event__card__date, .event__card__title {
      position: absolute;
      border-radius: 6px;
      border: 2px solid #ad9a7e;
    }

    .event__card__title {
      bottom: 0px;
      padding: 4px 2px;
      left: -3px;
      right: -3px;
      text-align: center;
      font-size: 18px;
      color: #3e3845;
      background-color: antiquewhite;
      z-index: 1;
    }

    .event__card__date {
      bottom: 28px;
      z-index: 2;
      background: linear-gradient(0.25turn, #1245ee, #0f2188);
      color: white;
      padding: 4px 6px;
    }

    .event__cart__showmore__button {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      background: linear-gradient(black , transparent);
      padding: 15px 0px;
      color: white;
      text-align: center;
      transition: opacity .2s ease;
      opacity: 0;
      .text {
        transition: transform .3s ease;
        transform: translateY(-10px);
      }
    }

    &:hover .event__cart__showmore__button {
      opacity: 1;
      .text {
        transform: translateY(-5px);
      }

      &:hover {
        color: #ff206b;
        cursor: pointer;

      }
    }

    .big__card__wrapper {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 99;
      display: flex;
      justify-content: center;
      align-items: center;
      .big__card {
        height: 80%;
        border: 16px solid white;
        border-radius: 16px;
        img {
          height: 100%;
        }
        .text {
          color: rgba(255, 255, 255, .6);
          position: absolute;
          bottom: 20px;
          left: 0px;
          right: 0px;
          text-align: center;
        }
      }
    }
  }
</style>
