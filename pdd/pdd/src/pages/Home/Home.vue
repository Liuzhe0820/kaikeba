<template>
  <div>
    <ly-tab
      v-model = 'selectedId'
      :items='items'
      :options='options'
    >

    </ly-tab>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      selectedId: 0,
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" }
      ],
      options:{
        activeColor: '#e9232c'
      }
    };
  }
});
</script>

<style  lang='stylus' ref='stylesheet/stylus'>
</style>
