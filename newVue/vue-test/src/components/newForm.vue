<template>
    <div>
        <h3>Element表单</h3>
        <el-form :model='model' :rules='rules' ref='loginForm'>
            <el-form-item label='用户名' prop='username'>
                <el-input v-model='model.username' autocomplete='off'></el-input>
            </el-form-item>
             <el-form-item label='确认密码' prop='password'>
                <el-input type='password' v-model='model.password' autocomplete='off'></el-input>
            </el-form-item>
             <el-form-item >
                <el-button type='primary' @click='submitForm("loginForm")'>提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                model:{username:'liuzhe',password:''},
                rules:{ 
                    username:[{required:true,message:'请输入用户名'}],
                    password:[{required:true,message:'请输入用密码'}],
                }
            }
        },
        methods:{
            submitForm(form){
                console.log(form);
                // return false
                //表单的全局校验
                // this.$refs[form].validate((valid)=>{
                //     if(valid){
                //         alert('请求登录')
                //     }else{
                //         alert('校验失败')
                //     }
                // })
            }
        }
    }
</script>

<style  scoped>

</style>