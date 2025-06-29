import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Users from '../pages/Users.vue'
import Login from '../pages/Login.vue'
import SelfMedication from '../pages/SelfMedication.vue'
import { ROUTES, ROUTE_NAMES } from '../constants/routes.js'

const routes = [
  {
    path: ROUTES.HOME,
    name: ROUTE_NAMES.HOME,
    component: Home
  },
  {
    path: ROUTES.USERS,
    name: ROUTE_NAMES.USERS,
    component: Users
  },
  {
    path: ROUTES.LOGIN,
    name: ROUTE_NAMES.LOGIN,
    component: Login
  },
  {
    path: ROUTES.GET_SELF_MEDICATION,
    name: ROUTE_NAMES.SELF_MEDICATION,
    component: SelfMedication
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 