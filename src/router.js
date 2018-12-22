import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/init',
      name: 'init',
      component: () => import('./views/Init.vue'),
    },
    {
      path: '/theme',
      name: 'theme',
      component: () => import('./views/Theme.vue'),
      children: [
        {
          path: '',
          component: () => import('./components/ThemeConfirm.vue'),
        },
        {
          path: ':player',
          component: () => import('./components/ThemePlayer.vue'),
        },
      ],
    },
    {
      path: '/draw/select',
      name: 'drawSelect',
      component: () => import('./views/DrawSelect.vue'),
    },
    {
      path: '/draw/paper',
      name: 'drawPaper',
      component: () => import('./views/DrawPaper.vue'),
    },
    {
      path: '/draw/device',
      name: 'drawDevice',
      component: () => import('./views/DrawDevice.vue'),
    },
    // {
    //   path: '/draw/complete',
    //   name: 'drawDevice',
    //   component: () => import('./views/DrawDevice.vue'),
    // },
    // {
    //   path: '/fin',
    //   name: 'fin',
    //   component: () => import('./views/Fin.vue'),
    // },
  ],
});
