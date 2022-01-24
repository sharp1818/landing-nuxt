<template>
  <div class="container">
    <div class="title">
      <h1>Contáctanos</h1>
    </div>
    <div class="contact-card-layout">
      <div class="contact-card">
        <Info info="Av. Grove Street xxxx" filename="contact-gps-icon" background="#2069f8" />
        <Info info="+01 7777 777" filename="contact-phone-icon" background="#615990" />
        <Info info="email@example.com" filename="contact-mail-icon" background="#129987" />
        <Info info="+51 999 999 999" filename="contact-cellphone-icon" background="#d14947" />
      </div>
    </div>
    <div class="form">
      <Form />
    </div>
    <div class="map">
      <Map />
    </div>
  </div>
</template>

<script>
import Info from '../components/contacto/Info.vue'
import Form from '../components/contacto/Form.vue'
import Map from '../components/contacto/Map.vue'
export default {
  name: 'Contacto',
  components: { Form, Info, Map }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    color: white;
    letter-spacing: 4px;
  }
  .contact-card-layout{
    display: flex;
    align-items: center;
    justify-content: center;
    .contact-card{
      display: grid;
      justify-items: center;
      padding: 20px;
      column-gap: 30px;
      row-gap: 18px;
      grid-template-columns: repeat(1, 1fr);
      @media (min-width: 460px) {
        row-gap: 30px;
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 950px) {
        display: flex;
        justify-content: center;
        gap: 20px;
      }
    }
  }
  .form{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .map{
    display: flex;
    padding: 0px 20px;
    @media (min-width: 750px) {
      padding: 10px 100px;
    }
  }
}
</style>
