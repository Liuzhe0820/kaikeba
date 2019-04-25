<template>
    <div>
        <h3>element表单</h3>
        <!-- modle  数据模型  rules 校验规则 ref  表单的名字-->
         <el-form :model='runForm' :rules='rules' ref='runForm'>
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
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>