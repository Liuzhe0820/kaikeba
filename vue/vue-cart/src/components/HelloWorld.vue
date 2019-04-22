<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      name:'哈哈哈哈'
    }
  },
  props: {
    msg: String
  },
  created(){
    //创建钩子，组件创建完成执行一次
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
