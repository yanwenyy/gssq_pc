<template>
  <div class='container'>
    <headerTab msg="个税咨询"></headerTab>
    <div class="banner">
      <img src="../../../static/img/banner-gswd.png" alt="">
    </div>
    <ul class="gswd-ul">
      <li class="gswd_list" v-for="item in list" @click="go_detail(item.uuid)">
        <img :src="item.isAnon==1? head_src+item.headImage:'./static/img/user-img.png'"  onerror="javascript:this.src='./static/img/user-img.png';" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>{{item.realName||'匿名用户'}}</span>
            <span>{{format(item.date)}}</span>
          </div>
          <div v-html="item.content">
            <!--{{item.content}}-->
          </div>
        </div>
      </li>
    </ul>
    <!--我要提问浮标-->
    <div class="buoy" @click="code_show=!code_show"></div>
    <div id="page" class="paging"></div>
    <div class="mask-layer" v-if="code_show">
      <div class="code">
        <img src="../../../static/img/code_img_close.png" class="close" @click="code_show=!code_show">
        <img src="../../../static/img/code_img.png" class="code_img">
      </div>
    </div>
  </div>
</template>

<script>
  import headerTab from '@/components/headerTab'
    export default {
      name: "tax-questions-answers",
      components:{
        headerTab
      },
      data(){
        return{
          list:[],
          start:1,
          end:10,
          //点击我没懂二维码显示
          code_show:false,
        }
      },
      mounted(){
        var that=this;
        // console.log(that.$route.query.msg)
        this.ajax_wd("/onlook/onlookMsgList/share",{
            "page":"1",
            "limit":"10",
            "content":this.$route.query.msg||""
        },function(data){
            console.log(data);
            that.list=data.data.list;
            for(var i=0;i<that.list.length;i++){
              that.list[i].content=that.list[i].content.replace(that.$route.query.msg,'<span style="color:#2FBEB9">'+that.$route.query.msg+'</span>');
            }
            that.page(data.data.totalPage)
        });
      },
      methods:{
        go_detail:function(id){
          this.$router.push({ name: 'taxQADetail',query:{uuid:id}})
        },
        //分页
        page:function(data){
          var that=this;
          $("#page").paging({
              total: data,
              numberPage: 1
            },
            function(msg) {
              //回调函数 msg为选中页码
              // tab(msg);
              that.start=msg;
              that.end=10;
              that.ajax_wd("/onlook/onlookMsgList/share",{
                "page":that.start,
                "limit":that.end},that.get_wg_page);
            });
        },
        //分页围观回调
        get_wg_page:function(data){
          this.list=data.data.list;
          for(var i=0;i<list.length;i++){
            list[i].content=list[i].content.replace(this.$route.query.msg,'<span style="color:#2FBEB9">'+this.$route.query.msg+'</span>');
          }
        },
      }
    }
</script>

<style scoped>
  .code{
    position: absolute;
    width:300px;
    height:361px ;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .code_img{
    width: 100%;
  }
  .close {
    width: 13px;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
  }
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
    border-radius: 50%;
  }
  .gswd_list>div{
    word-break: break-all;
    width:96%;
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
