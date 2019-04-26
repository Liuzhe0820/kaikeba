<template>
        <input type="text" :value='inputVal' @input='inputHandle'/>
</template>

<script>
    export default {
        props:{
            val:{
                type:String,
                defaultValue:''
            }
        },
        data(){
            return {//单向数据流原则，组件内不允许修改props传入的值
                inputVal:this.val
            }
        },
        methods:{
            inputHandle(e){
                this.inputVal=e.target.value;
                console.log(this.inputVal)
                //通知父组件，值的变化
                this.$emit('value',this.inputVal);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>