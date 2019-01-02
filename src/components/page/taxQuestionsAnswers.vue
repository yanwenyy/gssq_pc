<template>
  <div class='container'>
    <div class="banner">
      <img src="../../../static/img/banner-gswd.png" alt="">
    </div>
    <ul class="gswd-ul">
      <li class="gswd_list" v-for="item in 10" @click="go_detail()">
        <img src="../../../static/img/user-img.png" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>用户昵称</span>
            <span>2018-10-12 10:00:06</span>
          </div>
          <div>
            我公司将进行资产重组，要将公司部分货物和劳力转移到一家新设立的物流公司请问需要开发票吗？转入新公司的货物可否折旧，折旧费 用能
          </div>
        </div>
      </li>
    </ul>
    <!--我要提问浮标-->
    <div class="buoy"></div>
  </div>
</template>

<script>
    export default {
      name: "tax-questions-answers",
      methods:{
        go_detail:function(id){
          this.$router.push({ name: 'taxQADetail'})
        }
      }
    }
</script>

<style scoped>
  .gswd-ul{
    margin-top: 1.31rem;
  }
  .gswd_list{
    font-size: 1rem;
    color:#333;
    display: flex;
    justify-content: space-between;
    padding:1.69rem 0;
  }
  .gswd_list:not(:last-child){
    border-bottom: 1px solid rgba(242,242,242,1);;
  }
  .gswd_list>img{
    width:1.5rem;
    height:1.5rem;
    vertical-align: top;
    margin-right: 0.56rem;
  }
  .gswd_list>div{
    word-break: break-all;
  }
  .gswd-user{
    color: #999;
    font-size: 0.875rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.875rem;
  }
  .gswd-user>span:nth-child(1){
    font-size: 0.94rem;
    color:#444;
  }
  .buoy{
    width:6.44rem;
    height:6.44rem;
    position: fixed;
    bottom:3rem;
    right:2.19rem;
    background: url("../../../static/img/gswd-buoy.png");
  }
  .buoy:hover{
    background: url("../../../static/img/gswd-buoy-hover.png");
  }
</style>
