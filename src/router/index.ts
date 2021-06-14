import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/Chart.vue'),
    meta: {
      title: 'Chart'
    }
  },
  {
    path: '/founder',
    name: 'Founder',
    component: () => import('../views/Founder.vue'),
    meta: {
      title: 'Founder'
    }
  },
  {
    path: '/partner',
    name: 'Partner',
    component: () => import('../views/Partner.vue'),
    meta: {
      title: 'Partner'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../views/Portfolio.vue'),
    meta: {
      title: 'Portfolio'
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue'),
    meta: {
      title: 'Service'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
