<template>
  <div class='container'>
    <headerTab  msg="个税咨询"></headerTab>
    <ul class="gswd-ul gswd-ul-yw box-sizing">
      <li class="gswd_list" @click="">
        <img :src="head_src+questionUsers.headImage"  onerror="javascript:this.src='./static/img/user-img.png';" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>{{questionUsers.realName||'匿名用户'}}</span>
            <span>{{format(questionUsers.date)}}</span>
          </div>
          <div>
            {{questionUsers.content}}
          </div>
        </div>
      </li>
    </ul>
    <div class="anwser-icon">
      <img src="../../../static/img/anwser-icon.png"/>
    </div>
    <ul class="gswd-ul">
      <li class="gswd_list" v-for="item in answerUsers">
        <img :src="head_src+item.headImage"  onerror="javascript:this.src='./static/img/user-img.png';" alt="">
        <div class="inline-block">
          <div class="gswd-user">
            <span>{{item.userName||'匿名用户'}}</span>
          </div>
          <img v-if="item.status==2||item.checkStatus==2" src="../../../static/img/best-anwser-icon.png" class="best-anwser">
          <div>
            {{item.content}}
          </div>
          <div class="gswd-user">
            <span>{{format(item.date)}}</span>
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
      data(){
        return{
          answerUsers:[],
          questionUsers:''
        }
      },
      mounted(){
        var that=this;
        this.ajax_wd("/onlook/onlookDetail/share",{
          "questionUuid":this.$route.query.uuid
        },function(data){
          console.log(data);
          that.answerUsers=data.data.answerUsers;
          that.questionUsers=data.data.questionUsers;
        })
      }
    }
</script>

<style scoped>
  .gswd-ul-yw{
    min-height:152px;
    height:auto;
    margin-bottom: 0!important;
  }
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
