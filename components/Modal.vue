<template>
  <div class="modal">
    <div class="modal-content">
      <p>
        {{ message }}
      </p>
      <img :src="require(`../assets/icons/${filename}.svg`)" alt="" @click="closeModal">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    message: {
      type: String,
      default: ''
    },
    filename: {
      type: String,
      default: 'modal-check-icon'
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal{
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .modal-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    width: 280px;
    padding: 40px 30px;
    background-color: #fff;
    p{
      text-align: center;
      padding: 4px;
    }
    img{
      width: 30px;
      align-self: center;
    }
  }
}
</style>
