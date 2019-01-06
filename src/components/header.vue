<template>
  <div id="header">
    <div class="header-logo box-sizing">
      <div class="container">
        <div class="inline-block">
          <img src="../../static/img/logo.png" class="logo-img" alt="">
          <span class="inline-block logo-name">个人所得税外包服务系统</span>
        </div>
        <div class="inline-block header-user">
          <div class="header-title">北京解税宝科技有限公司</div>
          <div class="header-user-msg" @click="close_status=!close_status">
            <img src="../../static/img/user-img.png" alt="">
            <span>王晓文</span>
            <img src="../../static/img/header-down.png" alt="">
          </div>
        </div>
        <div class="close-login" v-if="close_status" @click="close()">退出</div>
      </div>
    </div>
    <div class="header-tab box-sizing">
      <div class="container">
        <div class="header-tab-list inline-block">
          <div class="inline-block" :class="tab_class==1? 'header-tab-act':''" @click="tab_click(1)">
            <router-link :to="{name:'home'}">首&nbsp;&nbsp;&nbsp;&nbsp;页</router-link>
          </div>
          <div class="inline-block" :class="tab_class==2? 'header-tab-act':''" @click="tab_click(2)">
            <router-link :to="{name:'taxQuestionsAnswers'}">个税辅导</router-link>
          </div>
          <div class="inline-block" :class="tab_class==3? 'header-tab-act':''" @click="tab_click(3)">
            <router-link :to="{name:'taxQuestionsAnswers'}">个税咨询</router-link>
          </div>
          <div class="inline-block" :class="tab_class==4? 'header-tab-act':''" @click="tab_click(4)">
            <router-link :to="{name:'taxQuestionsAnswers'}">个税筹划</router-link>
          </div>
        </div>
        <div class="inline-block header-search-group box-sizing">
          <input placeholder="请搜索问题" type="text" class="box-sizing">
          <img src="../../static/img/header-search.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "header",
        data(){
          return{
            tab_class:1,//tab状态值
            close_status:false,//退出框是否显示
          }
        },
        methods:{
          //tab切换
          tab_click:function(val){
            this.tab_class=val;
          },
          //退出登录
          close:function(){
            window.location.href="http://yanwen.com:8001/#/home?source=geishuishenqi"
          }
        }
    }
</script>

<style scoped>

</style>
