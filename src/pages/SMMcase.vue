<template>
  <div class="Case">
      <HeaderClose
      path="/SMMCases"
      :title="SMMCases[id].name"
      />
      <div class="container-fluid p-0">
          <iframe 
          :src="SMMCases[id].file"
        ></iframe>
      </div>
  </div>
</template>

<script>
import HeaderClose from '@/components/Header-close.vue'
import { mapState } from 'vuex';
export default {
    name: 'SMMCase',
    components: {
        HeaderClose
    },
    data() {
        return {
            post: '',
            id: this.$router.currentRoute.params['id'],
        };
  },
    computed: {
        ...mapState({
         SMMCases: state => state.Backend.smmcases
    })
  }

}
</script>

<style lang='scss'>
@import '../styles/common.scss';
</style>