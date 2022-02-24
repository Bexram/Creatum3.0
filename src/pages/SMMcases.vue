<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="SMM Cases"
      />
    <div class="p-0 justify-content-between container-fluid d-flex flex-wrap">
      <div class="case d-flex justify-content-center align-items-center" v-for='(item,index) in smmcases' :key='item.id'>

        <Cases
        :name="item.name"
        :path="item.file"
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
import HeaderClose from '@/components/Header-close.vue'
import { mapGetters } from 'vuex';
import Cases from '@/components/Cases';
export default {
  name: 'SMMcases',
  components: {
    HeaderClose,
    Cases,
  },

  mounted () {
  window.scrollTo(0, 0);
},
 computed: {
    ...mapGetters('Backend', {
      smmcases: 'SMMCASES',
    })
  },
  created() {
    this.$store.dispatch('Backend/GET_CASES')
  },
}
</script>

<style lang="scss">
@import '../styles/common.scss';
</style>