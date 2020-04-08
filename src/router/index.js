import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '@/views/Detail.vue'
import Hot from '@/views/Hot.vue'
import Movie from '@/views/Movie.vue'
import Top from '@/views/Top.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/hot' },
  { path: '/detail', component: Detail },
  { path: '/hot', component: Hot },
  { path: '/movie', component: Movie },
  { path: '/TOP', component: Top }
]

const router = new VueRouter({
  routes
})

export default router
