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
    component: LandingPage,
    meta: { title: 'Item Tracker' }
  },
  {
    path: '/items',
    name: 'Items',
    component: Items,
    meta: { title: 'Item Tracker List' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Item Tracker Contact' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'Item Tracker About' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
