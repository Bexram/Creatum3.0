<template>
  <div id='GladToWork' class="GladToWork">
    <div class="container">
      <h2 class="title wow animate__animated animate__fadeIn">Мы рады работать <span>с тобой!</span></h2>
      <form action="" class='d-flex justify-content-between flex-wrap' @submit.prevent="submitForm" method="post" >
        <input class='req short' type="text" placeholder="Полное имя" v-model="full_name">
        <input class='short' type="text" placeholder="Ссылка на сайт компании" v-model="url">
        <input class='req short' type="text" placeholder="Э-почта" v-model="email">
        <input class='req short' type="text" placeholder="Направление" v-model="industry">
        <textarea class='big' placeholder="Text area"  rows="4" cols="50" v-model="text">
        </textarea>
        <div class='w-100 d-flex justify-content-lg-end justify-content-start'>
          <button class='button button_purple' type="submit">Отправить</button>
        </div>
        
        
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {
    submitForm() {
      axios({
        method: 'post',
        url: 'http://localhost:8000/form/',
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