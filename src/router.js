import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/init',
      component: () => import('./views/Init.vue'),
    },
    {
      path: '/theme',
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
      component: () => import('./views/DrawSelect.vue'),
    },
    {
      path: '/draw/paper',
      component: () => import('./views/DrawPaper.vue'),
    },
    {
      path: '/draw/device',
      component: () => import('./views/DrawDevice.vue'),
    },
    {
      path: '/draw/complete',
      component: () => import('./views/DrawComplete.vue'),
    },
    {
      path: '/result',
      component: () => import('./views/Result.vue'),
    },
  ],
});
