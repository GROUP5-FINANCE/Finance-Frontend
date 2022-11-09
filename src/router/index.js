import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../leasing/pages/home-view.vue'
import SignIn from '../../src/leasing/pages/login-view.vue'
import SignUp from '../../src/leasing/pages/register-user-view.vue'
import UserProfile from '../../src/leasing/pages/user-profile-view.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/home-view',
      name: 'home-view',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/user-profile',
      name: 'user-profile',
      component: UserProfile
    }
  ]
})

export default router
