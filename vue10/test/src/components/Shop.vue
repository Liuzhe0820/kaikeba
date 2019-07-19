<template>
    <div>
        <ul>
            <li v-for='item in lists' :key='item.id'>
                <span>{{item.text}}</span>
                <strong>￥{{item.pric}}</strong>
                <button @click='addCart(item)' @addcart='addcartSuccess'>加入购物车</button>
            </li>
        </ul>
        <cart></cart>
    </div>
</template>

<script>
import Cart from './cart';
export default {
  name: "shop",
  components:{
    Cart
  },
  data() {
    return {
      lists: [
        {
          id: 1,
          text: "商品1",
          pric: 999
        },
        {
          id: 2,
          text: "商品2",
          pric: 1999
        }
      ],
      
    }
  },
  methods:{
      addCart(item){
          this.$bus.$emit('addGoods',item)
      },
      addcartSuccess(){
          console.log(1)
      }
  }
  
};
</script>

<style scoped>
</style>