<template>
    <div class='win'>
        <div class='head'>
            <slot name='head'></slot>
        </div>
        <slot name='content'></slot>
        <div class='foot'>
            <slot name='foot'></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>