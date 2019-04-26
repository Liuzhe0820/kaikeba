<template>
        <input type="text" :value='inputVal' @input='inputHandle'/>
</template>

<script>
    export default {
        props:{
            val:{
                type:String,
                default:'111'
            }
        },
        data(){
            return {//单向数据流原则，组件内不允许修改props传入的值
                inputVal:this.val
            }
        },
        methods:{
            inputHandle(e){ //通知父组件，值的变化
                this.inputVal=e.target.value;
                console.log(this.$emit);
                this.$emit('value',this.inputVal);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>