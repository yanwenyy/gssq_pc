<template>
  <div class="container">
    <headerTab msg="个税筹划"></headerTab>
    <div class="taxplan-body">
      <img src="../../../static/img/tax_plan.png" alt="">
      <div class="taxplan-msg">
        功能正在加速开发中
        敬请期待...
      </div>
    </div>
  </div>
</template>

<script>
  import headerTab from '@/components/headerTab'
    export default {
        name: "tax-plan",
        components:{
          headerTab
        },
    }
</script>

<style scoped>
  .taxplan-body{
    text-align: center;
    padding:58px;
  }
  .taxplan-msg{
    width: 154px;
    color:#999;
    font-size: 1rem;
    word-break: break-all;
    margin: 25px auto;
    line-height: 26px;
  }
</style>
