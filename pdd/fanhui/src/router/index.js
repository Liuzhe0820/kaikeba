import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home';
import Recommend from '../pages/Recommend/Recommend';
import Search from '../pages/Search/Search';
import Chat from '../pages/Chat/Chat';
import Me from '../pages/Me/Me';

//二级路由
import Hot from './../pages/Home/Children/Hot/Hot.vue'
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
      children: [
        // 热门版块
        {path: 'hot', component: Hot},
        // 服饰版块
        {path: 'dress', component: Dress},
        // 鞋包版块
        {path: 'box', component: Box},
        // 母婴版块
        {path: 'mbaby', component: Mbaby},
        // 百货版块
        {path: 'general', component: General},
        // 食品版块
        {path: 'food', component: Food},
        // 内衣版块
        {path: 'shirt', component: Shirt},
        // 男装版块
        {path: 'man', component: Man},
        // 电器版块
        {path: 'ele', component: Ele},

        {path: '/home',redirect: '/home/hot'}
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
