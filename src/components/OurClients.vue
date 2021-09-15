<template>
  <div class="OurClients">
    <h2 v-if="russian" class="title wow animate__animated animate__fadeIn">
      Наши <span>клиенты</span>
    </h2>
    <h2 v-if="!russian" class="title wow animate__animated animate__fadeIn">
      Our <span>clients</span>
    </h2>
      <div class="container p-lg-2 p-0">
      <div class="slider-navigation">
        <splide
        :options="secondaryOptions"
        ref="secondary"
        >
        <splide-slide >
          All
        </splide-slide>
        <splide-slide >
          SMM
        </splide-slide>
        <splide-slide >
          Websites
        </splide-slide>
        <splide-slide >
          Branding
        </splide-slide>
        <splide-slide >
          Performance
        </splide-slide>
      </splide>
      </div>
      <!-- <div class="container"> -->
        <splide :options="options"
        ref="primary"
        class='p-lg-0 p-2'
        >
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.id class='icon-icon'>
              <div 
              class='d-flex align-items-center justify-content-center icon-cell'>
                <img class='d-block' :src="icon.logo" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.id>
              <div
                class='d-flex align-items-center justify-content-center '
                :class="{'icon-cell': icon.works=='1',
                 'grey-block' : icon.works!='1'} " >
                 <img class='d-block' :src="icon.logo" alt=""></div>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.id>
              <div
              class='d-flex align-items-center justify-content-center'
              :class="{'icon-cell': icon.works=='2',
               'grey-block' : icon.works!='2' }"><img class='d-block' :src="icon.logo" alt=""></div>
            </div>
          </div>
        </splide-slide>

        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.id >
              <div
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.works=='3',
               'grey-block' : icon.works!='3' }">
                <img class='d-block' :src="icon.logo" alt=""></div>
            </div>
          </div>
        </splide-slide>

        <splide-slide>
          <div class="d-flex flex-wrap justify-content-between justify-content-lg-start">
            <div v-for="icon in icons" :key=icon.id >
              <div
              :class="{'d-flex align-items-center justify-content-center icon-cell': icon.works=='4',
               'grey-block' : icon.works!='4' }">
                <img class='d-block' :src="icon.logo" alt=""></div>
            </div>
          </div>
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
  name: 'OurClients',
  components: {
    Splide,
    SplideSlide
  },
  data() {
    return {
      data: {
        activeClass: 'icon-cell',
        errorClass: 'grey-block'
      },
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
        fixedHeight : 38,
		    focus       : 0,
		    isNavigation: true,
        updateOnMove: true,
        arrows: false,
        perPage:3,
        breakpoints: {
          993: {
              fixedWidth  : 95,
              focus    : 'center',
	            perPage  : 3,
	            trimSpace: false,
            
          }
        }
      },
      count : 0,
    }
  },
  mounted() {
    this.$refs.primary.sync( this.$refs.secondary.splide );
    let SMMIcons = false;
  },
  computed: {
    ...mapGetters('Backend', {
      icons: 'CLIENTS',
    }),
    ...mapState({
      russian: state => state.Common.russian,
    })
  },
}
</script>

<style lang='scss'>
.OurClients{
  position: relative;
  min-height: 100vh;
  padding-top: 100px;
  h2{
    margin-bottom: 52px;
  }
  .icon-icon{
    width:150px; 
    height: 150px
  }
  .icon-cell{
    width: 150px;
    height: 150px;
    img{
      width:80%;
    }
}
  .grey-block{
    width: 150px;
    height: 150px;
    background-color: none;
    opacity: .7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img{
      z-index: -1;
      opacity: .4;
      width:80%;
    }
  }
}
@media (max-width: 992px){
  .OurClients{
    overflow-x: hidden;
    .icon-icon{
      width: 110px;
      height: 110px;
    }
    #splide09-list{
      transform: translateX(0) ;
    }
    .icon-cell{
      width: 110px;
      height: 110px;
    }
    .grey-block{
      width: 110px;
      height: 110px;
    }
    .slider-navigation{
      width: 100% !important
    }
  }
}
</style>