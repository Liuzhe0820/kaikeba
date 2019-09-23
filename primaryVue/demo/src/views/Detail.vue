<template>
    <div>
        <div>
        <template v-if="item">
            <h2>商品详情 - {{item.name}}</h2>
            <dt>ID</dt>
            <dd>{{item.id}}</dd>
            <dt>名称</dt>
            <dd>{{item.name}}</dd>
            <dt>价格</dt>
            <dd>{{item.price|RMB}}</dd>
        </template>
        <template v-else>
            <h2>没有该商品信息</h2>
        </template>
    </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {RMB} from '@/filters/filters' ;

    export default {
        name:'detail',
        data(){
            return {
                item:{}
            }
        },
        filters:{RMB},
        created(){
            axios({
                url:'/api/item/'+this.$route.params.itemId
            }).then(res=>{
                console.log(res);
                this.item = res.data
            })
        }
    }
</script>

<style scoped>

</style>