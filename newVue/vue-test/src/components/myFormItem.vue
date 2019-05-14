<template>
    <div>
        <label v-if='label'>{{label}}</label>
        <!-- 插槽 -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>