<template>
  <div class="ForWhoWeAre">
    <h2 v-if="russian" class="title wow animated__animated animated__fadeIn">
      Кому <span> мы подойдем</span>
    </h2>
    <h2 v-if="!russian" class="title wow animated__animated animated__fadeIn">
      Who will <span>we suit</span>
    </h2>
    <div class="slide-wrapper d-lg-none slide-wrapped_mobile wow animated__animated animated__fadeInUp">
      <div
       v-for="item in forWho"
        :key=item.id>
          <h3>{{item.name}}</h3>
          <p>{{item.text}}</p>
      </div>
    </div>
    <div class="swiper">
    <div class="slide-wrapper d-lg-block d-none  wow animated__animated animated__fadeInUp">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="card"
        v-for="item in forWho"
        :key=item.id
        >
          <h3>{{item.name}}</h3>
          <p>{{item.text}}</p>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import {mapGetters, mapState} from 'vuex';
import anime from 'animejs';
export default {
  name: 'ForWhoWeAre',
  components: {
    Swiper,
    SwiperSlide,
    anime
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true,
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      }
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    ...mapGetters('Backend', {
      forWho: 'FORWHO',
    }),
    ...mapState({
      russian: state => state.Common.russian,
    })
  },
}
</script>

<style lang='scss'>
.ForWhoWeAre{
  height: auto;
  padding-top: 150px;
  .swiper {
    margin-left: 50px;
    margin-right: 50px;
  }
  .card{
    margin-right: 10px;
    margin-left: 10px;
  }
  h2{
    margin-bottom: 117px;
  }
  .slide-wrapper{
    width: 100%;
  }
  h3{
    font-weight: 800;
    font-size: 24px;
    line-height: 100%;
    text-align: start;
    margin-bottom: 12px;
  }
  p{
    text-align: start;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #8D8794;
  }
}

@media(min-width: 992px){
  .slide-wrapped_mobile{
    display: none;
  }
}

@media (max-width:992px){
  .ForWhoWeAre{
    overflow: hidden;
    h2{
      margin-bottom: 65px;
    }
    .slide-wrapper{
      width: 90%;
      margin-left: 5%;
    }
  }
}
</style>