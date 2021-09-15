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
    <div class="slide-wrapper d-lg-block d-none  wow animated__animated animated__fadeInUp">
      <splide :options="options">
        <splide-slide
        v-for="item in forWho"
        :key=item.id
        >
          <h3>{{item.name}}</h3>
          <p>{{item.text}}</p>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { mapState } from 'vuex';
import anime from 'animejs';
export default {
  name: 'ForWhoWeAre',
  components: {
    Splide,
    SplideSlide,
    anime
  },
  data() {
    return {
      options: {
          type: 'loop',
          width  : '100%',
          gap    : '3rem',
          arrows : false, 
          pagination  : false,
          perPage   : 2.6,
          perMove   : 1,
        },
        options1: {
          type: 'loop',
          width  : '100%',
          gap    : '3rem',
          arrows : false, 
          pagination  : false,
          perPage   : 2.6,
          direction  : 'ttb',
          perMove   : 1,
          height: 'auto'
        },
    }
  },
  computed: {
    ...mapState({
      forWho: state => state.Backend.forwho,
      russian: state => state.Common.russian,
    })
  },
}
</script>

<style lang='scss'>
.ForWhoWeAre{
  height: auto;
  padding-top: 150px;
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