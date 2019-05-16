<template>
    <div>
        <label v-if='label'>{{label}}</label>
        <!-- 插槽 -->
        <slot></slot>
        <!-- 校验错误信息 -->
        <p v-if='errorMessage' class='error'>{{errorMessage}}</p>
    </div>
</template>

<script>
    import Validator from 'async-validator';

    export default {
        inject:['form'],
        props:['label','prop'],
        data(){
            return {
                errorMessage:''
            }
        },
        created(){
            this.$on('validate',this.validate)
        },
        methods:{
            validate(){//校验
                return new Promise(resolve=>{
                    //制定校验规则
                    const descriptor = {[this.prop]:this.form.rules[this.prop]};
                    //创建校验器
                    const validator = new Validator(descriptor);
                    //执行校验
                    validator.validate({[this.prop]:this.form.model[this.prop]},(errors)=>{
                        console.log(errors);
                        if(errors){
                            this.errorMessage = errors[0].message;
                            resolve(false);
                        }else{
                            this.errorMessage = '';
                            resolve(true);
                        }
                    })
                })
                
            }
        }
    }
</script>

<style  scoped>
    .error{
        color:red;
    }
</style>