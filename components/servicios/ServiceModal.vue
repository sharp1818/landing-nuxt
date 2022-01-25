<template>
  <div class="modal">
    <div class="content">
      <h2 class="title">
        {{ title }}
      </h2>
      <div class="image-frame">
        <img :src="require(`../../assets/imgs/servicios/${filename}.jpg`)" alt="">
      </div>
      <div class="description">
        {{ description }}
      </div>
      <div class="services-list">
        <ul v-for="(service, index) in list" :key="index">
          <li>
            {{ service.name }}
          </li>
        </ul>
      </div>
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
      default: ''
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
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 20px;
    width: 300px;
    border-radius: 20px;
    overflow: scroll;
    .title{
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .image-frame{
      display: flex;
      justify-content: center;
      padding: 10px 0px;
      opacity: 80%;
      img {
        width: 280px;
        height: 280px;
      }
    }
    .description{
      text-align: justify;
      font-size: 14px;
    }
    .services-list{
      padding: 10px 0px 10px 20px;
      font-size: 14px;
    }
    .close-button{
      display: flex;
      justify-content: center;
      button{
        font-size: 12px;
        border-radius: 4px;
        padding: 2px;
        background-color: rgb(211, 198, 231);
        outline: none;
      }
    }
    @media (min-width: 560px) {
      overflow: hidden;
      width: 480px;
      .image-frame{
        img {
        width: 400px;
        height: 400px;
        }
      }
      .description{
        font-size: 18px;
      }
      .services-list{
        font-size: 18px;
      }
      .close-button{
        button{
          font-size: 14px;
        }
      }
    }
  }
}
</style>
