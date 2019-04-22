
<template>
<div>
    <h3>{{name}}</h3>
    <table border='1'>
        <tr>
            <th>课程名</th>
            <th>单价</th>
            <th>数量</th>
            <th>价格</th>
        </tr>
        <tr v-for='(c,i) in cart' :key='c.id'>
            <td>{{c.text}}</td>
            <td>￥{{c.pic}}</td>
            <td>
                <button @click='minus(i)'>-</button>
                {{c.count}}
                 <button @click='add(i)'>+</button>
                </td>
            <td>￥{{c.pic*c.count}}</td>
        </tr>
    </table>
</div>
    
</template>

<script>
export default {
  props: ["name", "cart"],
  methods:{
      minus(i){
          const count = this.cart[i].count;
          if(count>1){
            this.cart[i].count-=1;
          }else{
              this.remove(i);
          }
          
      },
      add(i){
          this.cart[i].count+=1;
      },
      remove(i){
          if(window.confirm('确定删除？')){
              this.cart.splice(i,1);
          }
      }
  }
};
</script>

<style>
</style>
