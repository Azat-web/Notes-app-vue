import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store"

import Home from "../pages/Main/Home"
import Login from "../pages/Auth/Login"

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth',
    name: 'auth',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
if(!store.state.auth.isAuth && to.name === "home") {
  return next({
    name: "auth"
  })
} else (
  next()
)
})

export default router
