<template>
  <div class="hello">
    <p>{{title}}</p>
    <ul>
      <li v-for="(item) in goods" :key="item.id">
        <span>{{item.text}}</span>
        <span>{{item.pic}}</span>
        <button @click='addCart(item)'>加入购物车</button>
      </li>
    </ul>
    <div>
        <cart ref='cart'></cart>
    </div>
  </div>
</template>

<script>
import Cart from './Cart.vue';
export default {
  name: 'HelloWorld',
  components: {
    Cart,
  },
  data(){
    return {
      title:"购物车",
      goods:[
        {
          id:1,
          text:'商品1',
          pic:9999
        },
        {
          id:2,
          text:'商品2',
          pic:19999
        }
      ],
      cart:[]
    }
  },
  created(){

  },
  methods: {
    addCart(goods){
    //  this.$refs.cart.addCart(goods)
    this.$bus.$emit('addCart',goods);
  },
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
