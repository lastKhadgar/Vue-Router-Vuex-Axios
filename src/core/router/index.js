import Vue from 'vue'
import VueRouter from 'vue-router'
import addGuard from './guard'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views/Home.vue'),
    children: [
      {
        path: '/InfoManage1',
        name: 'InfoManage1',
        component: () => import('../../views/management/InfoManage1.vue')
      },
      {
        path: '/InfoManage2',
        name: 'InfoManage2',
        component: () => import('../../views/management/InfoManage2.vue')
      },
      {
        path: '/pathManage1',
        name: 'pathManage1',
        component: () => import('../../views/management/pathManage1.vue')
      },
      {
        path: '/pathManage2',
        name: 'pathManage2',
        component: () => import('../../views/management/pathManage2.vue')
      },
      {
        path: '/peopleManage',
        name: 'peopleManage',
        component: () => import('../../views/management/peopleManage.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default addGuard(router)
