import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/teetime',
      name: 'teetime',
      component: () => import('@/views/TeeTime/Index.vue'), // Add a layout for Tee Time
      children: [
        {
          path: '', // Matches /teetime
          name: 'teetime-list',
          component: () => import('@/views/TeeTime/ListView.vue'),
        },
        {
          path: 'create', // Matches /teetime/create
          name: 'teetime-create',
          component: () => import('@/views/TeeTime/CreateView.vue'),
        },
      ]
    }
  ],
})

export default router
