<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="Perfomance Cases"
      />
    <div class="p-0 justify-content-between container-fluid d-flex flex-wrap">
      <div class="case d-flex justify-content-center align-items-center" v-for='(item,index) in perfomancecases' :key='item.name'>
        <Cases
        :name="item.name"
        :path="/PerfomanceCase/"
        :index="index"
        :date="item.date"
        :img="item.preview"
        :file="item.file"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue';
import Cases from '@/components/Cases';
import { mapGetters } from 'vuex';
export default {
  name: 'Perfomance',
  components: {
    HeaderClose,
    Cases,
  },
   computed: {
    ...mapGetters('Backend', {
      perfomancecases: 'PERFOMANCECASES',
    })
  },
    mounted () {
  window.scrollTo(0, 0);
},
}
</script>

<style lang="scss">
@import '../styles/common.scss';
</style>