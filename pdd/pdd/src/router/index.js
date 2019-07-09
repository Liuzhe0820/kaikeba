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
      Component:Home
    },
    {
      path:'/recommend',
      Component:Recommend
    },
    {
      path:'/serach',
      Component:Search
    },
    {
      path:'/chat',
      Component:Chat
    },
    {
      path:'/me',
      Component:Me
    },
    {
      path:'/',
      redirect:'/home'
    }

  ]
})
