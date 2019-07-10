import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home';
import Recommend from '../pages/Recommend/Recommend';
import Search from '../pages/Search/Search';
import Chat from '../pages/Chat/Chat';
import Me from '../pages/Me/Me';

//二级路由
import Hot from './../pages/Home/Children/Hot.vue'
import Box from './../pages/Home/Children/Box.vue'
import Dress from './../pages/Home/Children/Dress.vue'
import Ele from './../pages/Home/Children/Ele.vue'
import Food from './../pages/Home/Children/Food.vue'
import General from './../pages/Home/Children/General.vue'
import Man from './../pages/Home/Children/Man.vue'
import Mbaby from './../pages/Home/Children/Mbaby.vue'
import Shirt from './../pages/Home/Children/Shirt.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home,
      children:[
        {path:'hot',component:Hot},
        {path:'box',component:Box},
        {path:'dress',component:Dress},
        {path:'ele',component:Ele},
        {path:'general',component:General},
        {path:'food',component:Food},
        {path:'man',component:Man},
        {path:'mbaby',component:Mbaby},
        {path:'shirt',component:Shirt},
      ]
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/serach',
      component:Search
    },
    {
      path:'/chat',
      component:Chat
    },
    {
      path:'/me',
      component:Me
    },
    {
      path:'/',
      redirect:'/home'
    }

  ]
})
