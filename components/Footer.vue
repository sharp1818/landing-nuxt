<template>
  <footer>
    <div class="links">
      <div>
        <a href="https://www.facebook.com/" target="_blank">
          <img src="../assets/icons/facebook-icon.svg" alt="" class="link-icon">
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="../assets/icons/instagram-icon.svg" alt="" class="link-icon email">
        </a>
      </div>
    </div>
    <div class="copyright">
      Copyright © 2022 Todos los derechos reservados
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
  position: relative;
  bottom: 0;
  width: 100%;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #fff;
  color: #202020;
  box-shadow: 0px 1px 14px 7px rgba(0,0,0,0.7);
  -webkit-box-shadow: 0px 1px 14px 7px rgba(0,0,0,0.7);
  -moz-box-shadow: 0px 1px 14px 7px rgba(0,0,0,0.7);

  .links{
    display: flex;
    flex-direction: row;
    gap: 10px;
    .link-icon{
      width: 30px;
      @media (max-width: 780px){
        width: 24px;
      }
    }
  }
  .copyright{
    text-align: center;
    font-size: 20px;
    @media (max-width: 780px){
      font-size: 18px;
    }
    @media (max-width: 500px){
      font-size: 16px;
    }
    @media (max-width: 375px){
      font-size: 14px;
    }
  }
}
</style>
