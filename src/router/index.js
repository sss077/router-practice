import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    // component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../pages/about/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../pages/contact/Contact.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/register/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
