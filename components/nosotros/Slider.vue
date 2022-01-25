<template>
  <div class="slider">
    <InfiniteSlideBar>
      <img :src="require(`../../assets/icons/nosotros/slider/1.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/2.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/3.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/4.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/5.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/6.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/7.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/8.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/9.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/10.svg`)" alt="">
      <img :src="require(`../../assets/icons/nosotros/slider/11.svg`)" alt="">
    </InfiniteSlideBar>
  </div>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'
export default {
  name: 'Slider',
  components: {
    InfiniteSlideBar
  }
}
</script>

<style lang="scss" scoped>
.slider {
    display: flex;
    flex-direction: row;
    background-color: #fff;
  img {
    width: 150px;
    height: 80px;
    object-fit: contain;
    margin: 15px 30px;
    @media (min-width:320px) {
      width: 70px;
      height: 40px;
      margin: 15px 10px;
    }
    @media (min-width: 780px) {
      width: 80px;
      height: 54px;
      margin: 15px 15px;
    }
    @media (min-width: 1100px) {
      margin: 15px 30px;
    }
    @media (min-width: 1500px) {
      margin: 15px 60px;
    }
  }
}
</style>
