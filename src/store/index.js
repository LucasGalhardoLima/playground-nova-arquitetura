import Vue from 'vue';
import Vuex from 'vuex';
import teste from './teste';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    teste,
  },
});
