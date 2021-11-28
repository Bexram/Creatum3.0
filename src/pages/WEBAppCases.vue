<template>

  <div class="cases">
    <HeaderClose
      path='/'
      title="Web and Apps Cases"
      />
    <div class="p-0  justify-content-between container-fluid d-flex flex-wrap">
      <div class="case d-flex justify-content-center align-items-center" v-for='(item,index) in webcases' :key='item.name'>

        <Cases
        :name="item.name"
        :path="item.file"
        :index="index"
        :date="item.date"
        :img="item.preview"
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
  name: 'WebAppCases',
  components: {
    HeaderClose,
    Cases,
  },
  computed: {
    ...mapGetters('Backend', {
      webcases: 'WEBCASES',
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