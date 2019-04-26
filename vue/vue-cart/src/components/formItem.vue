<template>
    <div>
        <label v-if='label'>{{label}}</label>
        <div>
            <slot></slot>
            <p class='error' v-if="validateStatus=='error'">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props:['label','prop'],
        data(){
            return {
                validateStatus:'',
                errorMessage:''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .error{
        color:red;
    }
</style>