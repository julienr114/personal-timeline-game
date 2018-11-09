<template lang="pug">
  .modal__wrapper
    .modal__content
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
  .modal__wrapper {
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
      .modal__content {
        width: 400px;
        border-radius: 16px;
      }
    }
</style>
