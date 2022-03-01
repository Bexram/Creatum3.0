<template>
  <div id="app">
      <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <div id="nav" class='d-lg-flex d-none w-100 justify-content-between align-items-center'>
      <!-- <router-link to='/'> -->
        <svg @click='goToBlock' href="#WhatWeDo" width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8093 0.510203C5.44048 2.07336 -2.65621 15.6309 2.49086 27.8347C6.97215 38.4609 20.0791 43.0946 30.6388 37.7863C33.3733 36.4116 37.5598 32.9493 37.3236 32.2576C37.277 32.121 36.0413 31.1319 34.5777 30.0594L31.9167 28.1098L30.3487 29.5889C27.004 32.7441 22.4551 34.0616 18.4717 33.029C14.6358 32.0343 11.3888 29.4932 9.73651 26.1928C7.64465 22.0144 7.6472 18.4335 9.74507 14.1657C11.7941 9.99776 16.6345 6.9789 21.2506 6.99024C24.9177 6.99928 28.8276 8.86302 31.0436 11.6584L31.718 12.5092L34.5363 10.4241C36.0863 9.27709 37.3546 8.23846 37.3546 8.11595C37.3546 7.71764 35.235 5.61467 33.6707 4.4614C30.6275 2.2174 27.3261 0.924266 23.5757 0.506729C21.2803 0.251297 21.0211 0.251529 18.8093 0.510203Z" fill="#020202"/>
          <path d="M34.2545 18.9608C35.0331 18.3877 36.1771 17.2337 36.797 16.3963C37.4167 15.5589 37.9836 14.949 38.0568 15.0409C38.1298 15.1326 38.6411 15.8088 39.1927 16.5432C39.7443 17.2775 40.833 18.3576 41.612 18.943C42.391 19.5287 43.0283 20.0884 43.0283 20.1868C43.0283 20.2852 42.382 20.8517 41.5921 21.4455C40.8024 22.0392 39.6869 23.1489 39.1137 23.9115C38.5406 24.6741 38.0093 25.2982 37.9336 25.2982C37.8579 25.2982 37.3266 24.6741 36.7535 23.9115C36.1803 23.1489 35.0648 22.0392 34.2751 21.4455C33.4852 20.8517 32.8389 20.2843 32.8389 20.1845C32.8389 20.0847 33.4759 19.534 34.2545 18.9608Z" fill="#7A30C5"/>
        </svg>
      <!-- </router-link> -->

      <div class="navigation">
        <ul class='d-flex '>
          <li><button v-if="russian"
          :class="{active: scrollPosition < actualHeight*1.8}" @click='goToBlock' 
          class='button button_yellow' href="#WhatWeDo">Что мы делаем</button>
            <button v-if="!russian"
                    :class="{active: scrollPosition < actualHeight*1.8}" @click='goToBlock'
                    class='button button_yellow' href="#WhatWeDo">What we do</button>
          </li>
          <li><button v-if="russian"
          :class="{active: scrollPosition >= actualHeight*1.8 && scrollPosition < actualHeight*2.6}" @click='goToBlock' 
          class='button button_yellow' href="#HowWeDo">Как мы делаем</button>
            <button v-if="!russian"
                    :class="{active: scrollPosition >= actualHeight*1.8 && scrollPosition < actualHeight*2.6}" @click='goToBlock'
                    class='button button_yellow' href="#HowWeDo">How we do</button>
          </li>
          <li><button  v-if="russian"
          :class="{active: scrollPosition >= actualHeight*2.6 && scrollPosition <= actualHeight*4.6}" @click='goToBlock' 
          class='button button_yellow' href="#ForWho">Для кого</button>
            <button v-if="!russian"
                    :class="{active: scrollPosition >= actualHeight*2.6 && scrollPosition <= actualHeight*4.6}" @click='goToBlock'
                    class='button button_yellow' href="#ForWho">For who</button></li>
          <li><button v-if="russian"
          :class="{active: scrollPosition >= actualHeight*4.6 && scrollPosition < actualHeight*5.5}" @click='goToBlock'
           class='button button_yellow' href="#Crew">Присоединяйся к команде</button>
            <button v-if="!russian"
                    :class="{active: scrollPosition >= actualHeight*4.6 && scrollPosition < actualHeight*5.5}" @click='goToBlock'
                    class='button button_yellow' href="#Crew">Join the crew</button>
          </li>
        </ul>
      </div>
        <div class="navigation">
          <ul class='d-flex '>
