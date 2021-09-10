import axios from "axios";

const state = () => ({
    header: [],
    services: []

})

const getters = {
    HEADER(state) {
        return state.header;
    },
    SERVICES(state) {
        return state.services;
    },

}

const mutations = {
        SET_CONTENT: (state, content) => {
            for (let i = 0; i < content[0].blocks.length; i++) {
                if(content[0].blocks[i].name=='header'){
                    state.header=content[0].blocks[i].contents
                }
                if(content[0].blocks[i].name=='service'){
                    state.services=content[0].blocks[i].contents
                }
            }
        },
    }

const actions = {
        GET_CONTENT({ commit } ) {
            return axios({
                method: "GET",
                url: "http://localhost:8000/page/1/",
            })
            .then((response) => {
                commit("SET_CONTENT", response.data);
                return response;
            })
            .catch((error) => {
                console.log(error);
                return error;
            });
        },
    }



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}