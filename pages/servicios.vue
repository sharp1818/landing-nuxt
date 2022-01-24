<template>
  <div>
    <div class="title">
      <Title :title="title" />
    </div>
    <div class="layout">
      <div class="container-list">
        <ul v-for="(service, index) in services" :key="index" :class="active" class="list">
          <li :class="service.class" @click="nameTitle(service.title), showService(service.description, service.photo), makeActive(service.class)">
            {{ service.name }}
          </li>
        </ul>
      </div>
      <div class="content">
        <div>
          <div class="description">
            {{ description }}
          </div>
          <div class="image">
            <img :src="require(`../assets/imgs/services/${photo}.jpg`)" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '../components/servicios/Title.vue'
export default {
  name: 'Servicios',
  components: { Title },
  data () {
    return {
      active: '',
      title: 'NUESTROS SERVICIOS',
      description: 'Ofrecemos calidad, al mejor precio',
      photo: 'service-logo',
      services: [
        { name: 'Instalaciones Eléctricas', class: 'class1', title: 'Mantenimientos e Instalaciones Eléctricas', description: 'Brindamos servicios de instalación y mantenimiento eléctrico en comercios, residencias e industrias, respetando las normas del código nacional de electricidad y el reglamento nacional de edificaciones. Ofrecemos soluciones a la medida al precio justo, con el estándar de calidad, seguridad para lograr la satisfacción de cada uno de nuestros clientes.', photo: '1' },
        { name: 'Sistemas Eléctricos', class: 'class2', title: 'Mantenimiento, Instalacion y Diseño de Sistemas Eléctricos', description: 'Brindamos servicios de diseño de sistemas eléctricos de Media y Baja Tensión, subestaciones eléctricas, sistema de iluminación, estudios eléctricos de flujo de carga, cortocircuito, arranque de motores, arco eléctrico. Ademas realizamos mantenimiento preventivo y correctivo.', photo: '2' },
        { name: 'Sistemas Electrónicos', class: 'class3', title: 'Mantenimiento, Instalacion y Diseño de Sistemas Eléctrónicos', description: 'Brindamos el servicio de Programación de PLC y HMI,Configuracion y puesta en marcha de Variadores de frecuencia para servomotores, Instalación de sistemas de supervisión y control SCADA, Comunicacion Inalámbrica, Telemetría, Tableros de control de PLC, Tambien brindamos soporte a plantas de nivel, presioón, entre otros.', photo: '3' },
        { name: 'Panos Eléctricos Industriales y Domiciliarios', class: 'class4', title: 'Elaboración y Diseño de Planos Industriales y Domiciliarios', description: 'Brindamos el servicio de planos Eléctricos, Diagramas Unifilares, Conexión Domiciliaria, Red de Alimentación, Banco de Medidores, Circuitos Eléctricos de Alimentación, Conmutaciones, Bombas para Cistenas y Tanque, Sistemas de Ascensores, Red de Alumbrado exterior, hacemos todo Respetando las Normas Técnicas Vigentes para que el inspector de Enel apruebe el proyecto.', photo: '4' },
        { name: 'Sistema de Pozo a Tierra', class: 'class5', title: 'Mantenimiento, Diseño, Construccion y Certificación de Pozos a Tierra', description: 'Ofrecemos Mantenimiento, Construcción, Medición, Reactivación y Otorgamos Certificado de Protocolo de pruebas de Pozo a Tierra firmados por nuestros Ingenieros Electricistas, colegiados y habilitados por el CIP (Colegio de Ingenieros del Perú)', photo: '5' }
      ]
    }
  },
  methods: {
    makeActive (item) {
      this.active = item
    },
    nameTitle (name) {
      this.title = name.toUpperCase()
    },
    showService (description, photo) {
      this.description = description
      this.photo = photo
    }
  }
}
</script>

<style lang="scss" scoped>
  div{
    .layout{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
      .container-list{
        display: flex;
        flex-direction: column;
        .list{
        padding: 10px;
        font-size: 18px;
        font-weight: 500;
        color: #202020;
        background-color: white;
        width: 400px;
        list-style: none;
        cursor: pointer;
        }
        .class1 .class1,
        .class2 .class2,
        .class3 .class3,
        .class4 .class4,
        .class5 .class5 {
          color: #56c556
        }
      }
      .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #c5b8c5;
        width: 560px;
        padding: 10px 20px;
        .description{
          font-size: 20px;
          text-align: justify;
          padding: 0px 20px 10px
        }
        .image {
          display: flex;
          justify-content: center;
            img{
            opacity: 80%;
            border: 1px solid #202020;
            border-radius: 10px;
            object-fit: cover;
            width: 520px;
            height: 560px;
            }
        }
      }
    }
  }
</style>
