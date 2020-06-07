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
      path: '/book',
      name: 'book-detail',
      component: require('@/components/BookDetail').default,
      props: true
    },
    {
      path: '/examination',
      name: 'exam',
      component: require('@/components/Examination').default,
      props: true
    },
    {
      path: '/examinationResult',
      name: 'examResult',
      component: require('@/components/ExaminationResult').default,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
