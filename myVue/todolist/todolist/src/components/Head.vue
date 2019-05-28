<template>
  <div class='text'>
    <input
      type="text" placeholder="请输入今天的内容，按回车确认"
      v-model="title"
      @keyup.enter='addItem()'
    />

  </div>
</template>

<script>
  export default {
    name:'Head',
    props:{
      addTodos:Function
    },
    data(){
      return {
        title:''
      }
    },
    methods:{
      addItem(){
        const title = this.title.trim();
        if(!title){
          alert('不能为空');
          return
        }
        const todo = {text:title,isComplete:false};
        this.addTodos(todo);
        this.title = '';
      }
    }
  }
</script>

<style scoped>
.text{
  margin:10px 0;
}
  .text input{
    width:100%;
    height:20px;
  }
</style>
