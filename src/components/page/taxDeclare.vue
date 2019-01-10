<template>
  <div class="container">
    <div class="declare-body">
      <div class="declare-btn">
        <img src="../../../static/img/declare-up.png" alt="">
        <input type="file" :change="">
      </div>
      <div class="declare-process box-sizing">
        <div class="inline-block declare-process-msg">
          <img src="../../../static/img/exl.png" alt="">
          个人所得税个人申报表格.excel
        </div>
        <div class="inline-block declare-process-img">
          <img src="" alt="">
        </div>
        <div class="inline-block succ">上传成功</div>
        <div class="inline-block end-time">最后更新时间：2018-12-02</div>
      </div>
      <div class="relevant-exl">
        <div class="relevant-exl-title">下载相关文档</div>
        <div class="relevant-exl-list box-sizing">
          <div class="inline-block" v-for="i in 4">
            <img src="../../../static/img/exl-big.png" alt="">
            <div>个税所得法专项扣除表格</div>
            <div class="elx-download">下载表格</div>
          </div>
        </div>
        <div class="relevant-notice">
          说明：个税所得法专项扣除表格解释解释个税所得法专释个税所得法专项扣除表格解释解释个
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tax-declare"
    }
</script>

<style scoped>
  .relevant-notice{
    font-size: 0.875rem;
    color:#999;
    margin-top: 1.25rem;
  }
  .elx-download{
    width:5.31rem;
    height:1.81rem;
    line-height: 1.82rem;
    font-size: 0.82rem;
    color:#13B5B1;
    text-align: center;
    margin: 1.125rem auto;
    border: 1px solid #13B5B1;
    border-radius:2px;
  }
  .relevant-exl-list>div>img{
    width:5.125rem;
    height:3.5rem;
    margin-bottom: 1.19rem;
  }
  .relevant-exl-list>div{
    width:20%;
    margin-right: 5%;
    font-size: 0.875rem;
    text-align: center;
  }
  .relevant-exl-list{
    margin-top: 2.57rem;
  }
  .relevant-exl-title{
    font-size: 0.94rem;
    color:#333;
    font-weight: bold;
  }
  .relevant-exl{
    margin-top: 3.75rem;
  }
  .end-time{
    color:#333;
    float:right;
    margin-right: 2.19rem;
  }
  .succ{
    color:#13B5B1;
  }
  .declare-process-img{
    height:0.94rem;
    width:14.5rem;
    background: #97E6E4;
    margin: 1.375rem 1rem;
  }
  .declare-process-img>img{
    width:100%;
    height:100%;
    vertical-align: middle;
  }
  .declare-process-msg{
    color:#333;
  }
  .declare-process-msg>img{
    vertical-align: middle;
    margin-left: 2.19rem;
  }
  .declare-process>div{
    vertical-align: top;
  }
  .declare-process{
    width:100%;
    height:3.625rem;
    background: #F9F9F9;
    font-size: 0.875rem;
    line-height: 3.625rem;
    margin-top: 2rem;
  }
  .declare-body{
    margin-top:2.06rem;
  }
  .declare-btn{
    text-align: center;
    height:9.75rem;
    position: relative;
  }
  .declare-btn>img{
    width:42%;
    height:9.75rem;
    position: absolute;
    top:0;
    left:29%;
  }
  .declare-btn>input{
    width:42%;
    height:9.75rem;
    position: absolute;
    top:0;
    left:29%;
    opacity: 0;
  }
</style>
