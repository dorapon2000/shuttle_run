import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shelf',
      component: require('@/components/Shelf').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
