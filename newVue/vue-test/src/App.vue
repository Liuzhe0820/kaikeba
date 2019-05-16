<template>
  <div id="app">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <form-test></form-test>
    <!-- <new-form></new-form> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import formTest from './components/formTest.vue';
import newForm from './components/newForm.vue';
export default {
  name: 'app',
  components: {
    HelloWorld,
    formTest,
    newForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
