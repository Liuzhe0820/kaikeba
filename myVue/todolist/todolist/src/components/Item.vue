<template>
 <li
  @mouseenter="itemIsCur(true)"
  @mouseleave="itemIsCur(false)"
  :style='{background:itemBgColor}'
  >
        <label>
          <input type="checkbox" v-model="todo.isComplete"/>
          <span>{{todo.text}}</span>
        </label>
        <button v-show="isShowDelBtn" @click = 'delItem()'>删除</button>
      </li>
</template>

<script>
  export default {
    name:'item',
    props:{
      todo:Object,
      index:Number,
      removeItem:Function
    },
    data(){
      return {
        isShowDelBtn:false,
        itemBgColor:'#fff'
      }
    },
    methods:{
      itemIsCur(flag){
        this.isShowDelBtn=flag;
        this.itemBgColor=flag? 'red':'#fff';
      },
      delItem(){
        if(window.confirm(`确定删除${this.todo.text}吗？`)){
          this.$store.dispatch('removeTodos',this.index)
        }
      }
    }
  }
</script>

<style  scoped>
  li{

    display:flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
