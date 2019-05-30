<template>
  <div>
    <ul>
      <Item
        v-for="(todos,index) in $store.state.lists"
        :key="index"
        :index='index'
        :todo='todos'

      />
    </ul>
  </div>
</template>

<script>
 import Item from './Item.vue';
  export default {
    name:'item',
    components:{
      Item
    }
  }
</script>

<style scoped>

</style>
