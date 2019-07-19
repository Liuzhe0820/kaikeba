<template>
  <div class='bottomTabBar'>
    <ul class='bottomTabBarList'>
      <li @click='swichTo("/home")'>
        <div><img :src="$route.path.includes('/home')?imgData[0].select:imgData[0].nomore" alt=""></div>
        <span :class='{on:$route.path.includes("/home")}'>首页</span>
      </li>
      <li @click='swichTo("/recommend")'>
        <div><img :src="$route.path.includes('/recommend')?imgData[1].select:imgData[1].nomore" alt=""></div>
        <span :class='{on:$route.path.includes("/recommend")}'>推荐</span>
      </li>
      <li @click='swichTo("/serach")'>
        <div><img :src="$route.path.includes('/serach')?imgData[2].select:imgData[2].nomore" alt=""></div>
        <span :class='{on:$route.path.includes("/serach")}'>搜索</span>
      </li>
     <li @click='swichTo("/chat")'>
        <div><img :src="$route.path.includes('/chat')?imgData[3].select:imgData[3].nomore" alt=""></div>
        <span :class='{on:$route.path.includes("/chat")}'>聊天</span>
      </li>
      <li @click='swichTo("/me")'>
        <div><img :src="$route.path.includes('/me')?imgData[4].select:imgData[4].nomore" alt=""></div>
        <span :class='{on:$route.path.includes("/me")}'>我的</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'TanBar',
    data(){
      return {
        imgData:[
          {
            nomore:require('../../../static/img/icon_home.png'),
            select:require('../../../static/img/icon_home_selected.png')
          },
          {
            nomore:require('../../../static/img/icon_intro.png'),
            select:require('../../../static/img/icon_intro_selected.png')
          },
          {
            nomore:require('../../../static/img/icon_search.png'),
            select:require('../../../static/img/icon_search_selected.png')
          },
          {
            nomore:require('../../../static/img/icon_chat.png'),
            select:require('../../../static/img/icon_chat_selected.png')
          },
          {
            nomore:require('../../../static/img/icon_mine.png'),
            select:require('../../../static/img/icon_mine_selected.png')
          },
        ]
      }
    },
    methods:{
      swichTo(path){
        this.$router.replace(path);
      }
    }
  }
</script>

<style lang='stylus' ref='stylesheet/stylus'>
  .bottomTabBar{
    width:100%;
    height:50px;
    position:fixed;
    left:0;
    bottom:0;
    background-color:#fff;
    z-index: 999;
  }
  .bottomTabBarList {
    margin-top:3px;
    display:flex;
    width:100%;
    height:100%;
    flex-wrap :nowrap;
    flex-direction :row;
    justify-content:space-between;
  }
  .bottomTabBarList li{
    display:flex;
    flex:1;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size :14px;
    line-height:15px;
    color:#666;
  }
  .bottomTabBarList li img{
    width:25px;
    height:25px;
  }
  .on{
    color:red;
  }
</style>
