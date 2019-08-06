<template>
    <div>
        <h3>商品详情</h3>
        <p>{{$route.params.id}}</p>
        <p>{{id}}</p>
    </div>
</template>

<script>
    export default {
        props:['id']
    }
</script>

<style scoped>

</style>