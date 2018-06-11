import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import City from '@/page/city/City'
import Detail from '@/page/detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component: Home
    },
    {
      path: '/city',
      
      component: City
    },
    {
      path: '/detail/:id',
      
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
