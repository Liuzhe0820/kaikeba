<template>
  <div id="app">
    <win>
      <template slot='head'>
        head
      </template>
      <template slot='content'>
        content
      </template>
      <template slot='foot'>
        foot
      </template>
    </win>

    <form-test></form-test>
    <btn @lalala='lalalaClick'></btn>
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
      <cart :name='name'></cart>
    </div>
    <k-input v-model="somval"></k-input>
         {{somval}}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Cart from "./components/Cart.vue";
import axios from "axios";
import FormTest from './components/FormTest.vue';
import Btn from './components/Btn.vue';
import KInput from './components/Input.vue';
import Win from './components/Win.vue';
export default {
  name: "app",
  components: {
    Cart,
    FormTest,
    Btn,
    KInput,
    Win
  },
  data() {
    return {
      name: "开课吧购物车",
      goodsList: [],
      somval:'111'
    };
  },
  async created() {
    //查询产品列表
      const ret = await axios.get("/api/goods");
      this.goodsList = ret.data.data;
      
  },  
  methods: {
    addGood(i){
      const goods = this.goodsList[i];
      //派发事件   参数1  事件名称  参数2 具体参数
      this.$bus.$emit("addCart", goods);
    },
    lalalaClick(obj){
      console.log(obj)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
