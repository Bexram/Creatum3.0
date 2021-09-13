<template>
  <div class="Service d-flex justify-content-between  flex-lg-row flex-column">
    <div
    v-for="Service in services"
    :key="Service.id"
    class='item d-flex flex-column align-items-start justify-content-end'
    >
    <img class='w-100 h-100' :src="Service.file[0].file" alt="">
    <h3>{{Service.name}}</h3>
    <p class='service_description'>{{Service.text.split('/')[0]}}</p>
    <router-link :to="Service.text.split('/')[1]">
      <button class='button button_purple'>Подробнее</button>
    </router-link>
    <!-- <a :href="Service.url">
      <button class='button button_purple'>Подробнее</button>
    </a> -->
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Servive',


  computed: {
    ...mapGetters('Backend', {
      services: 'SERVICES',
    })
  },
}
</script>

<style lang='scss'>

@media (min-width: 992px){
  .service_description{
    height: 160px;
  }
}

.Service{
  height: 100vh;
  .item{
    width: 24.5%;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 88.73%);
    padding-left: 23px;
    padding-right: 30px;
    padding-bottom: 43px;
    height: 100%;
    p,h3{
      color: #fff;
    }
    p{
      text-align: start;
    }
    img{
      position: absolute;
      top:0;
      left: 0;
      z-index: -1;
     }
  }
}

@media (max-width:992px){
  .Service{
    height: auto;
    .item{
      width: 100%;
      height: 245px;
      padding: 32px 16px;
      margin-bottom: 3px;
      &:nth-child(2){
          img{
            object-position: top;   
          }
        }
      img{
        object-fit: cover;
      }
      h3{
        font-size: 28px;
        line-height: 100%;
      }
      p{
        font-size: 14px;
        line-height: 150%;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 40px;
      }
    }  
  }
}
</style>