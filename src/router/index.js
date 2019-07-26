import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index'
import Comment from 'components/comment'
import Business from 'components/business'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    }
  ]
})
