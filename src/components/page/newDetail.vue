<template>
  <div class="container">
    <div class="banner">
      <img src="../../../static/img/banner-gswd.png" alt="">
    </div>
    <div class="new-detail-body box-sizing">
      <div class="new-detail-title">
        <div>{{msg.title}}</div>
        <div class="new-detail-date">{{msg.createTime}}</div>
      </div>
      <div v-html="msg.content"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "new-detail",
        data(){
          return{
            msg:''
          }
        },
        mounted(){
          var that=this;
          this.ajax_nodata_get(this.http_url.url+"/biz/policy/info/"+this.$route.query.uuid,function(data){
            console.log(data);
            that.msg=data.policy;
          })
        }
    }
</script>

<style scoped>
  .new-detail-date{
    font-size: 0.875rem;
    color:#999;
    font-weight: normal;
    margin: 1.75rem 0 1.44rem 0;
  }
  .new-detail-title{
    font-size: 1.25rem;
    color:#333;
    font-weight:bold;
    text-align: center;
    border-bottom: 2px dotted #eee;
    margin-bottom: 2.06rem;
  }
  .new-detail-body{
    margin-top: 11px;
    border:1px solid #eee;
    padding:2.75rem 2.56rem;
    color:#333;
    font-size: 1rem;
    word-break: break-all;
  }
</style>
