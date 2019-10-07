import Vue from 'vue'
import Router from 'vue-router'
import wellomePage from './components/wellomePage.vue'
import allTime from './components/allTime.vue'
import byYear from './components/byYear.vue'
import actor from './components/actor.vue'
import director from './components/director.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'wellomePage',
      component: wellomePage
    },
    {
      path: '/allTime',
      name: 'allTime',
      component: allTime
    },
    {
      path: '/byYear',
      name: 'byYear',
      component: byYear
    },
    {
      path: '/actor/:name',
      name: 'actor',
      component: actor
    },
    {
      path: '/director/:name',
      name: 'director',
      component: director
    }
  ]
})
