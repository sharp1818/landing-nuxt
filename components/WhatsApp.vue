<template>
  <div class="container">
    <a href="https://api.whatsapp.com/send/?phone=51977550475&text&app_absent=0" target="_blank">
      <img src="../assets/icons/whatsapp-icon.svg" class="icon" alt="">
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
padding: 10px 18px;
position: fixed;
bottom: 0;
right: 0;
z-index: 100;
  .icon{
    border-radius: 20px ;
    width: 60px;
    height: 60px;
  }
}
</style>
