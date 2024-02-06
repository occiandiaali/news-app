import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/top',
    component: () => import('pages/TopPage.vue')
  },
  {
    path: '/for-you',
    component: () => import('pages/ForYou.vue')
  },
  {
    path: '/tech',
    component: () => import('pages/TechPage.vue')
  },
  {
    path: '/world',
    component: () => import('pages/WorldPage.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