<!--        <li><button class='d-block request button button_purple' v-if="russian" v-on:click="goLang">-->
<!--          Ru-->
<!--        </button>-->
<!--        <button class='d-block request button button_purple' v-if="!russian" v-on:click="goLang">-->
<!--          En-->
<!--        </button></li>-->
            <li><button v-if="russian" @click='goToBlock' class='d-block request button button_purple' href="#GladToWork">Заявка</button>
      <button v-if="!russian" @click='goToBlock' class='d-block request button button_purple' href="#GladToWork">Request</button></li>
          </ul>
        </div>
    </div>
    <div id='navMobile' class='d-lg-none d-flex w-100 justify-content-between align-items-center'>
      <svg  @click='goToBlock' href="#WhatWeDo" width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8093 0.510203C5.44048 2.07336 -2.65621 15.6309 2.49086 27.8347C6.97215 38.4609 20.0791 43.0946 30.6388 37.7863C33.3733 36.4116 37.5598 32.9493 37.3236 32.2576C37.277 32.121 36.0413 31.1319 34.5777 30.0594L31.9167 28.1098L30.3487 29.5889C27.004 32.7441 22.4551 34.0616 18.4717 33.029C14.6358 32.0343 11.3888 29.4932 9.73651 26.1928C7.64465 22.0144 7.6472 18.4335 9.74507 14.1657C11.7941 9.99776 16.6345 6.9789 21.2506 6.99024C24.9177 6.99928 28.8276 8.86302 31.0436 11.6584L31.718 12.5092L34.5363 10.4241C36.0863 9.27709 37.3546 8.23846 37.3546 8.11595C37.3546 7.71764 35.235 5.61467 33.6707 4.4614C30.6275 2.2174 27.3261 0.924266 23.5757 0.506729C21.2803 0.251297 21.0211 0.251529 18.8093 0.510203Z" fill="#020202"/>
        <path d="M34.2545 18.9608C35.0331 18.3877 36.1771 17.2337 36.797 16.3963C37.4167 15.5589 37.9836 14.949 38.0568 15.0409C38.1298 15.1326 38.6411 15.8088 39.1927 16.5432C39.7443 17.2775 40.833 18.3576 41.612 18.943C42.391 19.5287 43.0283 20.0884 43.0283 20.1868C43.0283 20.2852 42.382 20.8517 41.5921 21.4455C40.8024 22.0392 39.6869 23.1489 39.1137 23.9115C38.5406 24.6741 38.0093 25.2982 37.9336 25.2982C37.8579 25.2982 37.3266 24.6741 36.7535 23.9115C36.1803 23.1489 35.0648 22.0392 34.2751 21.4455C33.4852 20.8517 32.8389 20.2843 32.8389 20.1845C32.8389 20.0847 33.4759 19.534 34.2545 18.9608Z" fill="#7A30C5"/>
      </svg>

      <div class='d-flex justify-content-between'>
        <button v-if="russian" @click='goToBlock' class='d-block request button button_purple' href="#GladToWork">Заявка</button>
        <button v-if="!russian" @click='goToBlock' class='d-block request button button_purple' href="#GladToWork">Request</button>
        <svg @click='openMobileMenu' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">     
          <path d="M5.5 12.8333H38.5" stroke="#020202" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.5 22H38.5" stroke="#020202" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5.5 31.1665H38.5" stroke="#020202" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <MobileMenu/>
    <router-view/>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import MobileMenu from '@/components/MobileMenu.vue'
import {mapGetters, mapMutations, mapState} from 'vuex';
export default {
  data() {
    return {
      scrollPosition: null,
      actualHeight: window.innerHeight,
    }
  },
  components:{
    MobileMenu,
  },

  methods: {
    ...mapMutations('Common',['changeLang']),
    // goLang: function(){
    //   this.changeLang()
    //   if (this.russian)
    //     this.$store.dispatch('Backend/GET_CONTENT',1)
    //   else
    //     this.$store.dispatch('Backend/GET_CONTENT',2)
    // },
    goToBlock: function(event){
      let link = event.target.getAttribute('href')
      document.querySelector(link).scrollIntoView({ behavior: 'smooth', block: 'start'}) 
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
      this.actualHeight = window.innerHeight
    },
    scrollFix: function(hashbang){
      location.href = hashbang;
    },
    openMobileMenu: function(){
      this.MenuState.isActive = !this.MenuState.isActive
    }
  },
  computed: {
    ...mapState({
      MenuState: state => state.Common.mobileMenu,
      russian: state => state.Common.russian,
    }),
    ...mapGetters('Backend', {
      header: 'HEADER',
    })
  },
  mounted() {
    this.$watch(
            'HEADER',
            { deep: true }
    );
    window.addEventListener('scroll', this.updateScroll);
    let head = document.getElementsByTagName('head')
    console.log(head.children)
  },
  destroy() {
    window.removeEventListener('scroll', this.updateScroll)
  }
}
</script>

<style lang="scss">

@import 'styles/common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  position: fixed;
  top:0;
  left:0;
  background-color: #fff;
  padding: 2vh 33px 2vh 33px;
  z-index: 999;

  height: 8vh;

  a {
    font-weight: bold;

  }
}

.navigation{
  ul{
    margin-bottom: 0;
  }
  .active{
    background: #FBD035;
    color: #020202;
  }
  .router-link-active, .router-link-exact-active{
    background: #FBD035;
    color: #020202;
  }
  ul{
    li{
      list-style-type: none;
      margin-right: 8px;
    }
  }
  a{
    width: 24.9%;

    &:last-child{
      margin-right: 0;
    }


  }
}

@media (max-width: 993px){
  #navMobile{
    padding: 2vh 16px;
    position: fixed;
    top:0;
    left:0;
    background: #fff;
    z-index: 90;
    button{
      margin-right: 16px;
    }
  }
}

</style>
