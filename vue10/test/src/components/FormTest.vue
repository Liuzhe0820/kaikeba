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
        <h3>自己的表单</h3>
        <m-form :model='model' :rules='rules' ref='myForm'>
            <MFormItem label='用户名' prop='username'>
                <MInput :value='model.username' @input='model.username=$event'></MInput>
            </MFormItem>
            <MFormItem label='密码' prop='password'>
                <MInput type='password' :value='model.password' @input='model.password=$event'></MInput>
            </MFormItem>
            <MFormItem >
            <el-button type='primary' @click='submitForm("myForm")'>提交</el-button>
            </MFormItem>
        </m-form>
    </div>
</template>

<script>
import MInput from './MInput';
import MFormItem from './MFormItem';
import MForm from './MForm';
    export default {
        name:'FormTest',
        components:{
            MInput,MFormItem,MForm
        },
        data(){
            return {
                model:{username:'tom',password:''},
                rules:{
                    username:[{required:true,message:'请输入用户名'}],
                    password:[{required:true,message:'请输入密码'}]
                }
            }
        },
        methods:{
            submitForm(form){
                this.$refs[form].validate(valid=>{
                    if(valid){
                        alert('请求登录')
                    }else{
                        alert('校验失败')
                    }
                })
            }
        }
    }
</script>

<style>

</style>