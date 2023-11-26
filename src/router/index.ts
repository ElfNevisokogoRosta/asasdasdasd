import { useStorage } from '@/utils/useLocalStorage'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/AuthLayout.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const [token] = useStorage('token')
  if (!token && to.name === 'home') {
    next('/auth')
  }
  if (token && to.name === 'auth') {
    next('/')
  }
  next()
})

export default router
