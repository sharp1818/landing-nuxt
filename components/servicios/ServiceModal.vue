<template>
  <div class="modal">
    <div class="content">
      <h2 class="title">
        {{ title }}
      </h2>
      <div class="image-frame">
        <img src="../../assets/imgs/servicios/1.jpg" alt="">
      </div>
      <div class="description">
        {{ description }}
      </div>
      <ul v-for="(service, index) in list" :key="index">
        <li>
          {{ service.name }}
        </li>
      </ul>
      <div class="close-button" @click="closeModal">
        <button>
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceModal',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    filename: {
      type: String,
      default: 'modal-check-icon'
    },
    description: {
      type: String,
      default: 'description'
    },
    list: {
      type: Array,
      default: () => []
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 101;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .content{
    background-color: white;
    padding: 10px;
      .close-button {
        display: flex;
        justify-content: center;
        button{
          font-size: 14px;
          border-radius: 4px;
          padding: 2px;
          background-color: rgb(211, 198, 231);
          outline: none;
        }
      }
  }
}
</style>
