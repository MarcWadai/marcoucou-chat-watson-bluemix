import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListMessage from '@/components/ListMessage'

Vue.use(Router)
/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: ListMessage
    }
  ]
})
