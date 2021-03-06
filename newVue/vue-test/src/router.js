import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import mylogin from './views/mylogin.vue';
import List from './views/List.vue';
import Detail from './views/Detail.vue';
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path:'',component:List},
        {path:'/detail/:id',component:Detail}
      ]
    },
    {
      path: '/mylogin',
      name: 'mylogin',
      component: mylogin
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
