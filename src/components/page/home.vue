<template>
  <div>
    <headerTab msg="首页"></headerTab>
    <div class='container'>
      <div class="home-banner">
        <img src="../../../static/img/banner-gswd.png" alt="">
      </div>
      <div class="home-title box-sizing">
        <div class="inline-block home-title-cn">个税签约辅导系统</div>
        <div class="inline-block home-title-en">Personal Tax Counseling System</div>
      </div>
      <div class="gsfd_system">
        <div class="gsfd_system_title box-sizing">
          <img src="../../../static/img/xt_title-01.png" alt="">
          <div class="inline-block box-sizing">
            <span>纳税人身份</span>
            <span>计算第一步：判定身份</span>
          </div>
        </div>
        <div class="sf_determination box-sizing">
          <div class="inline-block sf_determination_banner"><img src="../../../static/img/nsrsf_bannar.png" alt=""></div>
          <div class="inline-block sf_determination-msg">
            <div>我的身份：</div>
            <div>
              <span>居民纳税人</span>
              <a class="edit_sf_deter_msg">[ 修改 ]</a>
            </div>
            <div>个税缴纳条款中，部分条款针对不同身份有不同适用定义</div>
            <div>
              <div class="inline-block jm-fd-btn box-sizing">
                <span>居民纳税人</span>
                <a>[去辅导 ]</a>
              </div>
              <div class="inline-block fjm-fd-btn box-sizing">
                <span>非居民纳税人</span>
                <a>[去辅导 ]</a>
              </div>
            </div>
          </div>
          <div class="inline-block gs_calculator">
            <img src="../../../static/img/jsq_bannar.png" alt="">
            <div>
              <span>个税计算器</span>
              <span class="go_calculator">测测个税省多少？</span>
            </div>
          </div>
        </div>
        <div class="gsfd_system_title box-sizing">
          <img src="../../../static/img/xt_title-02.png" alt="">
          <div class="inline-block box-sizing">
            <span>所得项目</span>
            <span>计算第二步：判断所得，不同所得税率不同</span>
          </div>
        </div>
        <div class="sl-classification box-sizing">
          <div class="inline-block sl-classification-list" @mouseover="classfication_hvoer($event)"  @mouseleave="classfication_leave($event)">
            <img src="../../../static/img/gzsd.png" data-hover="../../../static/img/gzsd_hover.png" data-src="../../../static/img/gzsd.png" alt="">
            <div class="inline-block box-sizing">
              <div>工资、薪酬所得</div>
              <div>我要辅导</div>
            </div>
          </div>
          <div class="inline-block sl-classification-list"  @mouseover="classfication_hvoer($event)"  @mouseleave="classfication_leave($event)">
            <img src="../../../static/img/lwbc.png" data-src="../../../static/img/lwbc.png" data-hover="../../../static/img/lwbc_hover.png" alt="">
            <div class="inline-block box-sizing">
              <div>劳务报酬所得</div>
              <div>我要辅导</div>
            </div>
          </div>
          <div class="inline-block sl-classification-list" @mouseover="classfication_hvoer($event)"  @mouseleave="classfication_leave($event)">
            <img src="../../../static/img/gzsd.png" data-hover="../../../static/img/gzsd_hover.png" data-src="../../../static/img/gzsd.png" alt="">
            <div class="inline-block box-sizing">
              <div>稿酬所得</div>
              <div>我要辅导</div>
            </div>
          </div>
          <div class="inline-block sl-classification-list" @mouseover="classfication_hvoer($event)"  @mouseleave="classfication_leave($event)">
            <img src="../../../static/img/txqsd.png" data-hover="../../../static/img/txqsd_hover.png" data-src="../../../static/img/txqsd.png" alt="">
            <div class="inline-block box-sizing">
              <div>特许权使用费所得</div>
              <div>我要辅导</div>
            </div>
          </div>
        </div>
        <div class="gsfd_system_title box-sizing">
          <img src="../../../static/img/xt_title-01.png" alt="">
          <div class="inline-block box-sizing">
            <span>扣除项目</span>
            <span>计算第三步：根据自身情况判断可扣除项目</span>
          </div>
        </div>
        <div class="msg-main box-sizing">
          <div class="msg-main-left ">
            <div class="special-deduction box-sizing">
              <div class="inline-block box-sizing">
                <div class="inline-block">
                  <div class="cc_name">
                    <img src="../../../static/img/ccxm-jccc.png" alt="">
                  </div>
                  <div class="cc_fd_btn">立即辅导</div>
                </div>
                <div class="inline-block cc_msg_show">
                  <div>基础扣除</div>
                  <div>基本减除费用5000元/月 60000元/年</div>
                </div>
              </div>
              <div class="inline-block box-sizing">
                <div class="inline-block">
                  <div class="cc_name">
                    <img src="../../../static/img/ccxm-zxkc.png" alt="">
                  </div>
                  <div class="cc_fd_btn">立即辅导</div>
                </div>
                <div class="inline-block cc_msg_show">
                  <div>专项扣除</div>
                  <div>基本养老、基本医疗、基 本失业、住房公积金</div>
                </div>
              </div>
              <div class="inline-block box-sizing">
                <div class="inline-block">
                  <div class="cc_name">
                    <img src="../../../static/img/ccxm-fjcc.png" alt="">
                  </div>
                  <div class="cc_fd_btn">立即辅导</div>
                </div>
                <div class="inline-block cc_msg_show">
                  <div>六项专项附加扣除</div>
                  <div>与民生相关的教育、养老 医疗、住房</div>
                </div>
              </div>
              <div class="inline-block box-sizing">
                <div class="inline-block">
                  <div class="cc_name">
                    <img src="../../../static/img/ccxm-qtcc.png" alt="">
                  </div>
                  <div class="cc_fd_btn">立即辅导</div>
                </div>
                <div class="inline-block cc_msg_show">
                  <div>其他扣除</div>
                  <div>除基本减除费用、专项扣除、 专项附加扣除以外的项目</div>
                </div>
              </div>
            </div>
          </div>
          <div class="msg-main-right">
            <div class="look-my-kc box-sizing">
              <div>
                <div class="lookMK_name">看看我的6项专项附加扣除到底扣多少？</div>
                <div class="lookMK_line"></div>
                <div class="lookMK_msg">我都能扣什么？如何扣除最划算?</div>
                <div class="lookMK_msg">定制辅导，根据您的实际情况，帮您解决 您的所有财税问题！</div>
                <div class="lookMK_btn">开始</div>
              </div>
            </div>
          </div>
        </div>
        <div class="six-special-deduction box-sizing">
          <img src="../../../static/img/six-cc-toggle.png" class="six-cc-toggle" alt="">
          <div class="six-special-deduction-list inline-block box-sizing">
            <div>子女教育</div>
            <div>快速指导“子女所处阶段” 是否符合申报条件 </div>
            <div class="six-special-fd-btn">立即辅导</div>
          </div>
          <div class="six-special-deduction-list inline-block box-sizing">
            <div>继续教育</div>
            <div>一看便知哪些学历（学位）、 证书符合扣除标准</div>
            <div class="six-special-fd-btn">立即辅导</div>
          </div>
          <div class="six-special-deduction-list inline-block box-sizing">
            <div>大病医疗</div>
            <div>不止大病，感冒累计达到标准也 可扣除，快来了解具体政策</div>
            <div class="six-special-fd-btn">立即辅导</div>
          </div>
          <div class="six-special-deduction-list inline-block box-sizing">
            <div>首套房贷款利息</div>
            <div>快速了解是否符合“首套 住房贷款利息标准”</div>
            <div class="six-special-fd-btn">立即辅导</div>
          </div>
          <div class="six-special-deduction-list inline-block box-sizing">
            <div>住房租金</div>
            <div>填报住房租金支出需要 符合什么条件</div>
            <div class="six-special-fd-btn">立即辅导</div>
          </div>
          <div class="six-special-deduction-list inline-block box-sizing">
            <div>赡养老人</div>
            <div>多子女家庭如何扣除及 扣除标准 </div>
            <div class="six-special-fd-btn">立即辅导</div>
          </div>
        </div>
      </div>
      <div class="total-gs-class">
        <div class="inline-block total-gs-class-list">
          <div>税收抵免</div>
          <div>判断是否符合税收优惠</div>
          <div>立即辅导</div>
        </div>
        <div class="inline-block total-gs-class-list">
          <div>税收抵免</div>
          <div>判断是否符合税收优惠</div>
          <div>立即辅导</div>
        </div>
        <div class="inline-block total-gs-class-list">
          <div>税收抵免</div>
          <div>判断是否符合税收优惠</div>
          <div>立即辅导</div>
        </div>
        <div class="inline-block total-gs-class-list">
          <div>税收抵免</div>
          <div>判断是否符合税收优惠</div>
          <div>立即辅导</div>
        </div>
      </div>
      <div class="home-title box-sizing">
        <div class="inline-block home-title-cn">个税辅导课程</div>
        <div class="inline-block home-title-en">Video Tutoring</div>
      </div>
      <div class="gsfd-video">
        <div class="gsfd-video-list" v-for="i in 3">
          <img src="../../../static/img/test.jpg" alt="">
          <div>个税大师李佳德告诉你六项附加扣除到底怎么扣- 共六讲</div>
        </div>
      </div>
      <div class="msg-main box-sizing">
        <div class="msg-main-left">
          <div class="home-title box-sizing">
            <div class="inline-block home-title-cn">个税咨询</div>
            <div class="inline-block home-title-en">Interlocution</div>
          </div>
          <ul>
            <li v-for="i in 4" class="msg-main-left-li">
              <img src="../../../static/img/user-img.png" alt="">
              <div class="inline-block">
                <div>
                  <span>用户名</span>
                  <span>2018-10-18</span>
                </div>
                <div>
                  关于发布个人所得税扣缴申报管理方法解读试行通报，四项综合所得、年度汇算清缴，父母有退休
                  金也可以扣除是，金融机构与校为企业签订
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="msg-main-right">
          <div class="home-title box-sizing">
            <div class="inline-block home-title-cn">新政速递</div>
            <div class="inline-block home-title-en">Tax News</div>
          </div>
          <ul>
            <li class="msg-main-right-li box-sizing" v-for="i in 4">
              <div class="inline-block li-dot"></div>
              <div class="inline-block">
                <div class="right-li-content">关于发布个人所得税扣缴申报管理方法解读试 行通报，四项综合所得、年度汇算清缴，代...</div>
                <div>2018-12-28</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-banner">
        <div class="inline-block"><img src="../../../static/img/footer-banner1.png" alt=""></div>
        <div class="inline-block"><img src="../../../static/img/footer-banner2.png" alt=""></div>
      </div>
    </div>
    <FirstLoginDialog v-show="show"></FirstLoginDialog>
  </div>
