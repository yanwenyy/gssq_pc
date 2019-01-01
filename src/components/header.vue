<template>
  <div id="header">
    <div class="header-logo box-sizing">
      <div class="container">
        <img src="../../static/img/header-logo.png" class="logo-img" alt="">
        <div class="inline-block header-user">
          <div class="header-title">北京解税宝科技有限公司</div>
          <div class="header-user-msg" @click="close_status=!close_status">
            <img src="../../static/img/user-img.png" alt="">
            <span>王晓文</span>
            <img src="../../static/img/header-down.png" alt="">
          </div>
        </div>
        <div class="close-login" v-if="close_status">退出</div>
      </div>
    </div>
    <div class="header-tab box-sizing">
      <div class="container">
        <div class="header-tab-list inline-block">
          <div class="inline-block" :class="tab_class==1? 'header-tab-act':''" @click="tab_click(1)">
            <router-link :to="{name:'home'}">首&nbsp;&nbsp;&nbsp;&nbsp;页</router-link>
          </div>
          <div class="inline-block" :class="tab_class==2? 'header-tab-act':''" @click="tab_click(2)">
            <router-link :to="{name:'taxQuestionsAnswers'}">个税签约辅导</router-link>
          </div>
          <div class="inline-block" :class="tab_class==3? 'header-tab-act':''" @click="tab_click(3)">
            <router-link :to="{name:'taxQuestionsAnswers'}">个税问答</router-link>
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
          tab_click:function(val){
            this.tab_class=val;
          }
        }
    }
</script>

<style scoped>

</style>
