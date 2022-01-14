import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../pages/Main/Home"
import Login from "../pages/Auth/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/auth',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
