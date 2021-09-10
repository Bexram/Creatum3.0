import Vue from 'vue'
import Vuex from 'vuex'

import SMMCases from '@/store/SMMcases.js'
import WEBUICases from '@/store/WEBUIcases'
import MobileUICases from '@/store/MobileUIcases'
import BrandingCases from '@/store/BrandingCases'
import HowWeDo from '@/store/HowWeDo'
import ForWho from '@/store/ForWho'
import OurClients from '@/store/OurClients'
import OurClients1 from '@/store/OurClients1'
import Crew from '@/store/Crew'
import Common from '@/store/Common'
import Backend from '@/store/Backend'

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    SMMCases,
    WEBUICases,
    MobileUICases,
    BrandingCases,
    HowWeDo,
    ForWho,
    OurClients,
    OurClients1,
    Crew,
    Common,
    Backend
  },

})