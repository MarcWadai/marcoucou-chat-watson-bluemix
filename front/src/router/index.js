
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Chat from '@/components/Chat'

Vue.use(Router)
/* eslint-disable no-new */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
