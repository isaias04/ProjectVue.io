import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('@/components/contador.vue'),
    },
    {
      path: '/ListadoTareas',
      name: 'ListadoTareas',
      component: () => import('@/components/ListadoTareas.vue'),
    }
  ],
});

export default router;
