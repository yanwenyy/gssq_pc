<template>
    <div class="rapid-body">
      <div class="rapid-bg"></div>
      <div class="rapid-main">
        <div class="rapid-ques-model inline-block">
          <div>
            <div class="rapid-ques-title">子女教育</div>
            <div class="rapid-ques-body">
              <div>
                <div class="ques-list-title">1.你有孩子吗？</div>
                <div class="ques-list-msg box-sizing">
                  <div class="inline-block radio-div"><input name="if_child" type="radio" id="yes-child"><lable for="yes-child">有</lable></div>
                  <div class="inline-block radio-div"><input name="if_child" type="radio" id="no-child"><lable for="no-child">没有</lable></div>
                </div>
              </div>
            </div>
            <div class="ques-change">
              <div class="inline-block prev-btn box-sizing">上一题</div>
              <div class="inline-block next-btn box-sizing">下一题</div>
            </div>
          </div>
          <div  v-if="false">
            <div class="rapid-ques-title">测试结果</div>
            <div class="rapid-result-title">
              恭喜您，您共计符合x项专项附加扣除标准
            </div>
            <table class="repid-table">
              <tr>
                <td class="table-title">扣除项</td>
                <td class="table-title">是否符合</td>
                <td class="table-title" colspan="2">本人扣缴比例</td>
                <td class="table-title">扣缴金额</td>
              </tr>
              <tr>
                <td>子女教育</td>
                <td><img src="../../../static/img/if-fh.png" alt=""></td>
                <td>x个孩子</td>
                <td>50%</td>
                <td>1000.00</td>
              </tr>
              <tr>
                <td>继续教育</td>
                <td><img src="../../../static/img/if-fh.png" alt=""></td>
                <td>2</td>
                <td>100%</td>
                <td>1000.00</td>
              </tr>
              <tr>
                <td>大病医疗</td>
                <td></td>
                <td colspan="2"></td>
                <td></td>
              </tr>
              <tr>
                <td>住房贷款利息</td>
                <td></td>
                <td colspan="2"></td>
                <td></td>
              </tr>
              <tr>
                <td>住房租金</td>
                <td><img src="../../../static/img/if-fh.png" alt=""></td>
                <td colspan="2"></td>
                <td></td>
              </tr>
              <tr>
                <td>赡养老人</td>
                <td><img src="../../../static/img/if-fh.png" alt=""></td>
                <td colspan="2">100%</td>
                <td>2000.00</td>
              </tr>
              <tr>
                <td>共计</td>
                <td>4项</td>
                <td colspan="3">3800</td>
              </tr>
            </table>
            <div class="test-again">再测一次</div>
          </div>
        </div>
        <div class="rapid-notice">
          <div class="rapid-notice-title">
            <span class="notice-line inline-block"></span>
            <span>模糊地带</span>
          </div>
          <div class="rapid-notice-body">
            <ul class="notice-ul">
              <li class="notice-li-title"><span>1.</span>可扣除情况：</li>
              <li><span></span>3周岁至学前未上幼儿园</li>
              <li><span></span>国外读书（资料备查存档）</li>
              <li><span></span>休学期间非全日制自考期间私塾</li>
              <li class="notice-li-title"><span>2.</span>不可扣除情况：</li>
              <li><span></span>休学期间保留学籍可以扣除，无学籍不可扣除</li>
            </ul>
          </div>
        </div>
        <div  v-if="false" class="tax-login-method">
          <div class="tax-login-title">
            <span class="inline-block line"></span>
            <span>专项附加扣除信息填报途径</span>
            <span class="inline-block line"></span>
          </div>
          <div class="tax-login-body inline-block">
            <div class="login-title">
              <span class="notice-line inline-block"></span>
              <span>方式一：</span>
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
      </div>
    </div>
</template>

<script>
    export default {
        name: "rapid-measurement"
    }
</script>

<style scoped>
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
  .tax_excle_img .inline-block{
    width:167px;
    height:208px;
    background:rgba(242,242,242,1);
    border-radius:4px;
    vertical-align: top;
  }
  .tax_excle{
    padding: 0 30px;
    margin-top: 70px;
  }
  .tax_excle h4{
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
  }
  .tax_excle_img{
    text-align: center;
    margin: 20px 0;
  }
  .tax_excle_img>img{
    padding-top: 138px;
  }
  .tax_excle_img .inline-block>img{
    padding-top: 8px;
  }
  .login-title{
    font-size: 0.875rem;
    color:#333;
    font-weight: bold;
  }
  .border-blue{
    border-left: 3px solid rgba(19, 181, 177, 1);
    text-indent: 3px;
  }
  .tax_excle_img .inline-block>p{
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    line-height: 20px;
    padding-top: 10px;
  }
  .tax-login-body{
    width:60%;
    margin: 37px 20% 27px 20%;
  }
  .tax-login-title>.line{
    width:151px;
    height:2px;
    background: #13B5B1;
  }
  .tax-login-title{
    font-size: 1rem;
    color:#333;
    font-weight: bold;
    text-align: center;
  }
  .test-again{
    width:160px;
    height:36px;
    line-height: 36px;
    margin: 27px auto 0 auto;
    text-align: center;
    font-size: 0.875rem;
    color:#fff;
    background:rgba(19,181,177,1);
    border-radius:4px;
  }
  .table-title{
    font-weight: bold;
  }
  .repid-table>tr:nth-child(odd){
    background: #EFF3FF;
  }
  .repid-table>tr{
    border-bottom: 1px solid #eee;
  }
  .repid-table td{
    border-right: 1px solid #eee;
    font-size: 0.875rem;
    text-align: center;
    padding:8px 0;
  }
  .repid-table{
    border:1px solid #EEEEEE;
    width:39.75rem;
    margin: 0 auto;
  }
  .rapid-result-title{
    color:#363636;
    font-size: 0.875rem;
    font-weight: bold;
    text-align: center;
    margin-top: 3.94rem;
    margin-bottom: 1.31rem;
  }
  .radio-div{
    margin:0 1.84rem;
  }
  .ques-list-msg{
    text-align: center;
    font-size: 1rem;
  }
  .rapid-ques-body{
    margin-top: 6.94rem;
  }
  .ques-list-title{
    text-align: center ;
    color:#333;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .next-btn{
    background: #13B5B1;
    color:#fff;
  }
  .prev-btn{
    border:1px solid #13B5B1;
    color:#13B5B1;
  }
  .ques-change>div{
    width:5.81rem;
    height:2.125rem;
    line-height: 2.125rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 4px;
    margin-right: 1.25rem;
  }
  .ques-change{
    text-align: center;
    position: absolute;
    bottom:8.5rem;
    width: 100%;
  }
  .rapid-body{
    margin-top:1.25rem;
    position: relative;
    width: 100%;
  }
  .rapid-bg{
    height:14.81rem;
    background: url(../../../static/img/ksc_bg.png) no-repeat;
    background-size: 100% 100%;
  }
  .rapid-main{
    width: 100%;
    margin-top:-6.94rem;
  }
  .rapid-ques-model{
    width:60%;
    min-height:25.13rem;
    height:auto!important;
    padding-bottom: 6.625rem;
    background: url("../../../static/img/ksc_ques_bg.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 20%;
    position: relative;
  }
  .rapid-ques-title{
    position: absolute;
    top:1.44rem;
    left:3.06rem;
    width: 6.75rem;
    height:2.125rem;
    line-height: 2.125rem;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color:#fff;
    background: url(../../../static/img/ksc_ques_title.png) no-repeat;
    background-size: 100% 100%;
  }
</style>
