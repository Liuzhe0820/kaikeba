<template>
  <div class='foot'>
    <div>
      <input type="checkbox" v-model='isChencked' />
      <span>已完成{{compleateCount}}件/总计{{totalCount}}件</span>
    </div>
    <div>
      <button @click='removeAll'>清除已完成</button>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name:'Foot',

    computed:{
      ...mapGetters(['compleateCount','totalCount']),

      isChencked:{
        get(){
          return this.$store.getters.isCheckedAll
        },
        set(val){
          this.$store.dispatch('setSelectAll',val)
        }
      }
    },
    methods:{
      removeAll(){
        this.$store.dispatch("removeAll")
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
