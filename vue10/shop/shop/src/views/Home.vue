<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  name: 'home',
  components: {
    
  },
  created(){
    axios.get('/api/userinfo')
  }
}
</script>
