<template>
    <div>
        <table border='1'>
            <thead>
                <tr>
                    <th></th>
                    <th>名称</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>合计</th>
                </tr>
               
            </thead>
            <tbody>
                <tr v-for='item in cart' :key='item.id' :class={active:item.active}>
                    <td>
                        <input type="checkbox" v-model='item.active'>
                    </td>
                    <td>{{item.text}}</td>
                    <td>{{item.pric}}</td>
                    <td>{{item.num}}</td>
                    <td>{{item.pric*item.num}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">总计：</td>
                    <td>{{total}}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>

export default {
  name: "cart",
  data() {
    return {
      cart:JSON.parse(localStorage.getItem('cart'))|| []
    };
  },
  created(){
      this.$bus.$on('addGoods',(item)=>{this.addCart(item)})
  },
  computed:{
      total(){
          return this.cart.reduce((sum,c)=>{
              if(c.active){
                  sum+=c.num*c.pric
              }
              return sum
          },0)
      }
  },
  methods: {
    addCart(item) {
      const ret = this.cart.find(v => {
        return v.id === item.id;
      });
      if (ret) {
        ret.num = ret.num + 1;
      } else {
        this.cart.push({ ...item, num: 1 ,active:true});
      }
      this.$emit('addcart');
    }
  },
  watch:{
      cart:{
          deep:true,
          handler(newValue){
              localStorage.setItem('cart',JSON.stringify(newValue))
          }
      }
  }
};
</script>

<style >
.active{
    color:orangered;
}
</style>