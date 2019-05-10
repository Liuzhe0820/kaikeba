<template>
    <div>
        <table border='1'>
            <thead>
                <tr>
                    <th>课程名</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>价格</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in cart" :key="item.id">    
                    <td>{{item.text}}</td>
                    <td>{{item.pic}}</td>
                    <td>{{item.num}}</td>
                    <td>{{item.num*item.pic}}</td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cart:[]
        }
    },
    created() {
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
                this.cart.push({...goods,num:1})
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>