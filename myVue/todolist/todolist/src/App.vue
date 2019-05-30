<template>
  <div id="app">
    <Head  />
    <List  />
    <Foot />
  </div>
</template>

<script>

import Head from './components/Head.vue';
import List from './components/List.vue';
import Foot from './components/Foot.vue';
export default {
  name: 'App',
  components: {
    Head,
    List,
    Foot
  },
  methods:{

  }
}
</script>

<style>
  #app{
    width:300px;
    padding:10px;
    margin:0 auto;
    border:1px solid #eee;
  }
</style>
