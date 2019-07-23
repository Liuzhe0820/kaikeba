<template>
  <div id="app">
    
      <el-button>el-button</el-button>
    
    <shop></shop>
    <FormTest></FormTest>
  </div>
</template>

<script>
import Shop from './components/Shop'
import FormTest from './components/FormTest'
export default {
  name: 'app',
  components: {
    Shop,FormTest
  }
}
</script>

<style>

</style>
