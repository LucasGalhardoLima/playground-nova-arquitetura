import store from '@/store';

const rotasModuloTeste = [
  {
    path: '',
    component: () => import('../pages/inicio'),
    beforeEnter: (to, from, next) => {
      if (store.state.mensagem !== 'Boas vindas') store.dispatch('teste/alteraMensagem', 'Boas vindas');
      next();
    },
  },
];

export default rotasModuloTeste;
