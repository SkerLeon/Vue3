import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'i18n',
    component: ()=> import ('../views/i18ntest.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;