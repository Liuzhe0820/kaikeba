<template>
  <div class='foot'>
    <div>
      <input type="checkbox" v-model='isChencked' />
      <span>已完成{{compleateCount}}件/总计{{lists.length}}件</span>
    </div>
    <div>
      <button @click='removeAll'>清除已完成</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Foot',
    props:{
      lists:Array,
      setSelectAll:Function,
      removeAll:Function
    },
    computed:{
      compleateCount(){
        return this.lists.reduce((total,item)=>{
          if(item.isComplete){
            return total+1
          }else{
            return total
          }
        },0);
      },
      isChencked:{
        get(){
          return this.compleateCount === this.lists.length &&this.lists.length>0
        },
        set(val){
          this.setSelectAll(val)
        }
      }
    }
  }
</script>

<style  scoped>
  .foot{
    display:flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    border:1px solid #eee;
    margin:10px 0;
    padding:5px;
  }
 .foot button{
   height:30px;
   font-size: 16px;
   line-height: 30px;
   background-color: yellowgreen;
   color:#fff;
  }
</style>
