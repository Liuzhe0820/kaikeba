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
      <div class='hot-ad'>
        <img src="./../images/hot_ad/home_ad.gif" alt="">
      </div>
      <hot-shop-list></hot-shop-list>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import HotNav from './HotNav';
import HotShopList from './HotShopList';
export default {
  name: "Hot",
  components:{
    HotNav,
    HotShopList
  },
  mounted() {

    this.$store.dispatch('reqHomeCasual');
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
.hot-ad{
  margin:8px 0;
  background-color:#fff;
  padding:15px;
  img{
    width:100%;
  }
}
</style>
