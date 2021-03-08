import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        nowchapter: 1,
        clickcchapter: "",
        toggle: false,
        endtoggle: false,
    },
    actions: {
        
    },
    mutations: {
    
    }
})

export default store;