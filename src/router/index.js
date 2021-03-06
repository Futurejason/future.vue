import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: () => import( '../components/city/City.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import( '../components/detail/Detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
