import Vue from 'vue'
import VueRouter from 'vue-router'
import Items from '@/views/Items'
import Contact from '@/views/Contact'
import About from '@/views/About'
import LandingPage from '@/components/LandingPage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/items',
    name: 'Items',
    component: Items
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
