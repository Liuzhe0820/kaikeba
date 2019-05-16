<template>
    <div>
        <table border='1'>
            <thead>
                <tr>
                    <th>是否选中</th>
                    <th>课程名</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>价格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in cart" :key="item.id" :class="{active:item.active}">   
                    <td >
                        <input type="checkbox" v-model='item.active'>    
                    </td> 
                    <td>{{item.text}}</td>
                    <td>{{item.pic}}</td>
                    <td>{{item.num}}</td>
                    <td>{{item.num*item.pic}}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan='4'>总计：</td>
                    <td>{{total}}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cart:JSON.parse(localStorage.getItem('cart')) ||[]
        }
    },
    created() {
        // console.log(JSON.parse(localStorage.getItem('cart')) || [])
        this.$bus.$on('addCart',(goods)=>{
            this.addCart(goods)
        })
    },
    methods:{
        addCart(goods){
            const ret = this.cart.find((item)=>{
                return item.id ===goods.id
            });
            if(ret){
                ret.num+=1;
            }else{
                this.cart.push({...goods,num:1,active:true})
            }
            this.$emit('addCartSuccess');//事件派发，通知父组件
        }
    },
    computed: {//计算属性
        total() {
            return this.cart.reduce((sum,c)=>{
                if(c.active){
                    sum+=c.pic*c.num
                }
                return sum
            },0)
        }
    },
    watch:{
        cart:{//监听cart数据变化执行
            deep:true,
            handler:function(newVal,oldVal){
                localStorage.setItem('cart',JSON.stringify(newVal));
            }
        }
    }
};
</script>

<style scoped>
    .active{
        background-color:red;
    }
</style>