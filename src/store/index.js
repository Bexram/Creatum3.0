import Vue from 'vue'
import Vuex from 'vuex'

import Common from '@/store/Common'
import Backend from '@/store/Backend'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    Common,
    Backend
  },

})