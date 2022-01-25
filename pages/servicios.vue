<template>
  <div class="about-us">
    <ServiceModal v-if="modal" @close-modal="closeModal" />
    <div class="title">
      <h1>
        NUESTROS SERVICIOS
      </h1>
    </div>
    <div class="layout">
      <div class="container-service">
        <ul v-for="(service, index) in services" :key="index" :class="active" class="service" @click="closeModal">
          <li class="service-layout">
            <div class="service-background">
              {{ service.name }} <img src="../assets/icons/servicios/arrow.svg" alt="" class="arrow-icon">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceModal from '../components/servicios/ServiceModal.vue'
export default {
  name: 'Servicios',
  components: { ServiceModal },
  data () {
    return {
      modal: null,
      title: '',
      description: 'Ofrecemos calidad, al mejor precio',
      photo: 'service-logo',
      services: [
        { name: 'Instalaciones Eléctricas', class: 'class1', title: 'Mantenimientos e Instalaciones Eléctricas', description: 'Brindamos servicios de instalación y mantenimiento eléctrico en comercios, residencias e industrias, respetando las normas del código nacional de electricidad y el reglamento nacional de edificaciones. Ofrecemos soluciones a la medida al precio justo, con el estándar de calidad, seguridad para lograr la satisfacción de cada uno de nuestros clientes.', photo: '1' },
        { name: 'Sistemas Eléctricos', class: 'class2', title: 'Mantenimiento, Instalacion y Diseño de Sistemas Eléctricos', description: 'Brindamos servicios de diseño de sistemas eléctricos de Media y Baja Tensión, subestaciones eléctricas, sistema de iluminación, estudios eléctricos de flujo de carga, cortocircuito, arranque de motores, arco eléctrico. Ademas realizamos mantenimiento preventivo y correctivo.', photo: '2' },
        { name: 'Sistemas Electrónicos', class: 'class3', title: 'Mantenimiento, Instalacion y Diseño de Sistemas Eléctrónicos', description: 'Brindamos el servicio de Programación de PLC y HMI,Configuracion y puesta en marcha de Variadores de frecuencia para servomotores, Instalación de sistemas de supervisión y control SCADA, Comunicacion Inalámbrica, Telemetría, Tableros de control de PLC, Tambien brindamos soporte a plantas de nivel, presioón, entre otros.', photo: '3' },
        { name: 'Panos Eléctricos Industriales', class: 'class4', title: 'Elaboración y Diseño de Planos Industriales', description: 'Brindamos el servicio de planos Eléctricos, Diagramas Unifilares, Conexión Domiciliaria, Red de Alimentación, Banco de Medidores, Circuitos Eléctricos de Alimentación, Conmutaciones, Bombas para Cistenas y Tanque, Sistemas de Ascensores, Red de Alumbrado exterior, hacemos todo Respetando las Normas Técnicas Vigentes para que el inspector de Enel apruebe el proyecto.', photo: '4' },
        { name: 'Panos Eléctricos Domiciliarios', class: 'class5', title: 'Elaboración y Diseño de Planos Domiciliarios', description: 'Brindamos el servicio de planos Eléctricos, Diagramas Unifilares, Conexión Domiciliaria, Red de Alimentación, Banco de Medidores, Circuitos Eléctricos de Alimentación, Conmutaciones, Bombas para Cistenas y Tanque, Sistemas de Ascensores, Red de Alumbrado exterior, hacemos todo Respetando las Normas Técnicas Vigentes para que el inspector de Enel apruebe el proyecto.', photo: '5' },
        { name: 'Sistema de Pozo a Tierra', class: 'class6', title: 'Mantenimiento, Diseño, Construccion y Certificación de Pozos a Tierra', description: 'Ofrecemos Mantenimiento, Construcción, Medición, Reactivación y Otorgamos Certificado de Protocolo de pruebas de Pozo a Tierra firmados por nuestros Ingenieros Electricistas, colegiados y habilitados por el CIP (Colegio de Ingenieros del Perú)', photo: '6' }
      ]
    }
  },
  methods: {
    closeModal () {
      this.modal = !this.modal
    }
  }
}
</script>

<style lang="scss" scoped>
  .about-us{
    .title{
      display: flex;
      justify-content: center;
      align-items:center;
      text-align: center;
      color: white;
      letter-spacing: 4px;
    }
    .layout{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
      .container-service{
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 20px;
        .service{
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          font-size: 16px;
          font-weight: 500;
          color: rgb(43, 0, 83);
          width: 280px;
          height: 280px;
          background-size: cover;
          opacity: 50%;
          list-style: none;
          cursor: pointer;
          .service-layout{
            display: flex;
            align-items: center;
            gap: 8px;
            .service-background{
              background-color: #009090c5;
              border-radius: 6px;
              padding: 2px 6px;
            }
          }
          .arrow-icon{
            width: 12px;
            height: 12px;
          }
          &:hover{
            transform:scale(1.04);
            opacity: 90%;
            .service-layout{
              .service-background {
                transform: translateX(10px);
              }
            }
          }
          @media (min-width:480px) {
            width: 400px;
            height: 400px;
            font-size: 24px;
            .arrow-icon{
              width: 16px;
              height: 16px;
            }
          }
        }
        .service:nth-child(1){
          background-image: url(../assets/imgs/servicios/fondo/1.jpg);
        }
        .service:nth-child(2){
          background-image: url(../assets/imgs/servicios/fondo/2.jpg);
        }
        .service:nth-child(3){
          background-image: url(../assets/imgs/servicios/fondo/3.jpg);
        }
        .service:nth-child(4){
          background-image: url(../assets/imgs/servicios/fondo/4.jpg);
        }
        .service:nth-child(5){
          background-image: url(../assets/imgs/servicios/fondo/5.jpg);
        }
        .service:nth-child(6){
          background-image: url(../assets/imgs/servicios/fondo/6.jpg);
        }
        @media (min-width:1000px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width:1400px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
</style>
