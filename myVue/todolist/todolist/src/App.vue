<template>
  <div id="app">
    <Head />
    <List :lists='lists' />
    <Foot />
  </div>
</template>

<script>

import Head from './components/Head.vue';
import List from './components/List.vue';
import Foot from './components/Foot.vue';
export default {
  name: 'App',
  components: {
    Head,
    List,
    Foot
  },
  data(){
    return {
      lists:[
        {text:'吃饭',isComplete:true},
        {text:'睡觉',isComplete:false},
        {text:'学习',isComplete:true}
      ]
    }
  }
}
</script>

<style>
  #app{
    width:300px;
    padding:10px;
    margin:0 auto;
    border:1px solid #eee;
  }
</style>
