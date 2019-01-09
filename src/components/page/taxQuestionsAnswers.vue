<template>
  <div class='container'>
    <headerTab msg="个税咨询"></headerTab>
    <div class="banner">
      <img src="../../../static/img/banner-gswd.png" alt="">
    </div>
    <ul class="gswd-ul">
      <li class="gswd_list" v-for="item in list" @click="go_detail(item.uuid)">
        <img :src="head_src+item.headImage"  onerror="javascript:this.src='./static/img/user-img.png';" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>{{item.realName||'匿名用户'}}</span>
            <span>{{format(item.date)}}</span>
          </div>
          <div>
            {{item.content}}
          </div>
        </div>
      </li>
    </ul>
    <!--我要提问浮标-->
    <div class="buoy"></div>
    <div id="page" class="paging"></div>
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
          end:10
        }
      },
      mounted(){
        var that=this;
        this.ajax_wd("/onlook/onlookMsgList/share",{
            "page":"1",
            "limit":"10"},function(data){
            console.log(data);
            that.list=data.data.list;
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
        },
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
