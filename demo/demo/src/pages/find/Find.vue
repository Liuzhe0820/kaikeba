<template>
    <div>
        1
    </div>
</template>

<script>
import HTTP from '../../api/http';
    export default {
        name:'find',
        mounted(){
            this.getList();
           
        },
        methods:{
            getList(){
                var API =HTTP.HOST+HTTP.API_URL.FINDINDEX;
                console.log(API)
                 this.axios.post(API,this.qs.stringify({num:  1}),{
                headers: {
                   Authorization:'eyJ1aWQiOjMsInNpZ24iOiI3YWUzNTAwY2E3OWE5ZTE3MzllMzJmNTFkNjc2NGM1YSIsInRpbWVzdGFtcCI6MTU2MjkyMDMzN30='
                }
                }).then(function(res){
                    console.log(res.data)
                        //控制台打印请求成功时返回的数据
                    //bind(this)可以不用
                }.bind(this)).catch(function(err){
                    if(err.response) {
                    console.log(err.response)
                        //控制台打印错误返回的内容
                    }
                        //bind(this)可以不用
                }.bind(this))

            }
        }
    }
</script>

<style>

</style>