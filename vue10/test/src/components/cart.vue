<template>
    <div>
        <table>
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
        </table>
    </div>
</template>

<script>

export default {
  name: "cart",
  data() {
    return {
      cart: []
    };
  },
  created(){
      this.$bus.$on('addGoods',(item)=>{this.addCart(item)})
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
  }
};
</script>

<style >
.active{
    color:orangered;
}
</style>