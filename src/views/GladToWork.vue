<template>
  <div id='GladToWork' class="GladToWork">
    <div class="container">
      <h2 v-if="russian" class="title wow animate__animated animate__fadeIn">Мы рады работать <span>с тобой!</span></h2>
      <h2 v-if="!russian" class="title wow animate__animated animate__fadeIn">We are glad to work <span>with you!</span></h2>
      <form v-if="russian" action="" class='d-flex justify-content-between flex-wrap' @submit.prevent="submitForm" method="post" >
        <input class='req short' type="text" placeholder="Полное имя" v-model="full_name">
        <input class='short' type="text" placeholder="Ссылка на сайт компании" v-model="url">
        <input class='req short' type="text" placeholder="Эл-почта" v-model="email">
        <select class='req short' v-model="industry">
          <option value="" disabled>Выберите направление</option>
          <option value="SMM">SMM</option>
          <option value="Web & Apps">Сайты и приложения</option>
          <option value="Branding">Брендинг</option>
          <option value="Perfomance">Продвижение</option>
        </select>
        <textarea class='big' placeholder="Текст"  rows="4" cols="50" v-model="text">
        </textarea>
        <div class='w-100 d-flex justify-content-lg-end justify-content-start'>
          <button class='button button_purple' type="submit">Отправить</button>
        </div>
      </form>

      <form v-if="!russian" action="" class='d-flex justify-content-between flex-wrap' @submit.prevent="submitForm" method="post" >
        <input class='req short' type="text" placeholder="Full name" v-model="full_name">
        <input class='short' type="text" placeholder="Сompany website" v-model="url">
        <input class='req short' type="text" placeholder="Email" v-model="email">
        <select class='req short' v-model="industry">
          <option value="" disabled>Choose a direction</option>
          <option value="SMM">SMM</option>
          <option value="Web & Apps">Web & Apps</option>
          <option value="Branding">Branding</option>
          <option value="Perfomance">Perfomance</option>
        </select>
        <textarea class='big' placeholder="Text"  rows="4" cols="50" v-model="text">
        </textarea>
        <div class='w-100 d-flex justify-content-lg-end justify-content-start'>
          <button class='button button_purple' type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapState} from "vuex";
export default {
  name: 'GladToWork',
  data() {
    return {
      full_name: null,
      url: null,
      email: null,
      industry: null,
      text: null,
    }
  },
  computed: {
    ...mapState({
      russian: state => state.Common.russian,
    })},
  methods: {
    submitForm() {
      axios({
        method: 'post',
        url: 'http://134.0.113.121:8000/form/',
        data: {
          name: this.full_name,
          email: this.email,
          other: 'Направление '+this.industry+'; Ссылка на сайт компании '+this.url+' Прочее '+this.text
        }
      })
          .then(res => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
          })
      alert('Спасибо за отклик!')
    }
  }
}
</script>

<style lang='scss'>
.GladToWork{
  min-height: 100vh;
  padding-top: 100px;
}

@media (max-width: 992px){
  .GladToWork{
    padding-bottom: 30px;
    .title{
      font-size: 34px;
    }
  }
}
</style>