<template>
  <div id="header">
    <div class="header-logo box-sizing">
      <div class="container">
        <div class="inline-block">
          <img src="../../static/img/logo.png" @click="$router.push({name:'home'})" class="logo-img" alt="">
          <span class="inline-block logo-name">个人所得税专家服务系统</span>
        </div>
        <div class="inline-block header-user">
          <div class="header-title">{{user_msg.companyName}}</div>
          <div class="header-user-msg" @click="close_status=!close_status">
            <img src="../../static/img/user-img.png" alt="">
            <span>{{user_msg.username}}</span>
            <img src="../../static/img/header-down.png" alt="">
          </div>
        </div>
        <div class="close-login" v-if="close_status">
          <ul>
            <li v-if="permissions.indexOf('biz:user:list')!=-1||permissions.indexOf('biz:user:info')!=-1" @click="user_model('',1)">员工账户管理</li>
            <li v-if="permissions.indexOf('biz:reportrecord:list')!=-1||permissions.indexOf('biz:reportrecord:info')!=-1"  @click="user_model('',2)">员工个税辅导管理</li>
            <li v-if="permissions.indexOf('biz:company:business:list')!=-1||permissions.indexOf('biz:company:business:info')!=-1"  @click="user_model('',5)">企业管理</li>
            <li @click="user_model('taxDeclare',3)">我的个税扣除申报</li>
            <li @click="user_model('',4)">退出</li>
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
            user_msg:'',
            permissions:'',//用户权限
          }
        },
        mounted(){
          var that=this;
          //获取用户登录信息
          this.ajax_nodata_get(this.http_url.url+"/sys/user/info",function(data){
             console.log(data);
            that.user_msg=data.user;
            that.permissions=data.permissions;
          })
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
          user_model:function(val,id){
            if(id==1||id==2||id==5){
              window.open("http://test.jieshuibao.com/GSSQ_back");
            }else if(id==3){
              this.$router.push({name:val});
            }else if(id==4){
              window.location.href="http://test.jieshuibao.com/GSSQ_back";
              this.$cookie.set('token', '')
            }
            this.close_status=false;
          }
        }
    }
</script>

<style scoped>

</style>
