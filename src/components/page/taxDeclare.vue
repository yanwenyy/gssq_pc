<template>
  <div class="container">
    <div class="declare-body">
      <div class="declare-btn">
        <!--<img src="../../../static/img/declare-up.png" alt="">-->
        <div id="upload" ></div>

      </div>
      <div class="inline-block end-time" v-if="updateTime!=''">上次更新时间：{{updateTime}}</div>
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
      </div>
      <div class="relevant-exl">
        <div class="relevant-exl-title">下载相关文档</div>
        <div class="relevant-exl-list box-sizing">
          <div class="inline-block">
            <img src="../../../static/img/exl-big.png" alt="">
            <div>专项附加扣除信息电子模版</div>
            <div class="elx-download"><a href="./static/download/1.xls" download="专项附加扣除信息电子模版.xls">下载表格</a></div>
          </div>
          <div class="inline-block">
            <img src="../../../static/img/pdf_icon.png" alt="">
            <div>电子模板填写常见问题</div>
            <div class="elx-download"><a href="./static/download/2.pdf" download="电子模板填写常见问题.pdf">下载文件</a></div>
          </div>
          <div class="inline-block">
            <img src="../../../static/img/pdf_icon.png" alt="">
            <div>个人所得税扣缴申报指引（辅导培训版）</div>
            <div class="elx-download"><a href="./static/download/3.pdf" download="个人所得税扣缴申报指引（辅导培训版）.pdf">下载文件</a></div>
          </div>
          <div class="inline-block">
            <img src="../../../static/img/pdf_icon.png" alt="">
            <div>个人所得税专项附加扣除操作指引（辅导培训版）</div>
            <div class="elx-download"><a href="./static/download/4.pdf" download="个人所得税专项附加扣除操作指引（辅导培训版）.pdf">下载文件</a></div>
          </div>
          <div class="inline-block">
            <img src="../../../static/img/pdf_icon.png" alt="">
            <div>个人所得税专项附加扣除条件(辅导培训版)</div>
            <div class="elx-download"><a href="./static/download/5.pdf" download="个人所得税专项附加扣除条件(辅导培训版).pdf">下载文件</a></div>
          </div>
          <div class="inline-block">
            <img src="../../../static/img/pdf_icon.png" alt="">
            <div>专项附加扣除电子模板填写样例说明</div>
            <div class="elx-download"><a href="./static/download/6.pdf" download="专项附加扣除电子模板填写样例说明.pdf">下载文件</a></div>
          </div>
          <div class="inline-block">
            <img src="../../../static/img/pdf_icon.png" alt="">
            <div>自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0</div>
            <div class="elx-download"><a href="./static/download/7.pdf" download="自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0.pdf">下载文件</a></div>
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
  import Vue from 'vue'
    export default {
        name: "tax-declare",
        data(){
          return{
            file_name:'',//文件名
            file_succ:false,
            updateTime:''
          }
        },
        mounted(){
          var that=this;
          //上次更新时间
          this.ajax_nodata(this.http_url.url+"/biz/reportrecord/info",function(data){
            console.log(data);
            that.updateTime=data.userLessonReportRecordEntity.updateTime||"";
          });
          $("#upload").zinoUpload({
            method: "POST",
            url: this.http_url.url+"/sys/oss/upload?token="+Vue.cookie.get('token'),
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
    margin-right: 4%;
    font-size: 0.875rem;
    text-align: center;
    vertical-align: top;
    height:185px;
  }
  .relevant-exl-list>div>div:nth-child(2){
    height:42px;
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
    color:#999;
    float:right;
    margin-right: 8.19rem;
    margin-top: -1rem;
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
    width:44rem;
    margin: 2rem auto;
    height:3.625rem;
    background: #F9F9F9;
    font-size: 0.875rem;
    line-height: 3.625rem;
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
