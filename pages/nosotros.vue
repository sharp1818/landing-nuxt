<template>
  <div class="layout">
    <div class="title">
      <h1>SOBRE NOSOTROS</h1>
    </div>
    <div class="info">
      Somos una empresa con 5 años de experiencia en el rubro de la Electricidad y Electrónica. Brindamos servicios para pequeña, mediana y gran empresa. Tambien realizamos trabajos en domicilios o negocios. Todos nuestros trabajos siguen protoclos establecidos por el gobierno.
    </div>
    <div class="team">
      <h2 class="team-title">
        NUESTRO EQUIPO
      </h2>
      <div class="team-cards">
        <div v-for="(user, index) in users" :key="index">
          <CardUser :name="user.name" :job="user.job" :filename="user.photo" />
        </div>
      </div>
    </div>
    <div class="slider-layout">
      <h2 class="slider-title">
        NUESTROS CLIENTES
      </h2>
      <div class="slider-box">
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '../components/nosotros/Slider.vue'
import CardUser from '../components/nosotros/UserCard.vue'
export default {
  name: 'Home',
  components: { CardUser, Slider },
  data () {
    return {
      users: [
        { name: 'Name lastName0', job: 'Senior xxxx xxxx', photo: 1 },
        { name: 'Name lastName1', job: 'Senior xxxx xxxx ', photo: 2 },
        { name: 'Name lastName2', job: 'Senior xxxx xxxx ', photo: 3 },
        { name: 'Name lastName3', job: 'Senior xxxx xxxx ', photo: 4 },
        { name: 'Name lastName4', job: 'Senior xxxx xxxx ', photo: 5 },
        { name: 'Name lastName5', job: 'Senior xxxx xxxx ', photo: 6 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  .title {
    color: white;
    letter-spacing: 4px;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .info {
    color: white;
    display: flex;
    justify-content: center;
    text-align: justify;
    padding: 20px 10px;
    font-size: 14px;
    @media (min-width:350px) {
      font-size: 16px;
      padding: 20px 15px;
    }
    @media (min-width:550px) {
      font-size: 18px;
      padding: 20px 30px;
    }
    @media (min-width:1000px) {
      font-size: 20px;
      padding: 20px 80px;
    }
    @media (min-width:1500px) {
      font-size: 20px;
      padding: 20px 150px;
    }
    @media (min-width:2000px) {
      font-size: 20px;
      padding: 20px 320px;
    }
  }
  .team {
    display: flex;
    flex-direction: column;
    align-items: center;
    .team-title {
      display: flex;
      justify-content: center;
      color: white;
      text-align: center;
      letter-spacing: 4px;
    }
    .team-cards {
      color: white;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      column-gap: 40px;
      row-gap: 40px;
      padding: 20px 0px;
      @media (min-width:300px) {
        grid-template-columns: repeat(1, 1fr);
      }
      @media (min-width:500px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width:780px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width:1230px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media (min-width:1500px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
  .slider-layout {
    .slider-title {
      display: flex;
      justify-content: center;
      text-align: center;
      color: white;
      letter-spacing: 4px;
    }
    .slider-box {
      padding-top: 20px;
    }
  }
}
</style>
