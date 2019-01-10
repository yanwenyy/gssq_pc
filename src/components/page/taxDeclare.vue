<template>
  <div class="container">
    <div class="declare-body">
      <div class="declare-btn">
        <!--<img src="../../../static/img/declare-up.png" alt="">-->
        <div id="upload" ></div>
      </div>
      <div class="declare-process box-sizing" v-if="file_name!=''">
        <div class="inline-block declare-process-msg">
          <img src="../../../static/img/exl.png" alt="">
          {{file_name}}
        </div>
        <img src="../../../static/img/up-process.gif" v-if="!file_succ" class="up-pro-img" alt="">
        <div class="inline-block declare-process-img" v-if="file_succ">
        <img src="" alt="">
      </div>
        <div class="inline-block succ" v-if="file_succ">上传成功</div>
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
        name: "tax-declare",
        data(){
          return{
            file_name:'',//文件名
            file_succ:false,
          }
        },
        mounted(){
          var that=this;
          $("#upload").zinoUpload({
            method: "POST",
            url: this.http_url.url+"/sys/oss/upload?token="+"5bd0475f620841ab05988ef949f14af3",
            name: "file",
            multiple: true,
            change: function (event, ui) {
              // console.log(event);
              that.file_name=$(".zui-upload-file").val().split("fakepath")[1].replace("\\","");
            },
            submit: function (event, ui) {
              //console.log(ui);
              console.log()
            },
            complete: function (event, ui) {
              // console.log(ui);
              if(ui.response.code==0){
                console.log(ui.response.url);
                that.file_succ=true;
                that.ajax(that.http_url.url+"/biz/reportrecord/save",{
                  "excelUrl":ui.response.url
                },function(data){
                  // console.log(data);
                })
              }
            }
          });
        },
        methods:{
          file:function(event){
            var that=this;
            // console.log(event.target.files);
            this.file_name=this.$refs.file2.value.split("fakepath")[1].replace("\\","");
          }
        }
    }
</script>

<style scoped>
  .up-pro-img{
    vertical-align: middle;
    margin: 0 1rem;
  }
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
  .declare-btn>div{
    width:42%;
    height:9.75rem;
    position: absolute;
    top:0;
    left:29%;
    /*opacity: 0;*/
    z-index: 10000;
    background: url(../../../static/img/declare-up.png) no-repeat;
    background-size: 100% 100%;
  }
  #upload >>>input{
    width:100%!important;
    height:9.75rem!important;
    opacity: 0;
  }
  >>>.zui-upload-label{
    opacity: 0;
  }
</style>
