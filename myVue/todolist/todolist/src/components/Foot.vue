<template>
  <div class='foot'>
    <div>
      <input type="checkbox">
      <span>已完成0件/总计0件</span>
    </div>
    <div>
      <button>清除已完成</button>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style  scoped>
  .foot{
    display:flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    border:1px solid #eee;
    margin:10px 0;
    padding:5px;
  }
 .foot button{
   height:30px;
   font-size: 16px;
   line-height: 30px;
   background-color: yellowgreen;
   color:#fff;
  }
</style>
