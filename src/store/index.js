import Vue from "vue";
import Vuex from "vuex";
import user from "./moudles/user";

Vue.use(Vuex);

const store = new Vuex.Store({
    // state: {},
    // mutations: {},
    // actions: {},
    modules: {
        user
    }
});
export default store;