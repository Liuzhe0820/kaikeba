import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import List from './views/List.vue';
import Detail from './views/Detail.vue';
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path:'',component:List},
        {path:'/detail/:id',component:Detail,props:true}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      beforeEnter(to,form,next){
        if(!window.isLogin){
              next('/login?redirect='+to.path)
            }else{
              next()
            }
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
// router.beforeEach((to,form,next)=>{
//   //判断是否登录
//   if(to.path==='/about'&&!window.isLogin){
//     next('/login?redirect='+to.path)
//   }else{
//     next()
//   }
// })
export default router;
