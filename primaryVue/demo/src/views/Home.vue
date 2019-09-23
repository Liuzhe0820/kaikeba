<template>
  <div class="home">
    <h2>商品列表</h2>
    <select v-model='sort'>
      <option value="desc">从高到低</option>
      <option value="asc">从低到高</option>
    </select>
    <ul class="item-list">
      <li class="head">
          <span>名称</span>
          <span>价格</span>
          <span>操作</span>
      </li>
      <li v-for="item of items" :key="item.id">
          <span>
            <router-link :to='{name:"detail",params:{itemId:item.id}}'>{{item.name}}</router-link>
          </span>
          <span>{{item.price|RMB}}</span>
          <span>
            <button>添加到购物车</button>
          </span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {RMB} from '@/filters/filters'

export default {
  name: 'home',
  data(){
    return {
      items:[],
      
    }
  },
  filters: {
    RMB
  },
  watch:{
    $route(){
      this.getItem()
    }
  },
  computed:{
    sort:{
      get(){
        console.log(this.$route)
        return this.$route.query.sort || 'desc'
      },
      set(newVal){
        console.log(newVal);
        this.$router.push({name:'home',query:{sort:newVal}})
      }
    }
  },
  created(){
    this.getItem();
  },
  methods:{
    getItem(){
      axios({
        url:'api/items',
        params:{
          sort:this.sort
        }
      }).then(res=>{
        console.log(res);
        this.items = res.data
      })
    }
  }
}
</script>
<style>
ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

.item-list li {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px dotted #333;
}
.item-list li.head {
    font-weight: bold;
}
.item-list li span {
    min-width: 200px;
}
</style>
