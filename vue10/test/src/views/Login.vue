<template>
    <div>
        <h3>用户登录</h3>
        <button @click='login'>登录</button>
    </div>
</template>

<script>
export default {
 methods: {
     login(){
         window.isLogin='true';
         //获取查询参数
         const redirect = this.$route.query.redirect||'/';
         //路由到重定向地址
         this.$router.push(redirect)
     }
 },
};
</script>

<style lang="scss" scoped>
</style>