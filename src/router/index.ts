import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../views/Home.vue'
import Settings from '../views/Settings.vue'
import NotFound from '@/views/NotFound.vue'

import Profile from '@/components/Profile.vue'
import WatchList from '@/components/WatchList.vue'
import Friend from '@/components/Friend.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : '/settings',    
    component : Settings,
    name: 'Settings',
    children : [
      {
        path : 'profile',
        component : Profile,
      },
      {
        path : 'watch-list',
        component : WatchList
      },
      {
        path : 'friends',
        component : Friend
      }
    ]
  },
  {
    path : '/:pathMatch(.*)*',
    component : Home,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
