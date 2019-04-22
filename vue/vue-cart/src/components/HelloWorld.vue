<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{name}}</p>
    <p>
      <input type="text" v-model='text'>
      <button @click='addGood'>加入购物车</button>
    </p>
    <ul>
      <li v-for='good in goodsList' :key='good.id'>
        <span>{{good.text}}</span>
        <span>价格：{{good.pic}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      name:'哈哈哈哈',
      text:'',
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
  props: {
    msg: String
  },
  created(){
    //创建钩子，组件创建完成执行一次
    
  },
  methods:{
    addGood(){
      this.goodsList.push(
        {
          id:3,
          text:this.text,
          pic:1000
        }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
