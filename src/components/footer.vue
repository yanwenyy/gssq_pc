<template>
  <div>
    <div id="footer" class="box-sizing">
      <div>©2018 北京解税宝科技有限公司<span v-if="officeName">与{{officeName}}</span>版权所有，并保留所有权利</div>
      <div>京ICP备 16029821号-1</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "footer",
        data(){
          return{
            officeName:''
          }
        },
      mounted(){
        var that=this;
        // $("body").click(function(){
        //   that.close_status=false;
        // });
        //获取用户登录信息
        this.ajax_nodata_get(this.http_url.url+"/sys/user/info",function(data){
          that.user_msg=data.user;
          that.officeName=data.user.officeName;
        })
      },
    }
</script>

<style scoped>

</style>
