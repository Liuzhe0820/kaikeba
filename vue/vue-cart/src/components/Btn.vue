<template>
    <div>
        <el-button @click='handleClick'>btn按钮</el-button>
    </div>
</template>

<script>
    export default {
        methods:{
            handleClick(){
                this.$emit('lalala',{message:'button'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>