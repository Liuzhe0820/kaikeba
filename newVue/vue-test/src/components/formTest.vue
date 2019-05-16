<template>
    <div>
        <h3>自己写的组件</h3>
        <my-form :model='model' :rules='rules' ref='myForm'>
             <my-form-item label='用户名' prop='username'>
                <my-input v-model='model.username' ></my-input>
            </my-form-item>
            <my-form-item label='密码' prop='password'>
                <my-input type='password' v-model='model.password' ></my-input>
            </my-form-item>
            <my-form-item label='' prop='password'>
                <el-button type='primary' @click='submitForm("myForm")'>提交</el-button>
            </my-form-item>
        </my-form>
       
        <!-- <my-input :value='model.username' @input='model.username=$event'></my-input> -->
        
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
    import myInput from './myInput.vue';
    import myFormItem from './myFormItem.vue';
    import myForm from './myForm.vue';
    export default {
        components: {
            myInput,
            myFormItem,
            myForm
        },
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
                console.log(form)
                // return false
                //表单的全局校验
                this.$refs[form].validate((valid)=>{
                    console.log(valid)
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

<style lang="scss" scoped>
</style>