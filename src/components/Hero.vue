<template>
  <div id='hero' class="Hero align-items-center justify-content-center d-flex flex-column">

    <img class='cube cube-1' src="../assets/cube1.png" alt="">
    <img class='cube cube-2' src="../assets/cube2.png" alt="">
    <img class='cube cube-3' src="../assets/cube3.png" alt="">

    <template v-for="el in header">
    <h2 class='wow animate__animated animate__fadeInLeft'
        v-if="el.name=='h2'"
        v-html="el.text">
    </h2>
      </template>
    <hr>

    <template v-for="el in header">
    <p class='wow animate__animated animate__fadeInRight'
       v-if="el.name=='p1'"
       v-html="el.text">
    </p>
    </template>

    <hr>

    <template v-for="el in header">
      <p class='wow animate__animated animate__fadeInLeft'
         v-if="el.name=='p2'"
         v-html="el.text">
      </p>
    </template>

  </div>
</template>

<script>
import anime from 'animejs'
import {mapGetters} from 'vuex';
export default {
  name: 'Hero',
  components: {
    anime
  },
  computed: {
    ...mapGetters('Backend', {
      header: 'HEADER',
    })
  },
  mounted(){


    anime({
      targets: 'h2',
    }),
    anime({
      targets: '.cube-1',
      translateY: [0, -5],
      daruation: 10000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      rotate: 5
    }),
    anime({
      targets: '.cube-2',
      translateY: [0, -15],
      daruation: 11000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      rotate: -9
    }),
    anime({
      targets: '.cube-3',
      translateY: [0, -10],
      daruation: 8000,
      loop: true,
      direction: 'alternate',
      easing: 'linear',
      rotate: 10
    })
  },
}
</script>

<style lang='scss'>
.Hero{
  height: 100vh;
  position: relative;
  .cube{
    position: absolute;
    z-index: -1;

    &-1{
      left: 94px;
      top: 272px;
    }

    &-2{
      right: 156px;
      top: 100px;
    }
    &-3{
      bottom: 0px;
      right: 120px;
    }
  }
  h2{
    font-size: 62px;
    line-height: 120%;
    color: #020202;
    width: 1024px;
    margin-left: auto;
    text-align: center;
    margin-top: 0;
    margin-bottom: 32px;
    
    span{
      color: #6709DE;
      font-weight: 800;
    }
  }
  hr{
    height: 1px;
    background: #E6DDF0;
    color: #E6DDF0;
    width: 180px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 32px;
  }
  p{
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 120%;
    text-align: center;
    color: #8D8794;
    max-width: 838px;
  }
}

@media (max-width: 992px){
  .Hero{
    overflow-x: hidden;
    height: 725px;
    margin-top: 14vh;
    h2{
      width: 100%;
      font-size: 35px;
      line-height: 140%;
      padding: 0 24px;
      text-align: start;
    }
    p{
      font-size: 14px;
      padding: 0 24px;
      line-height: 120%;
    }
    .cube{
    &-3{
      width: 180px;
      bottom: 40px;
      right: -20px;
    }
  }
  }
}
</style>