<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        //返回的对象可以跨层级传参给子孙
        provide(){
            return {
                form:this
            }
            
        },
        props:{
            model:{type:Object,required:true},
            rules:{type:Object}
        },
        methods:{
            async validate(cb){
                const tasks = this.$children.filter((item)=>{
                    return item.prop
                }).map((item)=>{
                    return item.validate()
                });
                const results = await Promise.all(tasks);
                if(results.some(valid=>!valid)){
                    cb(false)
                }else{
                    cb(true)
                }
            }
            
        }
    }
</script>

<style scoped>

</style>