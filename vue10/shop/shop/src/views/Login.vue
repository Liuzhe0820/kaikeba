<template>
    <div>
        <div class='logo'>
            <img src="https://img.kaikeba.com/logo-new.png" alt="">
        </div>
        <cube-form
            :model='model'
            :schema='schema'
            @submit.prevent='handleLogin'
            @validate='handelValidate'
        >

        </cube-form>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                model:{
                    username:'',
                    password:''
                },
                schema:{
                    fields:[
                        {
                            type:'input',
                            modelKey:'username',
                            label:'用户名',
                            props:{
                                placeholder:'请输入用户名'
                            },
                            rules:{
                                required:true
                            },
                            trigger:'blur'
                        },
                        {
                            type:'input',
                            modelKey:'password',
                            label:'密码',
                            props:{
                                placeholder:'请输入密码',
                                type:'password',
                                eye:{open:false}
                            },
                            rules:{
                                required:true
                            },
                            trigger:'blur'
                        },
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods:{
            handleLogin(e){//登录
                this.$store.dispatch('login',this.model).then(success=>{
                    if(success){
                        const path = this.$route.query.reurect||'/';
                        this.$router.push(path);
                    }
                }).catch(error=>{
                    const toast=this.$createToast({
                        time:2000,
                        text:'失败',
                        type:'error'
                    }).show()
                })
            },
            handelValidate(ret){//校验
                console.log(ret)
            }
        }
    }
</script>

<style  scoped>
    .logo{
        width:100%;
        height:100px;
    }
    .logo img{
            width:100%;
            height:100%;
        }
</style>