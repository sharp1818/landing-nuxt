<template>
  <div class="container">
    <Modal v-if="modal" :message="modalMessage" :filename="filename" @close-modal="closeModal" />
    <h2>Formulario de Contacto</h2>
    <div class="subtitle">
      Escríbenos y nos pondremos en contacto contigo
    </div>
    <div class="inputs">
      <input
        v-model="name"
        class="input"
        :class="{'input-alert' : emptyNameField }"
        type="text"
        placeholder="Nombre y Apellido"
      >
      <input
        v-model="mail"
        class="input"
        :class="{'input-alert' : emptyMailField }"
        type="email"
        placeholder="Correo Electrónico"
      >
      <input
        v-model="cellphone"
        class="input"
        :class="{'input-alert' : emptyPhoneField }"
        type="tel"
        placeholder="Número de celular"
      >
      <textarea
        v-model="message"
        class="input textarea"
        :class="{'input-alert' : emptyMessageField }"
        placeholder="Deje su mensaje aqui"
      />
    </div>
    <button class="submit-button" type="submit" @click="checkFields">
      Enviar
    </button>
  </div>
</template>

<script>
import Modal from '../Modal.vue'
export default {
  name: 'Form',
  components: { Modal },
  data () {
    return {
      name: '',
      emptyNameField: null,
      mail: '',
      emptyMailField: null,
      cellphone: '',
      emptyPhoneField: null,
      message: '',
      emptyMessageField: null,
      modal: null,
      modalMessage: '',
      filename: ''
    }
  },
  methods: {
    checkFields () {
      if (this.name === '' || this.mail === '' || this.cellphone === '' || this.message === '') {
        this.modal = true
        this.modalMessage = 'Completa los campos'
        this.name === '' ? this.emptyNameField = true : this.emptyNameField = false
        this.mail === '' ? this.emptyMailField = true : this.emptyMailField = false
        this.cellphone === '' ? this.emptyPhoneField = true : this.emptyPhoneField = false
        this.message === '' ? this.emptyMessageField = true : this.emptyMessageField = false
        this.filename = 'modal-alert-icon'
      }
      if (this.name !== '' && this.mail !== '' && this.cellphone !== '' && this.message !== '') {
        this.modal = true
        this.modalMessage = 'Mensaje Enviado!'
        this.name = ''
        this.mail = ''
        this.cellphone = ''
        this.message = ''
        this.emptyNameField = false
        this.emptyMailField = false
        this.emptyPhoneField = false
        this.emptyMessageField = false
        this.filename = 'modal-check-icon'
      }
    },
    closeModal () {
      this.modal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  border-radius: 8px;
  padding: 10px;
  width: 250px;
  @media (min-width:400px) {
      width: 350px;
  }
  @media (min-width:750px) {
      width: 420px;
  }
  @media (min-width:1000px) {
      width: 500px;
  }
  .subtitle{
    text-align: center;
    font-size: 16px;
    padding: 0px
  }
  .inputs{
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 250px;
    @media (min-width:400px) {
      width: 350px;
    }
    @media (min-width:750px) {
      width: 420px;
    }
    @media (min-width:1000px) {
      width: 500px;
    }
    .input-alert{
      border: 1px solid red !important
    }
    .input {
      padding: 8px;
      outline: none;
      border: 1px solid #50dd40;
      border-radius: 8px;
      margin: 4px;
      font-size:16px
    }
    .textarea {
      height: 70px;
    }
  }
  .submit-button{
    background-color: #fff;
    border: 1px solid #404040;
    border-radius: 8px;
    cursor: pointer;
    color: #202020;
    padding: 6px;
    font-size: 16px;
    &:active{
      background-color: #50dd40;
      color: #fff;
    }
  }
}
</style>
