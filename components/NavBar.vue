<template>
  <header>
    <div @click="makeActive('inicio')">
      <NuxtLink :to="{name: 'index'}">
        <img src="../assets/icons/emprise-logo.svg" alt="" class="logo-icon">
      </NuxtLink>
    </div>
    <nav v-if="!mobile" class="desktop-navigation" @click.prevent>
      <ul>
        <div>
          <div>
            <NuxtLink :to="{name: 'index'}" class="inicio">
              Inicio
            </NuxtLink>
          </div>
          <div>
            <NuxtLink :to="{name: 'nosotros'}" class="nosotros">
              Nosotros
            </NuxtLink>
          </div>
          <div>
            <NuxtLink :to="{name: 'servicios'}" class="servicios">
              Servicios
            </NuxtLink>
          </div>
          <div>
            <NuxtLink :to="{name: 'contacto'}" class="contacto">
              Contacto
            </NuxtLink>
          </div>
        </div>
      </ul>
    </nav>
    <transition v-click-outside="onClickOutside" name="mobile-navigation">
      <ul v-if="mobileNav" class="mobile-navigation">
        <div @click="hideMobileNav">
          <NuxtLink :to="{name: 'index'}" class="inicio">
            Inicio
          </NuxtLink>
        </div>
        <div @click="hideMobileNav">
          <NuxtLink :to="{name: 'nosotros'}" class="nosotros">
            Nosotros
          </NuxtLink>
        </div>
        <div @click="hideMobileNav">
          <NuxtLink :to="{name: 'servicios'}" class="servicios">
            Servicios
          </NuxtLink>
        </div>
        <div @click="hideMobileNav">
          <NuxtLink :to="{name: 'contacto'}" class="contacto">
            Contacto
          </NuxtLink>
        </div>
      </ul>
    </transition>
    <div v-if="mobile" v-click-outside="onClickOutside" class="menu-icon">
      <img src="../assets/icons/menu-icon.svg" alt="" @click="toggleMobileNav">
    </div>
  </header>
</template>

<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'NavBar',
  directives: {
    clickOutside: vClickOutside.directive
  },
  data () {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  mounted () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  methods: {
    makeActive (item) {
      this.active = item
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    },
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    hideMobileNav () {
      this.mobileNav = false
    },
    onClickOutside () {
      this.mobileNav = false
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  z-index: 99;
  background-color: #fff;
  padding: 20px 0px 20px 100px;
  display: flex;
  width: 100%;
  flex-direction: row;
  box-shadow: 0px 1px 14px 7px rgba(0,0,0,0.7);
  -webkit-box-shadow: 0px 1px 14px 7px rgba(0,0,0,0.7);
  -moz-box-shadow: 0px 1px 14px 7px rgba(0,0,0,0.7);
  @media (max-width: 780px) {
    padding: 14px 0px 14px 30px;
  }
  .logo-icon{
    display: flex;
    flex: 1;
    width: 50px;
    @media (max-width: 780px){
      width: 40px;
    }
  }
  .desktop-navigation{
    padding-right: 150px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 2;
    ul div{
      display: flex;
      flex-direction: row;
      a{
        text-decoration: none !important;
        font-size: 20px;
        text-transform: uppercase;
        font-weight: 600;
        color: #202020;
        padding: 10px;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        &:hover{
          color: #009090;
        }
      }
      }
        .nuxt-link-exact-active{
          color: #009090;
        }
  }
  .mobile-navigation{
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 100;
    max-width: 250px;
    height: 100%;
    left: 0;
    top: 0;
    padding: 40px 100px 0px 30px;
    background-color: #009090;
    div {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    padding-bottom: 6px;
      a{
        text-decoration: none;
        font-size: 18px;
        font-weight: 400;
        text-transform: uppercase;
        color: #fff;
      }
      .nuxt-link-exact-active{
        font-size: 18px;
        font-weight: 600;
        color: #202020
      }
    }
  }
  .menu-icon{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 2;
    padding-right: 30px;
  }
  .mobile-navigation-enter-active,
  .mobile-navigation-leave-active {
      transition: all 1s ease ;
  }
  .mobile-navigation-enter{
      transform: translateX(-250px);
  }
  .mobile-navigation-enter-to{
      transform: translateX(0px);
  }
  .mobile-navigation-leave-to{
      transform: translateX(-250px);
  }
}

</style>
