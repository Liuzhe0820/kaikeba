import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

 const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
     path:'/login',
     name:'login',
     component: () => import("./views/Login.vue")
   },
   {
    path:'/',
    name:'index',
    component: ()=>import ('./views/Index.vue')
  },
  {
    path:'/userCenter',
    name:'userCenter',
    component: ()=>import ('./views/userCenter.vue')
  },
  {
    path:'/course/:id',
    name:'course',
    component: ()=>import ('./views/course.vue')
  },
  ],
  
});

export default router;