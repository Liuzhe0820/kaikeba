<template>
  <div id="app">
    <div>
      <ul>
        <li v-for='(goods,index) in goodsList' :key='goods.id'>
          <span>{{goods.text}}</span>
          <span>￥{{goods.pic}}</span>
          <button @click=addGood(index)>加入购物车</button>
        </li>
      </ul>
    </div>
    <div>
      <cart :name='name' :cart='cart'></cart>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'app',
  components: {
    Cart
  },
  data(){
    return {
      name:'开课吧购物车',
      cart:[],
      goodsList:[
        {
          id:1,
          text:'商品1',
          pic:100
        },
        {
          id:2,
          text:'商品2',
          pic:600
        }
      ]
    }
  },
  methods:{
    addGood(i){
      const goods = this.goodsList[i];
      const ret = this.cart.find((value)=>{
        return value.id===goods.id
      });
      if(ret){
        ret.count+=1
      }else{
        this.cart.push({
          ...goods,
          count:1,
          acticve:true
        })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
