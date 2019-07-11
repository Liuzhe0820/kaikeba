<template>
    <div class="hot">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../images/rowing/s1.png" alt=""></div>
            <div class="swiper-slide"><img src="../images/rowing/s2.png" alt=""></div>
            <div class="swiper-slide"><img src="../images/rowing/s3.png" alt=""></div>
            <div class="swiper-slide"><img src="../images/rowing/s4.png" alt=""></div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
      <hot-nav></hot-nav>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import HotNav from './HotNav';
export default {
  name: "Hot",
  components:{
    HotNav
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay:true,
      pagination: {
        el: ".swiper-pagination"
      },
    });
  }
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot {
  width: 100%;
  height: 100%;
  padding-top: 43px;
}
.swiper-container{
  width:100%;
}
.swiper-slide img{
  width:100%;
}
</style>
