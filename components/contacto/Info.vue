<template>
  <div class="box" :style="cssProps">
    <div class="icon-box">
      <div class="icon">
        <img :src="require(`../../assets/icons/contacto/${filename}.svg`)" alt="">
      </div>
    </div>
    <div class="text">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: {
    filename: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    cssProps () {
      return {
        '--background-color': this.background
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  min-width: 200px;
  max-width: 200px;
  border-radius: 40px;
  transition: 0.5s background-color;
  border: 1px solid var(--background-color);
  // box-shadow: 0px 0px 8px 1px var(--background-color);
  // -webkit-box-shadow: 0px 0px 8px 1px var(--background-color);
  // -moz-box-shadow: 0px 0px 8px 1px var(--background-color);
  // background-color: var(--background-color);
  @media (min-width:750px) {
    background-color: #fff;
    border: 1px solid #fff;
    min-width: 210px;
    max-width: 210px;
  }
  .icon-box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    padding: 6px;
    border-radius: 50%;
    background-color: var(--background-color);
    border: 4px solid #fff;
    @media (min-width:750px) {
      border: 4px solid var(--background-color);
      background-color: #fff;
      transition: 0.5s background-color;
      width: 80px;
      height: 80px;
    }
    .icon {
      display: flex;
      background-color: transparent;
      padding: 8px;
      border-radius: 50%;
      border: 1px solid #fff;
      background-color: rgb(255, 255, 255);
      @media (min-width:750px) {
        border: 2px solid var(--background-color);
        background-color: var(--background-color);
        transition: 0.5s background-color;
      }
      img{
        width: 20px;
        @media (min-width:750px) {
          width: 40px;
        }
      }
    }
  }
  .text{
    text-align: center;
    color: #202020;
    font-size: 16px;
    padding: 6px;
    color: #fff;
    @media (min-width:750px) {
      color: #202020;
      font-size: 18px;
    }
  }
  &:hover{
    border: 1px solid var(--background-color);
    box-shadow: 0px 0px 14px 1px var(--background-color);
    -webkit-box-shadow: 0px 0px 14px 1px var(--background-color);
    -moz-box-shadow: 0px 0px 14px 1px var(--background-color);
    background-color: var(--background-color);
    transition-delay: 0s;
    .icon-box{
      background-color: var(--background-color);
      border: 4px solid #fff;
      .icon{
        border: 1px solid #fff;
        background-color: rgb(255, 255, 255);
      }
    }
    .text{
      color: #fff;
    }
  }
}

</style>
