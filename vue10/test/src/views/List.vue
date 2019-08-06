<template>
    <div>
         <ul>
            <li v-for='item in lists' :key='item.id'>
              <router-link :to='`/detail/${item.id}`'>
                <span>{{item.text}}</span>
                <strong>￥{{item.pric}}</strong>
                <button @click.prevent.stop='addCart(item)' @addcart='addcartSuccess'>加入购物车</button>
              </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
      ]
    };
  },
   methods:{
      addCart(item){
          this.$bus.$emit('addGoods',item)
      },
      addcartSuccess(){
         
      }
  }
};
</script>

<style lang="scss" scoped>
</style>