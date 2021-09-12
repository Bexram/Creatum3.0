import axios from "axios";

const state = () => ({
    header: [],
    services: [],
    smmcases: [],
    brandingcases: [],
    webcases: [],
    performancecases: [],

})

const getters = {
    HEADER(state) {
        return state.header;
    },
    SERVICES(state) {
        return state.services;
    },
    SMMCASES(state) {
        return state.smmcases;
    },
    WEBCASES(state) {
        return state.webcases;
    },
    BRANDIBGCASES(state) {
        return state.brandingcases;
    },
    PERFOMANCECASES(state) {
        return state.performancecases;
    },
}

const mutations = {
        SET_CASES: (state, content) => {
            state.smmcases=[]
            state.webcases=[]
            state.brandingcases=[]
            state.performancecases=[]
            for (let i = 0; i < content.length; i++) {
                if(content[i].works=='1'){
                    state.smmcases.push(content[i])
                }
                if(content[i].works=='2'){
                    state.webcases.push(content[i])
                }
                if(content[i].works=='3'){
                    state.brandingcases.push(content[i])
                }
                if(content[i].works=='4'){
                    state.performancecases.push(content[i])
                }
            }
        },
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

        GET_CASES({ commit } ) {
            return axios({
                method: "GET",
                url: "http://localhost:8000/cases/",
            })
            .then((response) => {
                commit("SET_CASES", response.data);
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