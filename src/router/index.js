import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/resep',
    name: 'Resep',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Resep.vue')
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: () => import ('@/views/Favorite.vue')
  },
  {
    path: '/resep/:id',
    name: 'ResepKategori',
    component: () => import ('@/views/ResepKategori.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
