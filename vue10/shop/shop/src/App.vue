<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button v-if='$store.state.user.isLogin' @click='logout'>注销</button>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$store.dispatch('logout');
    }
  }
}
</script>
<style>

</style>