</template>

<script>
  import FirstLoginDialog from '@/components/page/firstLoginDialog';
  import headerTab from '@/components/headerTab';
    export default {
        name: "home",
      data(){
          return{
            show:false
          }
      },
        components : {
          FirstLoginDialog,
          headerTab
        },
        mounted(){
          if(localStorage.getItem("if_login")=="true"){
            this.show=false
          }else{
            this.show=true
          }
        },
        methods:{
          //所得项目hover
          classfication_hvoer:function(event){
            // console.log(event.currentTarget.firstElementChild.dataset.src);
            event.currentTarget.firstElementChild.src=event.currentTarget.firstElementChild.dataset.hover;
          },
          classfication_leave:function(event){
            event.currentTarget.firstElementChild.src=event.currentTarget.firstElementChild.dataset.src;
          }
        }
    }
</script>

<style scoped>
  .six-special-fd-btn:hover{
    color:#fff;
    background: #13B5B1;
  }
  .six-special-fd-btn{
    width:7.5rem;
    height:1.75rem;
    line-height: 1.75rem;
    text-align: center;
    color:#13B5B1;
    background:rgba(255,255,255,1);
    border:1px solid rgba(19,181,177,1);
    border-radius:2px;
    /*margin:1.875rem  auto;*/
    position: absolute;
    bottom:1.6rem;
    left: 5.44rem;
  }
  .six-special-deduction-list>div:nth-child(2){
    width:9.44rem;
    color:#999;
    line-height: 1.125rem;
    margin: 0 auto;
  }
  .six-special-deduction-list>div:nth-child(1){
    font-size:0.94rem;
    color:#333;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .six-special-deduction>div{
    width:19.69rem;
    height:11.38rem;
    background: url("../../../static/img/six-cc-bg.png") no-repeat;
    background-size: 100% 100%;
    /*margin:0 0 1.63rem 0.8rem;*/
    margin-bottom: 1.63rem;
    text-align: center;
    padding:1.875rem 0;
    font-size: 0.81rem;
    vertical-align: top;
    position: relative;
  }
  .six-cc-toggle{
    position: absolute;
    top:-1.15rem;
    left:0.3rem;
  }
  .six-special-deduction{
    height:30.06rem;
    background: #F9F9F9;
    border-radius:0.625rem;
    padding:2.75rem 1.4rem;
    position: relative;
    width: 100%;
  }
  .lookMK_btn{
    width:4.875rem;
    height:1.56rem;
    line-height: 1.56rem;
    text-align: center;
    background:rgba(19,181,177,1);
    border-radius:2px;
    margin-top: 1.31rem;
  }
  .lookMK_msg{
    line-height: 1.19rem;
    font-weight: 400;
  }
  .lookMK_line{
    width:2rem;
    height:2px;
    background:rgba(255,255,255,1);
    margin-bottom: 1rem;
  }
  .look-my-kc>div .lookMK_name{
    font-size: 0.875rem;
    font-weight: bold;
    margin-bottom:0.69rem ;
  }
  .look-my-kc:before{
    display: table;
    content: '';
  }
  .look-my-kc>div{
    width:15.6rem;
    margin: 8.56rem 1.81rem;
    color:#fff;
    font-size: 0.81rem;
  }
  .cc_msg_show>div:nth-child(1){
    font-size: 0.94rem;
    color:#333;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .cc_msg_show>div:nth-child(2){
    font-size: 0.84rem;
    color:#666;
    line-height:1.31rem ;
  }
  .cc_fd_btn{
    width:4.75rem;
    height:1.625rem;
    line-height: 1.625rem;
    text-align: center;
    color:#13B5B1;
    font-size: 0.81rem;
    border:1px solid rgba(19,181,177,1);
    border-radius:2px;
  }
  .cc_msg_show{
    width:8.69rem;
    vertical-align: top;
    margin-left: 1.75rem;
  }
  .cc_name{
    width:4.75rem;
    height:4rem;
    color:#fff;
    text-align: center;
    line-height: 4rem;
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }
  .look-my-kc{
    height:19.75rem;
    background: #064964;
    margin-top: 1.5rem;
    font-size: 0.81rem;
  }
  .special-deduction>div:nth-child(odd){
    margin-right: 5%;
  }
  .special-deduction>div{
    width:47%;
    height:8.81rem;
    background: url("../../../static/img/ccxm-bg.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 2.13rem;
    padding:1.25rem 1.625rem;
  }
  .special-deduction{
    margin-top: 1.5rem;
  }
  .footer-banner{
    display: flex;
    justify-content: space-between;
    margin-top: 2.38rem;
  }
  .footer-banner img{
    width:30.25rem;
    height:6.625rem;
  }
  .right-li-content{
    font-size: 0.875rem;
    color:#333;
    margin-bottom: 0.94rem;
    line-height: 1.31rem;
    margin-top: -0.4rem;
  }
  .msg-main-right-li{
    display: flex;
    justify-content: space-between;
    font-size: 0.81rem;
    color:#999;
    margin-bottom: 1.56rem;
  }
  .msg-main-right-li>div:nth-child(2){
    width:95%;
  }
  .li-dot{
    width:6px;
    height:6px;
    background:rgba(19,181,177,1);
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  .msg-main-right>ul{
    margin-top: 1.25rem;
  }
  .msg-main-left>ul{
    margin-top: 1.125rem;
  }
  .msg-main-left-li>div>div:nth-child(1){
    font-size: 0.81rem;
    color:#666;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  .msg-main-left-li>div>div:nth-child(2){
    line-height: 1.375rem;
  }
  .msg-main-left-li{
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color:#333;
    margin-bottom: 1.44rem;
  }
  .msg-main-left-li>img{
    width:1.75rem;
    height:1.75rem;
    vertical-align: top;
  }
  .msg-main-left-li>div{
    width: 94%;
    vertical-align: top;
  }
  .msg-main-left{
    width:64%;
  }
  .msg-main-right{
    width:32%;
  }
  .msg-main{
    display: flex;
    justify-content: space-between;
  }
  .gsfd-video-list:hover{
    color:#13B5B1;
    cursor: pointer;
  }
  .gsfd-video-list>img{
    width:19.5rem;
    height:13.13rem;
    margin-bottom: 0.94rem;
  }
  .gsfd-video-list>div{
    word-break: break-all;
    line-height: 1.31rem;
  }
  .gsfd-video-list{
    width:19.5rem;
    font-size: 0.875rem;
    color:#333;
  }
  .gsfd-video{
    margin-top: 1.75rem;
    display: flex;
    justify-content: space-between;
  }
  .total-gs-class-list:hover{
    color:#fff;
    background: url("../../../static/img/total-gs-class-bg-hover.png") no-repeat;
    background-size: 100% 100%;
  }
  .total-gs-class-list>div:nth-child(3){
    margin-top: 1.25rem;
    font-size: 0.81rem;
  }
  .total-gs-class-list>div:nth-child(1){
    font-size: 1.125rem;
    font-weight: bold;
    margin: 2rem 0 0.81rem 0;
  }
  .total-gs-class>div{
    width:15.19rem;
    height:8.44rem;
    background: url("../../../static/img/total-gs-class-bg.png") no-repeat;
    background-size: 100% 100%;
    color:#F99F12;
    font-size: 0.75rem;
    text-align: center;
  }
  .total-gs-class{
    margin-top: 2.625rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.875rem ;
  }
  .sl-classification-list>div{
    text-align: left;
  }
  .sl-classification-list>div>div:nth-child(1){
    font-size: 0.94rem;
    font-weight: bold;
    color:#333;
    margin-bottom: 0.76rem;
    margin-top: 0.2rem  ;
  }
  .sl-classification>div>img{
    width:2.875rem;
    height:2.875rem;
    margin-right: 0.75rem;
  }
  .sl-classification>div{
    width:24%;
    text-align: center;
    margin-top:1.69rem;
    font-size: 0.81rem;
    color:#999;
  }
  .sl-classification>div:not(:last-child){
    border-right: 1px solid #eee;
  }
  .sl-classification{
    height:6.375rem;
    background:rgba(249,249,249,1);
    border:1px solid rgba(246,246,246,1);
    margin-top: 1.125rem;
  }
  .gs_calculator>div>.go_calculator{
    font-size: 0.81rem;
    font-weight: normal;
    border-left:1px solid #ddd;
    padding-left: 0.56rem;
    margin-left: 0.5rem;

  }
  .gs_calculator>div{
    font-size: 0.875rem;
    color:#333;
    font-weight: bold;
    margin-top: 0.75rem;
  }
  .gs_calculator>img{
    width:19.69rem;
    height:7.5rem;
  }
  .gs_calculator{
    float: right;
  }
  .sf_determination{
    margin-top: 1.5rem;
  }
  .sf_determination_banner{
    vertical-align: top;
  }
  .sf_determination_banner>img{
    width:12.75rem;
    height:9rem;
    margin-right: 1.5rem;
    vertical-align: top;
  }
  .sf_determination-msg{
    font-size: 0.75rem;
    color:#999;
    position: relative;
    height:9rem;
  }
  .sf_determination-msg>div:nth-child(2){
    font-size: 0.94rem;
    color:#333;
    font-weight: bold;
    margin-top: 0.75rem;
    margin-bottom: 1.06rem;
  }
  .sf_determination-msg>div:nth-child(4){
    margin-top: 2.25rem;
    position: absolute;
    bottom:0;
    width: 26rem;
  }
  .edit_sf_deter_msg{
    color:#13B5B1;
    font-size: 0.75rem;
    text-decoration:underline;
  }
  .sf_determination-msg>div:nth-child(4)>div{
    width:11.7rem;
    height:2rem;
    text-align: center;
    line-height: 2rem;
    font-size: 0.875rem;
    border-radius: 1px;
  }
  .jm-fd-btn{
    background: #13B5B1;
    color:#fff;
  }
  .jm-fd-btn>a{
    color:#fff;
  }
  .fjm-fd-btn>a{
    color:#F99F12;
  }
  .fjm-fd-btn{
    border:1px solid #F99F12;
    color:#F99F12;
    margin-left: 1.56rem;
  }
  .fjm-fd-btn>a,.jm-fd-btn>a{
    font-size: 0.875rem;
    margin-left: 1.69rem;
  }
</style>
