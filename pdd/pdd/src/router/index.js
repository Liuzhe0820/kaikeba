import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home';
import Recommend from '../pages/Recommend/Recommend';
import Search from '../pages/Search/Search';
import Chat from '../pages/Chat/Chat';
import Me from '../pages/Me/Me';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
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
