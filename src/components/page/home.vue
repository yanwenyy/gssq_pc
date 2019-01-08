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
            <img src="../../../static/img/shortcut_img.png" class="shortcut_excle" @click="mask_layer_show=!mask_layer_show;tax_dialog_show=!tax_dialog_show">
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
    <FirstLoginDialog v-show="once_show"></FirstLoginDialog>
    <div class="mask-layer" v-show="mask_layer_show">
      <div class="tax_dialog" v-show="tax_dialog_show">
        <div class="rocket">
          <img src="../../../static/img/rocket_img.png">
        </div>
        <div class="tax_dialog_close">
          <img src="../../../static/img/tax_dialog_close.png" @click="tax_dialog_show=!tax_dialog_show;mask_layer_show=!mask_layer_show">
        </div>
        <div class="tax_dialog_way">
          <div class="tax_dialog_title">
            <img src="../../../static/img/tax_dialog_Lline.png">
            <span>专项附加扣除信息填报途径</span>
            <img src="../../../static/img/tax_dialog_Rline.png">
          </div>
          <div class="tax_excle">
            <h4 class="border-blue">方式一：</h4>
            <div class="tax_excle_img">
              <div class="inline-block">
                <img src="../../../static/img/tax_dialog_img1.png">
                <p>1.下载信息采集表格</p>
                <span class="download_btn" @click="excle_dialog_show=!excle_dialog_show;tax_dialog_show=!tax_dialog_show">下载表格</span>
              </div>
              <img src="../../../static/img/arrows_icon.png"/>
              <div class="inline-block">
                <img src="../../../static/img/tax_dialog_img2.png">
                <p>2.填写后，上传至<br/>“我的个税扣除申报”</p>
              </div>
              <img src="../../../static/img/arrows_icon.png"/>
              <div class="inline-block">
                <img src="../../../static/img/tax_dialog_img3.png">
                <p>3.财务人员统一申报</p>
              </div>
            </div>
            <div class="way_two inline-block">
              <h4 class="border-blue">方式二：下载国税总局APP</h4>
              <img src="../../../static/img/gs_code.png">
            </div>
            <div class="way_three inline-block">
              <h4 class="border-blue">方式三：国税总局网址：</h4>
              <p><a target="_blank" href="https://its.tax861.gov.cn/">https://its.tax861.gov.cn/</a></p>
            </div>
          </div>
        </div>
      </div>
      <div class="excle_download" v-show="excle_dialog_show">
        <div class="excle_download_title">
          <h4>下载表格</h4>
          <img src="../../../static/img/excel_dialog_close.png" @click="mask_layer_show=!mask_layer_show;excle_dialog_show=!excle_dialog_show"/>
        </div>
        <div class="excle_list_box">
          <div class="excle_list">
          <img class="inline-block" src="../../../static/img/pdf_icon.png">
          <div class="inline-block file_detail">
            <h4 class="">1－个人所得税专项附加扣除条件(辅导培训版)</h4>
            <p>个人所得税专项附加扣除条件(辅导培训版)</p>
          </div>
          <span class="download_btn">下载文件</span>
        </div>
          <div class="excle_list">
            <img class="inline-block" src="../../../static/img/pdf_icon.png">
            <div class="inline-block file_detail">
              <h4 class="">2－个人所得税专项附加扣除操作指引（辅导培训版）</h4>
              <p>个人所得税专项附加扣除操作指引（辅导培训版）</p>
            </div>
            <span class="download_btn">下载文件</span>
          </div>
          <div class="excle_list">
            <img class="inline-block" src="../../../static/img/pdf_icon.png">
            <div class="inline-block file_detail">
              <h4 class="">3－个人所得税扣缴申报指引（辅导培训版）</h4>
              <p>个人所得税扣缴申报指引（辅导培训版）</p>
            </div>
            <span class="download_btn">下载文件</span>
          </div>
          <div class="excle_list">
            <img class="inline-block" src="../../../static/img/excel_icon.png">
            <div class="inline-block file_detail">
              <h4 class="">4－1：专项附加扣除信息电子模版</h4>
              <p>专项附加扣除信息电子模版</p>
            </div>
            <span class="download_btn">下载文件</span>
          </div>
          <div class="excle_list">
            <img class="inline-block" src="../../../static/img/pdf_icon.png">
            <div class="inline-block file_detail">
              <h4 class="">4－2：电子模板填写常见问题</h4>
              <p>电子模板填写常见问题</p>
            </div>
            <span class="download_btn">下载文件</span>
          </div>
          <div class="excle_list">
            <img class="inline-block" src="../../../static/img/pdf_icon.png">
            <div class="inline-block file_detail">
              <h4 class="">5－专项附加扣除电子模板填写样例说明</h4>
              <p>专项附加扣除电子模板填写样例说明</p>
            </div>
            <span class="download_btn">下载文件</span>
          </div>
          <div class="excle_list">
            <img class="inline-block" src="../../../static/img/pdf_icon.png">
            <div class="inline-block file_detail">
              <h4 class="">6－自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0</h4>
              <p>自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0</p>
            </div>
            <span class="download_btn">下载文件</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import FirstLoginDialog from '@/components/page/firstLoginDialog';
  import headerTab from '@/components/headerTab';
    export default {
        name: "home",
      data(){
          return{
            once_show:false,
            mask_layer_show:false,
            tax_dialog_show:false,
            excle_dialog_show:false
          }
      },
        components : {
          FirstLoginDialog,
          headerTab
        },
        mounted(){
          //判断是否第一次登陆弹出框
          if(localStorage.getItem("if_login")=="true"){
            this.once_show=false
          }else{
            this.once_show=true
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
    margin: 4rem 1.81rem 0 1.81rem;
    color:#fff;
    font-size: 0.81rem;
  }
  .shortcut_excle{
    width:100%;
    margin-top: 1rem;
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
    height:14.2rem;
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
  .tax_dialog{
    width:42rem;
    height: 40rem;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .rocket{
    position: absolute;
    width: 100%;
    height: 281px;
    text-align: center;
    z-index: 2;
  }
  .rocket img{
    width: 25rem;
  }
  .tax_dialog_way{
    width: 100%;
    height: 28rem;
    background: #fff;
    border-radius:4px;
    position: absolute;
    top: 185px;
  }
  .tax_dialog_title{
    position: absolute;
    z-index: 3;
    width: 100%;
    text-align: center;
    top: 40px;
  }
  .tax_dialog_title span{
    color: rgba(19, 181, 177, 1);
    font-size: 1rem;
    padding:0 5px ;
  }
  .tax_dialog_title img{
    padding-top: 5.5px;
  }
  .tax_excle h4{
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
  }
  .border-blue{
    border-left: 3px solid rgba(19, 181, 177, 1);
    text-indent: 3px;
  }
  .tax_excle{
    padding: 0 30px;
    margin-top: 70px;
  }
  .tax_excle_img{
    text-align: center;
    margin: 20px 0;
  }
  .tax_excle_img>img{
    padding-top: 138px;
  }
  .tax_excle_img .inline-block{
    width:167px;
    height:208px;
    background:rgba(242,242,242,1);
    border-radius:4px;
    vertical-align: top;
  }
  .tax_excle_img .inline-block>img{
    padding-top: 8px;
  }
  .tax_excle_img .inline-block>p{
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    line-height: 20px;
    padding-top: 10px;
  }
  .download_btn{
    display: inline-block;
    width:78px;
    height:27px;
    background:rgba(19,181,177,1);
    border-radius:4px;
    color: #fff;
    line-height: 27px;
    margin-top: 8px;
    text-align: center;
    cursor: default;
  }
  .way_two{
    width: 220px;
  }
  .way_two img{
    width: 69px;
    padding-left: 80px;
    padding-top: 8px;
  }
  .way_three{
    vertical-align: top;
  }
  .way_three p{
    text-decoration: underline;
    padding-top: 10px;
  }
  .mask-layer .tax_dialog_close{
    width: 100%;
    position: absolute;
    top: 145px;
  }
  .mask-layer .tax_dialog_close img{
    position: absolute;
    right: -11px;
    width: 23px;
    top: 2px;
  }
  .mask-layer  .excle_download{
    position: absolute;
    width: 600px;
    height: 360px;
    background: #fff;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    border-radius: 1rem;
    overflow: hidden;
  }
  .excle_download_title{
    position: relative;
    line-height: 50px;
    border-bottom: 1px solid rgba(238,238,238,1);;
  }
  .excle_download_title h4{
    text-align: center;
    font-weight: bold;
    font-size: 1rem;
    color: rgba(51, 51, 51, 1);
  }
  .excle_download_title>img{
    position: absolute;
    width: 12px;
    top: 20px;
    right: 19px;
  }
  .excle_list{
    position: relative;
    margin: 10px 30px 0 20px;
  }
  .excle_list::after{
    content: '';
    width: 490px;
    display: block;
    height: 0px;
    border-top: 1px dashed rgba(238,238,238,1);
    margin:10px 0;
    margin-left: 35px;
  }
  .excle_list>img{
    width: 100px;
  }
  .excle_list .download_btn{
    position: absolute;
    right: 0px;
    top:15px;
  }
  .excle_list .file_detail{
    width: 300px;
    margin-top: 12px;
  }
  .excle_list .file_detail h4{
    font-size: 14px;
    color:#000
  }
  .excle_list .file_detail p{
    color: rgba(153, 153, 153, 1);
    margin-top: 8px;
  }
  .excle_list_box{
    height: 320px;
    overflow-y: scroll;
  }
  .excle_list_box::-webkit-scrollbar {/*滚动条整体样式*/
    width: 5px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .excle_list_box::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.1);
  }
  .excle_list_box::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0);
  }
</style>
