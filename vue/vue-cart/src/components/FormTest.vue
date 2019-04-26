<template>
    <div>
        <h3>element表单</h3>
        <!-- modle  数据模型  rules 校验规则 ref  表单的名字-->
         <el-form :model='runForm' :rules='rules' ref='loginForm'>
             <!-- prop 用于校验 -->
             <el-form-item label='用户名' prop='name'>
                 <el-input v-model='runForm.name'></el-input>
             </el-form-item>
             <el-form-item label='密码' prop='pwd'>
                 <el-input v-model='runForm.pwd'></el-input>
             </el-form-item>
              <el-form-item >
                 <el-button @click='submitForm'>登录</el-button>
             </el-form-item>
         </el-form>
         <kform-item></kform-item>
    </div>
</template>

<script>
import KInput from './Input.vue';
import KformItem from './formItem.vue';
export default {
    components:{
        KInput,
        KformItem
    },
    data(){
        return {
            somval:'111',
            runForm:{
                name:'',
                pwd:''
            },
            rules:{
                name:[
                    {required:true,message:'请输入用户名'},
                    {min:6,max:12,message:'请输入6-12位的名次'}
                ],
                pwd:[
                   {required:true,message:'请输入密码'},
                ]
            }
        }
    },
    methods:{
        submitForm(){
            console.log(this)
            this.$refs.loginForm.validate((valid)=>{
                if(valid){
                    alert('登录成功')
                }else{
                    alert('登录失败');
                    return false
                }
            })
        }
    }
};
</script>

<style lang="scss" scoped>
</style>