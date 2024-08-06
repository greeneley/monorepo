import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('@/views/ChartPage.vue')
    }
  ]
})

export default router
