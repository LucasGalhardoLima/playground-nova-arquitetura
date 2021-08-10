import Vue from 'vue';
import VueRouter from 'vue-router';
import rotasModuloTeste from '@/modules/moduloTeste/routes';
import rotasModuloTesteComView from '@/modules/moduloTesteComView/routes';

Vue.use(VueRouter);

const routes = [...rotasModuloTeste, ...rotasModuloTesteComView];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
