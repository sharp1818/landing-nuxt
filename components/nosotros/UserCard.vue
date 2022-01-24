<template>
  <div class="card">
    <div class="photo">
      <img :src="require(`../../assets/imgs/nosotros/${filename}.jpg`)" alt="">
    </div>
    <div class="info">
      <div class="name">
        {{ name }}
      </div>
      <div class="job">
        {{ job }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    job: {
      type: String,
      default: ''
    },
    filename: {
      type: Number,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  @media (min-width: 500px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .photo img{
    object-fit: cover;
    width: 150px;
    height: 225px;
    opacity: 70%;
    border-radius: 4%;
    @media (min-width: 300px) {
      width: 200px;
      height: 300px;
    }
    @media (min-width: 400px) {
      width: 220px;
      height: 330px;
    }
    @media (min-width: 780px) {
      width: 160px;
      height: 240px;
    }
    @media (min-width: 980px) {
      width: 220px;
      height: 330px;
    }
    @media (min-width: 1230px) {
      width: 150px;
      height: 225px;
    }
    @media (min-width: 1430px) {
      width: 200px;
      height: 300px;
    }
    &:hover{
      transform: scale(1.1);
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding-top: 12px;
    .name {
      font-size: 18px;
      @media (min-width: 900px) {
      font-size: 20px;
      }
    }
    .job {
      font-size: 18px;
      @media (min-width: 900px) {
      font-size: 20px;
      }
    }
    @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 0px 0px 20px;
    }
  }
}
</style>
