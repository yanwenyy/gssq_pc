<template>
    <div class="mask-layer" v-show="show">
      <div class="tip-layer">
          <img src="~@/assets/img/first_login_dialog.png">
          <div class="tip-text">
            <h4>hi<span>亲爱的用户！</span></h4>
            <p>个税辅导系统按照正常纳税步骤顺序引导。您可以选择与您切身相关的税法进行浏览，也可以按照纳税计算步骤进行了解。2019年3-6月您需自行进行个税汇算清缴，快速了解税法，快速了解税法，快速掌握知识点，精确判断自己的个税情况。</p>
            <div class="know">
              <span class="know-btn" @click="know">知道了</span>
            </div>
          </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "first-login-dialog",
        data(){
          return{
            show:true
          }
        },
        methods:{
          know:function(){
            this.show=false;
            localStorage.setItem("if_login","true")
          }
        }
    }
</script>

<style scoped>
  .mask-layer{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    left:0;
    top:0;
  }
  .tip-layer{
    width:500px;
    height: 100%;
    position: relative;
    margin: 0 auto;
  }
  .tip-layer img{
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .tip-text{
    width: 320px;
    padding: 30px;
    height:300px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .tip-text h4{
    margin-top: 20px;
    color: rgba(18, 181, 176, 1);
    font-size: 1.9rem;
  }
  .tip-text h4 span{
    color: rgba(51, 51, 51, 1);
    font-size: 1rem;
    padding-left: 5px;
  }
  .tip-text p{
    font-size: 0.9rem;
    line-height: 1.5;
    text-indent: 2em;
    padding: 20px 27px;
    color: rgba(102, 102, 102, 1);
  }
  .know{
    height: 130px;
  }
  .know-btn{
    display: block;
    text-align: center;
    margin: auto;
    line-height: 30px;
    margin-top: 50px;
    width: 100px;
    color: rgba(255,255,255,0.9);
    background: rgba(255,255,255,0.25);
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 17px;
    cursor: default;
  }
</style>
