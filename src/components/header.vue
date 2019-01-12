<template>
  <div id="header">
    <div class="header-logo box-sizing">
      <div class="container">
        <div class="inline-block">
          <img src="../../static/img/logo.png" @click="$router.push({name:'home'})" class="logo-img" alt="">
          <span class="inline-block logo-name">个人所得税专家服务系统</span>
        </div>
        <div class="inline-block header-user">
          <div class="header-title">北京解税宝科技有限公司</div>
          <div class="header-user-msg" @click="close_status=!close_status">
            <img src="../../static/img/user-img.png" alt="">
            <span>王晓文</span>
            <img src="../../static/img/header-down.png" alt="">
          </div>
        </div>
        <div class="close-login" v-if="close_status">
          <ul>
            <li @click="user_model()">员工账户管理</li>
            <li @click="user_model('taxCounselingEmployees')">员工个税辅导管理</li>
            <li @click="user_model('taxDeclare')">我的个税扣除申报</li>
            <li @click="user_model()">退出</li>
          </ul>
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
        mounted(){

        },
        methods:{
          //tab切换
          tab_click:function(val){
            this.tab_class=val;
          },
          //退出登录
          close:function(){
            // window.location.href="http://yanwen.com:8001/#/home?source=geishuishenqi"
            this.$router.push({name:"login"});
          },
          //用户框点击
          user_model:function(val){
            this.$router.push({name:val});
            this.close_status=false;
          }
        }
    }
</script>

<style scoped>

</style>
