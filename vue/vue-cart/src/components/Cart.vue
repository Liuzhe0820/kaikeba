
<template>
<div>
    <h3>{{name}}</h3>
    <table border='1'>
        <tr>
            <th>#</th>
            <th>课程名</th>
            <th>单价</th>
            <th>数量</th>
            <th>价格</th>
        </tr>
        <tr v-for='(c,i) in cart' :key='c.id' :class='{active:c.active}'>
            <td>
                <input type="checkbox" v-model='c.active'>
            </td>
            <td>{{c.text}}</td>
            <td>￥{{c.pic}}</td>
            <td>
                <button @click='minus(i)'>-</button>
                {{c.count}}
                 <button @click='add(i)'>+</button>
                </td>
            <td>￥{{c.pic*c.count}}</td>
        </tr>
        <tr>
            <td></td>
            <td colspan='2'>{{activeCount}}/{{count}}</td>
            <td colspan='2'>{{total}}</td>
        </tr>
    </table>
</div>
    
</template>

<script>
export default {
  props: ["name"],
  data(){
      return {
          cart:[]
      }
  },
  created(){//组件创建完成执行一次，仅一次
    //接收父组件的信息   参数1  事件名  参数2   具体参数
    this.$bus.$on('addCart',(goods)=>{
        const ret = this.cart.find((value)=>{
        return value.id===goods.id
      });
      if(ret){
        ret.count+=1
      }else{
        this.cart.push({
          ...goods,
          count:1,
          active:true
        })
      }
    })
  },
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
  },
  computed: {
      activeCount() {
          return this.cart.filter((value)=>{
              return value.active
          }).length
      },
      count(){
          return this.cart.length
      },
      total(){
          let num = 0;
          this.cart.forEach((e) => {
              if(e.active){
                  num+=e.pic*e.count
              }
          });
          return num
      }
  },
};
</script>

<style>
.active{
    background-color:yellow;
}
</style>
