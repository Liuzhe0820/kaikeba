<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        //provide返回的对象可以跨层级传给子孙组件
        provide(){
            return {
                form :this //将表单实例，传递给子孙组件
            }
        },
        props:{
            model:{
                type:Object,
                required:true
            },
            rules:{
                type:Object
            }
        },
        methods:{
            async validate(cb){//全局校验
                const tasks = this.$children.filter((item)=>{//在子组件中过滤包含 prop属性的子组件
                    item.prop
                }).map((item)=>{
                    item.validate()
                });
                console.log(tasks);
                const results = await Promise.all(tasks);
                if(results.some(valid=>!valid)){
                    cb(false);
                    //校验失败
                }else{
                    cb(true);
                }
            }
        }
    }
</script>

<style  scoped>

</style>