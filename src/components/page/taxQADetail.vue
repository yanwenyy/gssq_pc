<template>
  <div class='container'>
    <headerTab  msg="个税咨询"></headerTab>
    <ul class="gswd-ul">
      <li class="gswd_list">
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
    <div class="anwser-icon">
      <img src="../../../static/img/anwser-icon.png"/>
    </div>
    <ul class="gswd-ul">
      <li class="gswd_list">
        <img src="../../../static/img/user-img.png" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>用户昵称</span>
          </div>
          <img src="../../../static/img/best-anwser-icon.png" class="best-anwser">
          <div>
            我公司将进行资产重组，要将公司部分货物和劳力转移到一家新设立的物流公司请问需要开发票吗？转入新公司的货物可否折旧，折旧费 用能
          </div>
          <div class="gswd-user">
            <span>2018-10-12 10:00:06</span>
          </div>
        </div>
      </li>
      <li class="gswd_list">
        <img src="../../../static/img/user-img.png" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>用户昵称</span>
          </div>
          <div>
            我公司将进行资产重组，要将公司部分货物和劳力转移到一家新设立的物流公司请问需要开发票吗？转入新公司的货物可否折旧，折旧费 用能
          </div>
          <div class="gswd-user">
            <span>2018-10-12 10:00:06</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    import headerTab from '@/components/headerTab'
    export default {
      name: "taxQADetail",
      components:{
        headerTab
      },
    }
</script>

<style scoped>
  .anwser-icon{
    position: absolute;
    width: 2.8rem;
  }
  .anwser-icon img{
    position: relative;
    top: -0.3rem;
    left: -0.2rem;
    width: 100%;
  }
  .gswd-ul{
    margin-top: 1.31rem;
    border-top: #EEEEEE 1px solid;
    padding-left: 3rem;
    margin-bottom: 10rem;
  }
  .gswd-ul:nth-child(1){
    padding-left: 0;
    margin-bottom: 2rem;
  }
   .gswd_list:nth-child(1){
    padding-top: 2.2rem;
  }
  .gswd_list{
    font-size: 1rem;
    color:#333;
    display: flex;
    justify-content: space-between;
    padding:0.5rem 0 ;
    padding-top: 1.5rem;
    position: relative;
  }
  .gswd_list:not(:last-child){
    border-bottom: 1px solid rgba(242,242,242,1);;
  }
  .gswd_list>img:nth-child(1){
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
  .gswd_list .gswd-user:nth-child(1)>span:nth-child(1){
    font-size: 0.94rem;
    color:#444;
    margin-top: -0.6rem;
    margin-bottom: 1.2rem;
  }
  .gswd_list .gswd-user{
    margin-top: 1rem;
    margin-bottom: 0;
  }
  .best-anwser{
    position: absolute;
    right: 2.5rem;
    width: 8rem;
    top: 0.5rem;
  }
</style>
