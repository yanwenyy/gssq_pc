<template>
  <div class="bread-nav">
    <!--<span class="fa fa-address-book"></span>-->
    <img src="../../static/img/tax-home-right.png" alt="">
    <span class="bread-home" @click="$router.push({name:'home'})">首页</span>>{{msg}}
  </div>
</template>

<script>
    export default {
        name: "bread-nav",
        props:{
          msg: String,
          required: true
        }
    }
</script>

<style scoped>
  .bread-home:hover{
    color:#13B5B1;
    cursor: pointer;
  }
</style>
