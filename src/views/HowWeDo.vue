<template>
  <div id="HowWeDo" class="HowWeDo">
    <h2 v-if="russian" class='wow animate__animated animate__fadeIn title'>Как <span>мы делаем</span></h2>
    <h2 v-if="!russian" class='wow animate__animated animate__fadeIn title'>How <span>we do</span></h2>
    <img class='cube' src="../assets/cube4.png" alt="">
    <div class="container p-lg-2 p-0">

      <div class="slider-navigation wow animate__animated animate__fadeInLeft">
        <splide
        :options="secondaryOptions"
        ref="secondary"
        >
        <splide-slide >
          SMM
        </splide-slide>
        <splide-slide >
          Web-sites
        </splide-slide>
        <splide-slide >
          Branding
        </splide-slide>
        <splide-slide >
          Performance
        </splide-slide>
      </splide>
      </div>

      <splide :options="options"
      ref="primary"
      class='p-lg-0 p-2 wow animate__animated animate__fadeInRight'
      >
        <splide-slide>
          <template  v-for='SMM in howwedo'>
        <div class="cell d-flex align-items-center justify-content-between"
           v-if="SMM.name.split('.')[0]=='SMM'"
           :key="SMM.name.split('.')[1]">
        <p>{{SMM.text.split('.')[0]}}</p>
        <div class="time">
          <span>{{SMM.text.split('.')[1].substring(0,2)}}</span>
          {{SMM.text.split('.')[1].replace(/[0-9]/g, '')}}

          <!-- <span class='submit'></span> -->
        </div>
        </div>

        <div class="cell cell_total d-flex align-items-center justify-content-between"
        v-if="SMM.name=='SMMtotal'">
        <p>Итого</p>
        <div class="time">
          <span>{{SMM.text.substring(0,2)}}</span>
          {{SMM.text.replace(/[0-9]/g, '')}}
        </div>
        </div>
          </template>
      </splide-slide>
      <splide-slide>
        <template   v-for='web_app in howwedo'>
        <div class="cell d-flex align-items-center justify-content-between"
             v-if="web_app.name.split('.')[0]=='Web'"
            :key="web_app.name.split('.')[1]">
        <p>{{web_app.text.split('.')[0]}}</p>
        <div class="time">
          <span>{{web_app.text.split('.')[1].substring(0,2)}}</span>
          {{web_app.text.split('.')[1].replace(/[0-9]/g, '')}}
        </div>
        </div>

        <div class="cell cell_total d-flex align-items-center justify-content-between"
             v-if="web_app.name=='Webtotal'">
        <p>Итого</p>
          <div class="time">
            <span>{{web_app.text.substring(0,2)}}</span>
            {{web_app.text.replace(/[0-9]/g, '')}}
          </div>
        </div>
        </template>
      </splide-slide>
      <splide-slide>
        <template    v-for="branding in howwedo">
        <div class="cell d-flex align-items-center justify-content-between"
             v-if="branding.name.split('.')[0]=='Branding'"
        :key="branding.name.split('.')[1]">
          <p>{{branding.text.split('.')[0]}}</p>
        <div class="time">
          <span>{{branding.text.split('.')[1].substring(0,2)}}</span>
          {{branding.text.split('.')[1].replace(/[0-9]/g, '')}}
        </div>
        </div>

        <div class="cell cell_total d-flex align-items-center justify-content-between"
             v-if="branding.name=='Brandingtotal'"
        >
        <p>Итого</p>
          <div class="time">
            <span>{{branding.text.substring(0,2)}}</span>
            {{branding.text.replace(/[0-9]/g, '')}}
          </div>
        </div>
        </template>
      </splide-slide>
      <splide-slide>
        <template  v-for="performance in howwedo">
        <div class="cell d-flex align-items-center justify-content-between"
             v-if="performance.name.split('.')[0]=='Perfomance'"
         :key="performance.name.split('.')[1]">
          <p>{{performance.text.split('.')[0]}}</p>
        <div class="time">
          <span>{{performance.text.split('.')[1].substring(0,2)}}</span>
          {{performance.text.split('.')[1].replace(/[0-9]/g, '')}}
        </div>
        </div>

        <div class="cell cell_total d-flex align-items-center justify-content-between"
             v-if="performance.name=='Perfomancetotal'"
        >
        <p>Итого</p>
          <div class="time">
            <span>{{performance.text.substring(0,2)}}</span>
            {{performance.text.replace(/[0-9]/g, '')}}
          </div>
        </div>
        </template>
      </splide-slide>
      </splide>
    </div>





  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import {mapGetters, mapState} from 'vuex';
export default {
  name: 'HowWeDo',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
      return {
        options: {
          type      : 'fade',
		      perPage   : 1,
		      perMove   : 1,
		      gap       : '1rem',
          pagination: false,
          arrows: false
        },
        secondaryOptions: {
		      type        : 'slide',
		      gap         : '1rem',
		      pagination  : false,
		      fixedWidth  : 103,
          fixedHeight : 58,
		      focus       : 0,
		      isNavigation: true,
          updateOnMove: true,
          arrows: false,
          perPage:3,
          breakpoints: {
            993: {
              fixedWidth  : 95,
              // focus    : 'center',
	            perPage  : 3,
	            trimSpace: false,
              
            }
          },
        classes: {
          page: 'dfef'
        }
        },
        count : 0,
      };
    },
    mounted() {
      this.$refs.primary.sync( this.$refs.secondary.splide );
    },
  computed: {
    ...mapState({
      russian: state => state.Common.russian,
    }),
    ...mapGetters('Backend', {
      howwedo: 'HOWWEDO',
    })
  },
}
</script>

<style lang='scss'>

.HowWeDo{
  position: relative;
  padding-top: 65px;
  min-height: 92vh;
  .cube{
    position: absolute;
    top: 0;
    left: 35px;
    z-index: -1;
  }
  h2{
    margin-bottom: 40px;
  }
  .cell_total{
    background: #6709DE !important;
    p{
      color:#fff;
    }
  }
  .cell{
    background: rgba(235, 235, 235, 0.5);
    border-radius: 10px;
    padding: 12px 20px;
    margin-bottom: 24px;
    p{
      margin-bottom: 0;
    }
    .time{
      background-color: #FBD035;
      padding: 12px 8px;
      border-radius: 40px;
      width: auto;
      span{
        font-weight: 800;
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  .swiper-container {
    width: 600px;
    height: 300px;
}
#splide01{
  ul li{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
}

@media (max-width:992px){
  .HowWeDo{
    overflow-x: hidden;
    .slider-navigation{
      width: 95%;
    }
    .cell p{
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: start;
      max-width: 208px;
    }
  }
}
</style>