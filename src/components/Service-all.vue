<template>
  <div class="Service d-flex justify-content-between  flex-lg-row flex-column">
    <div
    v-for="Service in Services"
    :key="Service.title"
    class='item d-flex flex-column align-items-start justify-content-end'
    >
    <img class='w-100 h-100' :src="Service.img" alt="">
    <h3>{{Service.title}}</h3>
    <p class='service_description'>{{Service.descripton}}</p>
    <router-link :to="Service.url">
      <button class='button button_purple'>Подробнее</button>
    </router-link>
    <!-- <a :href="Service.url">
      <button class='button button_purple'>Подробнее</button>
    </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Servive',
  data() {
    return {
      Services: [
        {
          title: 'SMM',
          descripton: 'Создаем уникальный контент, чтобы охватить как можно больше целевых пользователей. Повышаем вовлеченности и лояльность аудиторий.',
          img: require('../assets/SMM.png'),
          url: '/SMMcases'
        },
        {
          title: 'Performance',
          descripton: 'Настраиваем прибыльные рекламные кампании через facebook и google ads. Фокусируемся на высоком ROAS, и положительном  ROMI.',
          img: require('../assets/WebUI.png'),
          url: '/PerfomanceCases'
        },
        {
          title: 'Branding',
          descripton: 'Придумываем универсальные сочетания Логотипов и шрифтов, выделяющие из толпы. Прорабатываем расположение на атрибутике разного формата.',
          img: require('../assets/Branding.png'),
          url: '/BrandingCases'
        },
        {
          title: 'Websites & Apps',
          descripton: 'Разрабатываем нативные сайты и мобильные приложения с фокусом на оптимальные пользовательские интерфейсы. Производим аудит и редизайн существующих решений.',
          img: require('../assets/MobileUI.png'),
          url: '/WebAppCases'
        },
        
      ]
    }
  }
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