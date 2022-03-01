import axios from 'axios'

const Common = {
  namespaced: true,
    state: {
      mobileMenu:{
        isActive: false
      },
      russian: false
    },
    mutations: {
      changeLang(state)
      {
        state.russian=!state.russian
      }
    },
    actions: {
    },
    modules: {
    }

}

export default Common;
