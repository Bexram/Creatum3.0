<template>
  <div :class="{'mobileMenuActive': MenuState.isActive , 'mobileMenuPassive': !MenuState.isActive}" class="mobileMenu w-100 d-flex flex-column justify-content-center align-items-end">
    <div class="top d-flex w-100 justify-content-between align-items-center">
      <router-link to='/'>
        <svg width="44" height="40" viewBox="0 0 44 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.8093 0.510203C5.44048 2.07336 -2.65621 15.6309 2.49086 27.8347C6.97215 38.4609 20.0791 43.0946 30.6388 37.7863C33.3733 36.4116 37.5598 32.9493 37.3236 32.2576C37.277 32.121 36.0413 31.1319 34.5777 30.0594L31.9167 28.1098L30.3487 29.5889C27.004 32.7441 22.4551 34.0616 18.4717 33.029C14.6358 32.0343 11.3888 29.4932 9.73651 26.1928C7.64465 22.0144 7.6472 18.4335 9.74507 14.1657C11.7941 9.99776 16.6345 6.9789 21.2506 6.99024C24.9177 6.99928 28.8276 8.86302 31.0436 11.6584L31.718 12.5092L34.5363 10.4241C36.0863 9.27709 37.3546 8.23846 37.3546 8.11595C37.3546 7.71764 35.235 5.61467 33.6707 4.4614C30.6275 2.2174 27.3261 0.924266 23.5757 0.506729C21.2803 0.251297 21.0211 0.251529 18.8093 0.510203Z" fill="white"/>
          <path d="M34.2545 18.9608C35.0331 18.3877 36.1771 17.2337 36.797 16.3963C37.4167 15.5589 37.9836 14.949 38.0568 15.0409C38.1298 15.1326 38.6411 15.8088 39.1927 16.5432C39.7443 17.2775 40.833 18.3576 41.612 18.943C42.391 19.5287 43.0283 20.0884 43.0283 20.1868C43.0283 20.2852 42.382 20.8517 41.5921 21.4455C40.8024 22.0392 39.6869 23.1489 39.1137 23.9115C38.5406 24.6741 38.0093 25.2982 37.9336 25.2982C37.8579 25.2982 37.3266 24.6741 36.7535 23.9115C36.1803 23.1489 35.0648 22.0392 34.2751 21.4455C33.4852 20.8517 32.8389 20.2843 32.8389 20.1845C32.8389 20.0847 33.4759 19.534 34.2545 18.9608Z" fill="#D48AFF"/>
        </svg>
      </router-link>

      <div class='d-flex justify-content-between'>
        <li><button class='d-block request button button_yellow_current' v-if="russian" v-on:click="goLang">
          Ru
        </button>
          <button class='d-block request button button_yellow_current' v-if="!russian" v-on:click="goLang">
            En
          </button></li>
        <button v-if="russian" class='d-block request button button_yellow_current' href="#GladToWork">Заявка</button>
        <button v-if="!russian" class='d-block request button button_yellow_current' href="#GladToWork">Request</button>
        <div @click="close" class="closeNav d-flex justify-content-center align-items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7369 0.260319C15.3901 -0.0867735 14.8278 -0.0867727 14.481 0.26032L7.98535 6.76122L1.51664 0.292503C1.16968 -0.0544488 0.607165 -0.054449 0.260213 0.292503C-0.0867383 0.639454 -0.0867376 1.20197 0.260214 1.54893L6.72944 8.01815L0.29589 14.4569C-0.05092 14.804 -0.0509201 15.3668 0.29589 15.7139C0.642699 16.061 1.20499 16.061 1.5518 15.7139L7.98586 9.27457L14.4511 15.7398C14.798 16.0867 15.3605 16.0867 15.7075 15.7398C16.0544 15.3928 16.0544 14.8303 15.7075 14.4834L9.24177 8.01764L15.7369 1.51725C16.0837 1.17016 16.0837 0.607411 15.7369 0.260319Z" fill="#2B2D31"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="base">
      <ul v-if="russian" class=''>
        <li><button
                class='' href="#WhatWeDo" @click="mobileGoToBlock">Что мы делаем</button></li>
        <li><button
                class='' href="#HowWeDo" @click="mobileGoToBlock">Как мы делаем</button></li>
        <li><button
                class='' href="#ForWho" @click="mobileGoToBlock">Для кого</button></li>
        <li><button
                class='' href="#Crew" @click="mobileGoToBlock">Присоединяйся к команде</button></li>
      </ul>
        <ul v-if="!russian" class=''>
          <li><button   
          class='' href="#WhatWeDo" @click="mobileGoToBlock">What we do</button></li>
          <li><button  
          class='' href="#HowWeDo" @click="mobileGoToBlock">How we do</button></li>
          <li><button  
          class='' href="#ForWho" @click="mobileGoToBlock">For who</button></li>
          <li><button
           class='' href="#Crew" @click="mobileGoToBlock">Join the crew</button></li>
        </ul>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex';
export default {
  name: 'MobileMenu',
  computed: {
    ...mapState({
      MenuState: state => state.Common.mobileMenu,
      russian: state => state.Common.russian,
    }),
  },
  methods: {
    ...mapMutations('Common',['changeLang']),
    goLang: function(){
      this.changeLang()
      if (this.russian)
        this.$store.dispatch('Backend/GET_CONTENT',1)
      else
        this.$store.dispatch('Backend/GET_CONTENT',2)
    },
    close: function(){
      this.MenuState.isActive = !this.MenuState.isActive
    },
    goToBlock: function(event){
      let link = event.target.getAttribute('href')
      document.querySelector(link).scrollIntoView({ behavior: 'smooth', block: 'start'}) 
    },
    mobileGoToBlock: function(){
      this.close();
      this.goToBlock(event);
    }
  }

}
</script>

<style lang='scss'>

 .mobileMenuActive{
   opacity: 1;
   z-index: 91;
   transition: opacity .3s ease;
 }
 .mobileMenuPassive{
   opacity: 0;
   z-index: -1;
   transition: opacity .3s ease;   
 }
 .mobileMenu{
   position: fixed;
   top:0;
   left:0;
   height: 100vh;
   background: #6709DE;
   .top{
     padding: 2vh 16px;
     position: absolute;
     top:0;
     left:0;
     button{
       margin-right: 16px;
     }
     .closeNav{
        width: 44px;
        height: 44px;
        background: #F0F0F0;
        border-radius: 100px;
     }
   }

   .base{
     ul li{
       list-style-type: none;
       padding-right: 16px;
       button{
        font-weight: bold;
        font-size: 40px;
        line-height: 150%;
        text-align: right;
        color: #FFFFFF;
        background: none;
        border: none;
        width: 100%;
        outline: none;
       }
     }
   }
 }
</style>