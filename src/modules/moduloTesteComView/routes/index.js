import store from '@/store';

const rotasModuloTesteComView = [
  {
    path: '/inicio',
    component: () => import('../pages/paginaTeste'),
    beforeEnter: (to, from, next) => {
      store.dispatch('teste/alteraMensagem', 'Essa é outra página');
      next();
    },
    children: [
      {
        path: '',
        component: () => import('../pages/paginaTeste/views/viewPrincipal'),
      },
    ],
  },
];

export default rotasModuloTesteComView;
