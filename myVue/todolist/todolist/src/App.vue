<template>
  <div id="app">
    <Head :addTodos='addTodos' />
    <List :lists='lists' :removeItem='removeItem' />
    <Foot :lists='lists' :setSelectAll='setSelectAll' :removeAll='removeAll'/>
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
  },
  methods:{
    removeItem(index){
      this.lists.splice(index,1)
    },
    addTodos(item){
      this.lists.unshift(item)
    },
    setSelectAll(val){
      this.lists.forEach((item)=>{
        item.isComplete = val
      })
    },
    removeAll(){
      this.lists.forEach((item,index)=>{
          if(item.isComplete){
            this.lists.splice(index,1)
          }
      })
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
