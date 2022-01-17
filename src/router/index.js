import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/newPage',
    name: 'NewPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import(/* webpackChunkName: "about" */ '../views/componentA.vue')
      }, {
        path: 'b',
        component: () => import(/* webpackChunkName: "about" */ '../views/componentB.vue')
      }, {
        path: 'nameView',
        component: () => import(/* webpackChunkName: "about" */ '../views/NameView.vue'),
        children: [
          {
            path: 'ctoa',
            components: {
              left: () => import('../views/componentC.vue'),
              right: () => import('../views/componentA.vue')
            }
          },
          {
            path: 'atob',
            components: {
              left: () => import('../views/componentA.vue'),
              right: () => import('../views/componentB.vue')
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
