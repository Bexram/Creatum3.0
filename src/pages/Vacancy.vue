<template>
  <div class="vacancy-item">
    <div class="HeaderClose">
        <div class="container h-100">
        <div class="row h-100 align-items-center justify-content-between">
            <div class="back d-flex justify-content-center align-items-center">
            <a href="/#Crew" class='w-100 h-100 d-flex justify-content-center align-items-center'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7369 0.260319C15.3901 -0.0867735 14.8278 -0.0867727 14.481 0.26032L7.98535 6.76122L1.51664 0.292503C1.16968 -0.0544488 0.607165 -0.054449 0.260213 0.292503C-0.0867383 0.639454 -0.0867376 1.20197 0.260214 1.54893L6.72944 8.01815L0.29589 14.4569C-0.05092 14.804 -0.0509201 15.3668 0.29589 15.7139C0.642699 16.061 1.20499 16.061 1.5518 15.7139L7.98586 9.27457L14.4511 15.7398C14.798 16.0867 15.3605 16.0867 15.7075 15.7398C16.0544 15.3928 16.0544 14.8303 15.7075 14.4834L9.24177 8.01764L15.7369 1.51725C16.0837 1.17016 16.0837 0.607411 15.7369 0.260319Z" fill="#2B2D31"/>
                </svg>
            </a>
            </div>

            <h4>{{Vacancy[id].name}}</h4>

            <div></div>
        </div>
        </div>
    </div>
      <div class="container">
          <div class="top">
              <h3>Vacancies / {{Vacancy[id].direction}}</h3>
              <h2>{{Vacancy[id].name}}</h2>
              <p class='d-flex align-items-center'>
                  <svg
                   enable-background="new 0 0 64 64" 
                   version="1.1" viewBox="0 0 64 64" 
                   xml:space="preserve" 
                   xmlns="http://www.w3.org/2000/svg" 
                   xmlns:xlink="http://www.w3.org/1999/xlink">
                   <g id="Glyph_copy_2">
                    <path
                    d="M42.138,23.162c0-5.566-4.548-10.094-10.138-10.094s-10.138,4.528-10.138,10.094S26.41,33.256,32,33.256   S42.138,28.728,42.138,23.162z"/>
                    <path d="M31.995,63.996l4.109-5.375c4.289-5.678,18.282-25.024,18.282-35.601C54.387,9.253,45.391,0.004,32,0.004   S9.613,9.253,9.613,23.021c0,11.39,16.432,33.166,18.301,35.605L31.995,63.996z M17.862,23.162c0-7.771,6.342-14.094,14.138-14.094
                       s14.138,6.323,14.138,14.094S39.796,37.256,32,37.256S17.862,30.934,17.862,23.162z"/></g></svg>
                {{Vacancy[id].location}} 
              </p>
          </div>
          <div class="middle">
            <p>
               {{Vacancy[id].description}}
            </p>
            <div class='d-flex flex-column align-items-start pl-2'>
                <p style='font-weight: bolder;'>Обязанности:</p>
                <li style='text-align:left;' v-for='duty in Vacancy[id].duties.split(";")' :key='duty'>
                    {{duty}}
                </li>
            </div>
             <ul class='d-flex flex-column align-items-start pl-2'>
                <p style='font-weight: bolder;'>Требования:</p>
                 <li style='text-align:left;' v-for='req in Vacancy[id].requirements.split(";")' :key='req'>
                     {{req}}
                 </li>
            </ul>
            <ul class='d-flex flex-column align-items-start pl-2'>
                <p style='font-weight: bolder;'>Условия:</p>
                <li style='text-align:left;' v-for='condition in Vacancy[id].conditions.split(";")' :key='condition'>
                    {{condition}}
                </li>
            </ul>
          </div>

          <div class="bottom">
              <h4>About Creatum</h4>
              <p>{{Vacancy[id].description}}</p>
          </div>


        <h2 class="title">Оставь заявку <span>сейчас!</span></h2>
        <form action="" class='d-flex justify-content-between flex-wrap' @submit.prevent="applyForm" method="post">
        <input class='short' type="text" placeholder="Полное имя" v-model="full_name">
        <input class='short' type="text" placeholder="Э-почта" v-model="email">
            <select class='req short' v-model="field">
                <option value="" disabled>Выберите направление</option>
                <option value="SMM">SMM</option>
                <option value="Web & Apps">Web & Apps</option>
                <option value="Branding">Branding</option>
                <option value="Perfomance">Perfomance</option>
            </select>
        <div class='w-100 d-flex justify-content-lg-end justify-content-start'>
          <button class='button button_purple'>Отправить</button>
        </div>
        
        
      </form>

      </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderClose from '@/components/Header-close.vue'
import { mapGetters } from 'vuex';
export default {
name: 'Vacancy',
components: {
    HeaderClose
},
    computed: {
        ...mapGetters('Backend', {
            Vacancy: 'VACANCY',
        })
    },
data() {
    return {
        post: '',
        id: this.$router.currentRoute.params['id'],
        full_name: null,
        email: null,
        field: null,
    };
},
  mounted () {
  window.scrollTo(0, 0);
},
    created() {
        this.$store.dispatch('Backend/GET_VACANCY')
    },

    methods: {
    applyForm() {
      axios({
        method: 'post',
        url: 'http://134.0.113.121:8000/form/',
        data: {
          name: this.full_name,
          email: this.email,
          other: 'Вакансия '+this.Vacancy[this.id].name+' '+this.field,
        }
      })
          .then(res => console.log(res))
          .catch((error) => {
            console.log(error)
          })
    }
  }
}
</script>

<style lang='scss'>

.vacancy-item{
    padding-top: 10vh;
    padding-bottom: 30px;
    .top{
        margin: 32px 0 56px 0;
        h2,h3{
            text-align: start;
        }
        p svg{
            width: 15px;
            margin-right: 10px;
        }
        h2,h3,p{
            text-transform: uppercase;
        }
    }
    .middle{
        margin-bottom: 56px;
        p{
            font-size: 16px;
            line-height: 160%;
            letter-spacing: 0.02em;
            color: #020202;
            text-align: start;
            width: 75%;
        }
    }
    .bottom{
        width: 70%;
        background: rgba(235, 235, 235, 0.5);
        padding: 24px;
        margin-bottom: 55px;
        h4{
            font-size: 20px;
            line-height: 24px;
            color: rgba(2, 2, 2, 0.5);
            text-align: start;
            margin-bottom: 16px;
        }
        p{
            font-size: 14px;
            line-height: 160%;
            letter-spacing: 0.02em;
            color: #020202;
            text-align: start;
        }
    }
}

@media (max-width: 992px){
    .vacancy-item{
        padding-top: 12vh;
        padding-bottom: 35px;
        .middle p{
            width: 100%;
        }
        .bottom {
            width: 100%;
        }
    }
    .HeaderClose{
        h4{
            font-size: 20px;
            line-height: 24px;
        }
    }
}

</style>