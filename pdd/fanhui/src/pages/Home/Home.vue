<template>
  <div>
    <ly-tab
      v-model = 'selectedId'
      :items='items'
      :options='options'
      @change='handleChange'
      class='fix'
    >

    </ly-tab>
    <router-view></router-view>
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
      },
      subRouterUrl:[
        '/home/hot',
        '/home/dress',
        '/home/box',
        '/home/mbaby',
        '/home/general',
        '/home/food',
        '/home/shirt',
        '/home/man',
        '/home/ele',
      ]
    };
  },
  methods:{
    handleChange(item,index){
      this.$router.replace(this.subRouterUrl[index]);
    }
  }
});
</script>

<style  lang='stylus' ref='stylesheet/stylus'>
.fix{
  position:fixed;
  top:0;
  left:0;
}
</style>
