<template>
  <div class='hot-nav'>
    <div class="hot-nav-content">
      <div class="nav-content-inner">
        <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
         <a class="inner-item">
          <img src="../images/nav/nav_icon01.png" alt="">
          <span>限时秒杀</span>
        </a>
      </div>
      <div class='hot-nav-bottom'>
        <div class='hot-nav-bottom-inner'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotNav",
  data() {
    return {
      screenW:
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      scrollContentW: 720,
      // 3. 滚动条背景的长度
      bgBarW: 100,
      // 4. 滚动条的长度
      barXWidth: 0,
      // 5. 起点
      startX: 0,
      // 6. 记录结束点
      endFlag: 0,
      // 7. 移动的距离
      barMoveWidth: 0
    };
  }
};
</script>

<style lang='stylus' ref='stylesheet/stylus'>
.hot-nav {
  width: 100%;
  height: 180px;
  position: relative;
  background-color: #fff;
  padding-bottom: 10px;

  .hot-nav-content {
    width: 100%;
    overflow-x: scroll;

    .nav-content-inner {
      width: 720px;
      height: 180px;
      display: flex;
      flex-wrap: wrap;

      .inner-item {
        width: 90px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #666666;

        img {
          width: 40%;
          margin-bottom: 5px;
        }
      }
    }
  }
}

.hot-nav-content::-webkit-scrollbar {
  display: none;
}

.hot-nav-bottom {
  width: 100px;
  height: 2px;
  background-color: #ccc;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  bottom: 8px;

  .hot-nav-bottom-inner {
    position: absolute;
    left: 0;
    height: 100%;
    background-color: orangered;
    width: 0;
  }
}
</style>
