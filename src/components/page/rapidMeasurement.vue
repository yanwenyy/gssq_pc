<template>
    <div class="rapid-body">
      <div class="rapid-bg"></div>
      <div class="rapid-main">
        <div class="rapid-ques-model inline-block">
          <div v-if="!total_result">
            <div v-if="zn">
              <div class="rapid-ques-title">子女教育</div>
              <div class="rapid-ques-body">
                <div v-if="zn_msg.status==1">
                  <div class="ques-list-title">1.您有3岁以上的孩子吗？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="zn_msg.child" value="有" type="radio" id="yes-child"><lable>有</lable></div>
                    <div class="inline-block radio-div"><input v-model="zn_msg.child" value="没有" type="radio" id="no-child"><lable>没有</lable></div>
                  </div>
                </div>
                <div v-if="zn_msg.status==2">
                  <div class="ques-list-title">2.您有几个3岁以上的孩子？</div>
                  <div class="ques-list-msg box-sizing" >
                    <select class="ques-sel" name="" id="" v-model="zn_msg.child_num">
                      <option v-for="i in 10" :value="i">{{i}}</option>
                    </select>
                  </div>
                </div>
                <div v-if="zn_msg.status==3">
                  <div class="ques-list-title">3.您的孩子处于哪个阶段？以及您的扣缴比例！</div>
                  <div style="height: 150px;width:78%;overflow: auto">
                    <div class="ques-list-msg box-sizing child-list"  v-for="i in zn_msg.child_num">
                      <div>孩{{i}}:</div>
                      <div>
                        <div class="inline-block">
                          <span>孩子所处阶段：</span>
                          <select class="ques-sel child_stage" name="" id="">
                            <option value="a">3周岁至学前</option>
                            <option value="b">小学</option>
                            <option value="c">初中</option>
                            <option value="d">高中/技校/职业高中</option>
                            <option value="e">专科/本科</option>
                            <option value="f">硕士研究生</option>
                            <option value="g">博士研究生</option>
                            <option value="h">其他未包含学历</option>
                          </select>
                        </div>
                        <div class="inline-block">
                          <span>扣缴比例：</span>
                          <select :data-num="i" class="ques-sel child-proportion" name="" id="">
                            <option value="a">0%</option>
                            <option value="b">50%</option>
                            <option value="c">100%</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="jx">
              <div class="rapid-ques-title">继续教育支出</div>
              <div class="rapid-ques-body">
                <div v-if="jx_msg.status==1">
                  <div class="ques-list-title">1.您本年度是否参加学历（学位）继续教育？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="jx_msg.degree" value="是" type="radio" id="degree1"><lable>是</lable></div>
                    <div class="inline-block radio-div"><input v-model="jx_msg.degree" value="否" type="radio" id="degree2"><lable>否</lable></div>
                  </div>
                </div>
                <div v-if="jx_msg.status==2">
                  <div class="ques-list-title">2.您参加的是哪种学历（学位）继续教育？</div>
                  <div class="ques-list-msg box-sizing">
                    <select v-model="jx_msg.degree_class" class="ques-sel" name="" id="" >
                      <option  value="a">高中/技校/职业高中</option>
                      <option  value="b">大专</option>
                      <option  value="c">本科</option>
                      <option  value="d">研究生</option>
                      <option  value="e">博士生</option>
                      <option  value="f">以上未列举</option>
                    </select>
                  </div>
                </div>
                <div v-if="jx_msg.status==3">
                  <div class="ques-list-title">3.您选择谁扣除？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="jx_msg.fm_cc" value="a" type="radio"><lable>父母</lable></div>
                    <div class="inline-block radio-div"><input v-model="jx_msg.fm_cc" value="b" type="radio"><lable>自己</lable></div>
                    <!--<select v-model="jx_msg.fm_cc" class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">父母</option>-->
                      <!--<option  value="b">自己</option>-->
                    <!--</select>-->
                  </div>
                </div>
                <div v-if="jx_msg.status==4">
                  <div class="ques-list-title">4.您本年度是否取得职业资格继续教育证书</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="jx_msg.zyzg" value="是" type="radio"><lable>是</lable></div>
                    <div class="inline-block radio-div"><input v-model="jx_msg.zyzg" value="否" type="radio"><lable>否</lable></div>
                  </div>
                </div>
                <div v-if="jx_msg.status==5">
                  <div class="ques-list-title">5.您参加的是哪种职业资格继续教育</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="jx_msg.zyzg_class" value="a" type="radio"><lable>参加职业资格继续教育列表（人社部发[2017]68号）</lable></div>
                    <div class="inline-block radio-div"><input v-model="jx_msg.zyzg_class" value="b" type="radio"><lable>其他</lable></div>
                    <!--<select v-model="jx_msg.zyzg_class"  class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">参加职业资格继续教育列表（人社部发[2017]68号）</option>-->
                      <!--<option  value="b">其他</option>-->
                    <!--</select>-->
                  </div>
                </div>
              </div>
            </div>
            <div v-if="zfdk">
              <div class="rapid-ques-title">住房贷款</div>
              <div class="rapid-ques-body">
                <div v-if="zfdk_msg.status==1">
                  <div class="ques-list-title">1.您本人或者配偶是否有首套(非商业房)住房贷款利息支出？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="zfdk_msg.loan" value="有" type="radio" ><lable>有</lable></div>
                    <div class="inline-block radio-div"><input v-model="zfdk_msg.loan" value="没有" type="radio"><lable>没有</lable></div>
                  </div>
                </div>
                <div v-if="zfdk_msg.status==2">
                  <div class="ques-list-title">2.您属于以下哪种情况？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.loan_class" value="a" type="radio"><lable>未婚首套贷款</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.loan_class" value="b" type="radio"><lable>“婚前”本人首套贷款，配偶无贷款</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.loan_class" value="c" type="radio"><lable>“婚前”各自首套贷款</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.loan_class" value="d" type="radio"><lable>“婚后”首套贷款（本人/配偶/共同购房）</lable></div>
                    <!--<select v-model="zfdk_msg.loan_class" class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">未婚首套贷款</option>-->
                      <!--<option  value="b">“婚前”本人首套贷款，配偶无贷款</option>-->
                      <!--<option  value="c">“婚前”各自首套贷款</option>-->
                      <!--<option  value="d">“婚后”首套贷款（本人/配偶/共同购房）</option>-->
                    <!--</select>-->
                  </div>
                </div>
                <div v-if="zfdk_msg.status==3">
                  <div class="ques-list-title">3.您的扣缴比例？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="zfdk_msg.hq_ch" value="a" type="radio" ><lable>0%（配偶扣除）</lable></div>
                    <div class="inline-block radio-div"><input v-model="zfdk_msg.hq_ch" value="b" type="radio"><lable>100%（我扣除）</lable></div>
                    <!--<select v-model="zfdk_msg.hq_ch"  class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">0%（配偶扣除）</option>-->
                      <!--<option  value="b">100%（我扣除）</option>-->
                    <!--</select>-->
                  </div>
                </div>
                <div v-if="zfdk_msg.status==4">
                  <div class="ques-list-title">4.您的扣缴比例？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.hh_ch" value="a" type="radio"><lable>0%（配偶扣除）</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.hh_ch" value="b" type="radio"><lable>50% （我和配偶共同扣除）</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="zfdk_msg.hh_ch" value="c" type="radio"><lable>100%（我扣除）</lable></div>
                    <!--<select v-model="zfdk_msg.hh_ch"  class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">0%（配偶扣除）</option>-->
                      <!--<option  value="b">50% （我和配偶共同扣除）</option>-->
                      <!--<option  value="c">100%（我扣除）</option>-->
                    <!--</select>-->
                  </div>
                </div>
              </div>
            </div>
            <div v-if="fwzj">
              <div class="rapid-ques-title">房屋租金</div>
              <div class="rapid-ques-body">
                <div v-if="fwzj_msg.status==1">
                  <div class="ques-list-title">1.您是否在主要工作城市签订了租赁住房合同，并且本人及配偶在该城市均无住房？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="fwzj_msg.fwstatus" value="是" type="radio" ><lable>是</lable></div>
                    <div class="inline-block radio-div"><input v-model="fwzj_msg.fwstatus" value="否" type="radio"><lable>否</lable></div>
                  </div>
                </div>
                <div v-if="fwzj_msg.status==2">
                  <div class="ques-list-title">2.您的主要工作市属于哪一种？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="radio-div-long radio-div"><input v-model="fwzj_msg.fw_city" value="a" type="radio"><lable>直辖市、省会（首府）城市、计划单列市以及国务院确定的其他城市</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="fwzj_msg.fw_city" value="b" type="radio"><lable>市辖区户籍人口超过100万的城市</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="fwzj_msg.fw_city" value="c" type="radio"><lable>市辖区户籍人口不超过100万的城市</lable></div>
                    <!--<select v-model="fwzj_msg.fw_city" class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">直辖市、省会（首府）城市、计划单列市以及国务院确定的其他城市</option>-->
                      <!--<option  value="b">市辖区户籍人口超过100万的城市</option>-->
                      <!--<option  value="c">市辖区户籍人口不超过100万的城市</option>-->
                    <!--</select>-->
                  </div>
                </div>
                <div v-if="fwzj_msg.status==3">
                  <div class="ques-list-title">3.“住房贷款”与“房屋租住”只能扣除一项，您选择扣除？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="radio-div-long radio-div"><input v-model="fwzj_msg.dk_or_zf" value="a" type="radio"><lable>住房贷款（您预计可扣除{{zfdk_msg.result}}元）</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="fwzj_msg.dk_or_zf" value="b" type="radio"><lable>房屋租住（您预计可扣除{{fwzj_msg.result}}元）</lable></div>
                    <!--<select v-model="fwzj_msg.dk_or_zf"  class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">住房贷款（您预计可扣除{{zfdk_msg.result}}元）</option>-->
                      <!--<option  value="b">房屋租住（您预计可扣除{{fwzj_msg.result}}元）</option>-->
                    <!--</select>-->
                  </div>
                </div>
              </div>
            </div>
            <div v-if="sylr">
              <div class="rapid-ques-title">赡养老人</div>
              <div class="rapid-ques-body">
                <div v-if="sylr_msg.status==1">
                  <div class="ques-list-title">1.您是否有60岁及以上年龄的父母？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="sylr_msg.parent" value="有" type="radio" ><lable>有</lable></div>
                    <div class="inline-block radio-div"><input v-model="sylr_msg.parent" value="无" type="radio"><lable>无</lable></div>
                  </div>
                </div>
                <div v-if="sylr_msg.status==2">
                  <div class="ques-list-title">2.您是否有子女均已去世的60岁及以上年龄的（外袓父母、祖父母）？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="sylr_msg.grandparent" value="有" type="radio" ><lable>有</lable></div>
                    <div class="inline-block radio-div"><input v-model="sylr_msg.grandparent" value="无" type="radio"><lable>无</lable></div>
                  </div>
                </div>
                <div v-if="sylr_msg.status==3">
                  <div class="ques-list-title">3.您是否是独生子女？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="sylr_msg.single_children" value="是" type="radio" ><lable>是</lable></div>
                    <div class="inline-block radio-div"><input v-model="sylr_msg.single_children" value="否" type="radio"><lable>否</lable></div>
                  </div>
                </div>
                <div v-if="sylr_msg.status==4">
                  <div class="ques-list-title">4.您请选择或填写您赡养老人的扣除金额？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div"><input v-model="sylr_msg.sylr_cc" value="1000" type="radio" ><lable>1000元（50%）</lable></div>
                    <div class="inline-block radio-div">或:<input v-model="sylr_msg.sylr_cc" value="是" type="number" placeholder="填写小于1000元的金额" ></div>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="dbyl">
              <div class="rapid-ques-title">大病医疗</div>
              <div class="rapid-ques-body">
                <div v-if="dbyl_msg.status==1">
                  <div class="ques-list-title" style="width: 80%;margin: 0 auto 2rem auto">1.您的家庭（本人、配偶、子女）本年度是否产生了需要申报扣除的大病医疗费用？（可扣除范围：与基本医保相关的医药费用支出，扣除医保报销后个人负担（指医保目录范围内的自付部分）累计超过15000元的部分）</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="radio-div-long radio-div"><input v-model="dbyl_msg.if_cc" value="a" type="radio"><lable>有，本人扣除</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="dbyl_msg.if_cc" value="b" type="radio"><lable>有，配偶扣除</lable></div>
                    <div class="radio-div-long radio-div"><input v-model="dbyl_msg.if_cc" value="c" type="radio"><lable>无</lable></div>
                    <!--<select v-model="dbyl_msg.if_cc" class="ques-sel" name="" id="" >-->
                      <!--<option  value="a">有，本人扣除</option>-->
                      <!--<option  value="b">有，配偶扣除</option>-->
                      <!--<option  value="c">无 </option>-->
                    <!--</select>-->
                  </div>
                </div>
                <div v-if="dbyl_msg.status==2">
                  <div class="ques-list-title">2.您本人当月超过基本医保相关的扣除医保报销后的个人负担部分是多少？</div>
                  <div class="ques-list-msg box-sizing">
                    <div class="inline-block radio-div">请填写<input v-model="dbyl_msg.cc_money" value="是" type="number" placeholder="填写小于1000元的金额" ></div>
                  </div>
                </div>

              </div>
            </div>
            <div class="ques-change">
              <!--<div class="inline-block prev-btn box-sizing" @click="prev_ques">上一题</div>-->
              <div class="inline-block next-btn box-sizing" v-if="sub==false"  @click="next_ques">下一题</div>
              <div class="inline-block next-btn box-sizing" v-if="sub" @click="sub_cs()">提交</div>
            </div>
          </div>
          <div v-if="total_result" >
            <div class="rapid-ques-title" style="top:2.44rem">测试结果</div>
            <div class="rapid-result-title">
              恭喜您，您共计符合{{fh_num}}项专项附加扣除标准
            </div>
            <table class="repid-table">
              <tr class="blue-bg">
                <td class="table-title">扣除项</td>
                <td class="table-title">是否符合</td>
                <td class="table-title" colspan="2">本人扣缴比例</td>
                <td class='table-title'>月扣缴金额</td>
                <td class="table-title">扣缴金额</td>
              </tr>
              <tr>
                <td rowspan="2">子女教育</td>
                <td rowspan="2"><img class="if_fh"  v-if="zn_msg.result*12!=0" src="../../../static/img/if-fh.png" alt=""></td>
                <td>{{zn_msg.child_50_num.length}}个孩子</td>
                <td>50%</td>
                <td>{{Number(zn_msg.child_50_num.length)*500}}</td>
                <td class="result-td" rowspan="2">{{zn_msg.result*12}}</td>
              </tr>
              <tr>
                <td>{{zn_msg.child_100_num.length}}个孩子</td>
                <td>100%</td>
                <td>{{Number(zn_msg.child_100_num.length)*1000}}</td>
              </tr>
              <tr class="blue-bg">
                <td rowspan="2">继续教育</td>
                <td rowspan="2"><img class="if_fh"  v-if="jx_msg.degree_money*12!=0||jx_msg.zyzg_money!=0" src="../../../static/img/if-fh.png" alt=""></td>
                <td>学历学位</td>
                <td></td>
                <td>{{jx_msg.degree_money}}</td>
                <td class="result-td">{{jx_msg.degree_money*12}}</td>
              </tr>
              <tr class="blue-bg">
                <td>职业教育</td>
                <td></td>
                <td>发送当月一次性扣缴（可年底汇算清缴）</td>
                <td>{{jx_msg.zyzg_money}}</td>
              </tr>
              <tr>
                <td>大病医疗</td>
                <td><img class="if_fh"  v-if="dbyl_msg.result!=0" src="../../../static/img/if-fh.png" alt=""></td>
                <td colspan="2"></td>
                <td>可年底汇算清缴</td>
                <td class="result-td">{{dbyl_msg.result}}</td>
              </tr>
              <tr class="blue-bg">
                <td>住房贷款利息</td>
                <td><img class="if_fh"  v-if="zfdk_msg.result*12!=0" src="../../../static/img/if-fh.png" alt=""></td>
                <td colspan="2"></td>
                <td>{{zfdk_msg.result}}</td>
                <td class="result-td">{{zfdk_msg.result*12}}</td>
              </tr>
              <tr>
                <td>住房租金</td>
                <td><img class="if_fh"  v-if="fwzj_msg.result*12!=0" src="../../../static/img/if-fh.png" alt=""></td>
                <td colspan="2"></td>
                <td>{{fwzj_msg.result}}</td>
                <td class="result-td">{{fwzj_msg.result*12}}</td>
              </tr>
              <tr class="blue-bg">
                <td>赡养老人</td>
                <td><img class="if_fh" v-if="sylr_msg.result*12!=0" src="../../../static/img/if-fh.png" alt=""></td>
                <td colspan="2">100%</td>
                <td>{{sylr_msg.result}}</td>
                <td class="result-td">{{sylr_msg.result*12}}</td>
              </tr>
              <tr>
                <td>共计</td>
                <td>{{fh_num}}项</td>
                <td colspan="2"></td>
                <td>{{Number(zn_msg.result)+Number(jx_msg.degree_money)+Number(zfdk_msg.result)+Number(fwzj_msg.result)+Number(sylr_msg.result)}}</td>
                <td>{{Number(zn_msg.result*12)+Number(jx_msg.degree_money*12)+Number(jx_msg.zyzg_money)+Number(dbyl_msg.result)+Number(zfdk_msg.result*12)+Number(fwzj_msg.result*12)+Number(sylr_msg.result*12)}}</td>
              </tr>
            </table>
            <div class="test-again" @click="cs_again()">再测一次</div>
          </div>
        </div>
        <div  v-if="!total_result" class="rapid-notice">
          <div class="rapid-notice-title">
            <span class="notice-line inline-block"></span>
            <span>模糊地带</span>
          </div>
          <div class="rapid-notice-body">
            <ul class="notice-ul"  v-if="zn">
              <li class="notice-li-title"><span>1.</span>可扣除情况：</li>
              <li><span></span>3周岁至学前未上幼儿园</li>
              <li><span></span>国外读书（资料备查存档）</li>
              <li><span></span>休学期间非全日制自考期间私塾</li>
              <li class="notice-li-title"><span>2.</span>不可扣除情况：</li>
              <li><span></span>休学期间保留学籍可以扣除，无学籍不可扣除</li>
            </ul>
            <ul class="notice-ul"  v-if="jx">
              <li><span>1.</span>非全日制及全日制都可享受扣除</li>
              <li><span>2.</span>当年取得多个证书，只能扣除一次</li>
              <li><span>3.</span>本科及以下学历的，若父母按照“子女教育”申报，则每月按1000扣除</li>
              <li><span>4.</span>证书和学历教育可以双重扣</li>
            </ul>
            <ul class="notice-ul"  v-if="zfdk">
              <li><span>1.</span>商住房不享受该项扣除；</li>
              <li><span>2.</span>国外购买住房不享受该项扣除。</li>
              <li><span>3.</span>住房贷款与房屋租金只能选择一项扣除。</li>
            </ul>
            <ul class="notice-ul"  v-if="fwzj">
              <li><span>1.</span>在主要工作地附近城市所租住房，不可扣除；例如：北京工作，燕郊租房</li>
              <li><span>2.</span>转租、合租的房子，只要本人有签订租赁住房合同即可扣除</li>
              <li><span>3.</span>合租房子扣除</li>
              <li><span>4.</span>夫妻双方主要工作城市相同的，只能由一方扣除住房租金支出。</li>
              <li><span>5.</span>夫妻双方主要工作的城市不相同的，并且各自在其主要工作城市都没有住房的，可以分别扣除住房租金支出。</li>
            </ul>
            <ul class="notice-ul"  v-if="sylr">
              <li><span>1.</span>赡养配偶的父母，不可以扣除</li>
              <li><span>2.</span>父母均超过60岁，不得重复扣除</li>
            </ul>
          </div>
        </div>
        <div  v-if="total_result" class="tax-login-method">
          <div class="tax-login-title">
            <span class="inline-block line"></span>
            <span>专项附加扣除信息填报途径</span>
            <span class="inline-block line"></span>
          </div>
          <div class="tax-login-body inline-block">
            <!--<div class="login-title">-->
              <!--<span class="notice-line inline-block"></span>-->
              <!--<span>方式一：</span>-->
            <!--</div>-->
            <div class="tax_excle">
              <h4 class="border-blue">方式一：</h4>
              <div class="tax_excle_img">
                <div class="inline-block">
                  <img src="../../../static/img/tax_dialog_img1.png">
                  <p>1.下载信息采集表格</p>
                  <span class="download_btn" @click="excle_dialog_show=!excle_dialog_show">下载表格</span>
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
      <div class="mask-layer"  v-if="excle_dialog_show">
        <div class="excle_download">
          <div class="excle_download_title">
            <h4>下载表格</h4>
            <img src="../../../static/img/excel_dialog_close.png" @click="excle_dialog_show=!excle_dialog_show"/>
          </div>
          <div class="excle_list_box">
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/pdf_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">1－个人所得税专项附加扣除条件(辅导培训版)</h4>
                <p>个人所得税专项附加扣除条件(辅导培训版)</p>
              </div>
              <span class="download_btn"><a href="./static/download/5.pdf" download="个人所得税专项附加扣除条件(辅导培训版).pdf">下载文件</a></span>
            </div>
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/pdf_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">2－个人所得税专项附加扣除操作指引（辅导培训版）</h4>
                <p>个人所得税专项附加扣除操作指引（辅导培训版）</p>
              </div>
              <span class="download_btn"><a href="./static/download/4.pdf" download="个人所得税专项附加扣除操作指引（辅导培训版）.pdf">下载文件</a></span>
            </div>
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/pdf_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">3－个人所得税扣缴申报指引（辅导培训版）</h4>
                <p>个人所得税扣缴申报指引（辅导培训版）</p>
              </div>
              <span class="download_btn"><a href="./static/download/3.pdf" download="个人所得税扣缴申报指引（辅导培训版）.pdf">下载文件</a></span>
            </div>
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/excel_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">4－1：专项附加扣除信息电子模版</h4>
                <p>专项附加扣除信息电子模版</p>
              </div>
              <span class="download_btn"><a href="./static/download/1.xls" download="专项附加扣除信息电子模版.xls">下载表格</a></span>
            </div>
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/pdf_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">4－2：电子模板填写常见问题</h4>
                <p>电子模板填写常见问题</p>
              </div>
              <span class="download_btn"><a href="./static/download/2.pdf" download="电子模板填写常见问题.pdf">下载文件</a></span>
            </div>
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/pdf_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">5－专项附加扣除电子模板填写样例说明</h4>
                <p>专项附加扣除电子模板填写样例说明</p>
              </div>
              <span class="download_btn"><a href="./static/download/6.pdf" download="专项附加扣除电子模板填写样例说明.pdf">下载文件</a></span>
            </div>
            <div class="excle_list">
              <img class="inline-block" src="../../../static/img/pdf_icon.png">
              <div class="inline-block file_detail">
                <h4 class="">6－自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0</h4>
                <p>自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0</p>
              </div>
              <span class="download_btn"><a href="./static/download/7.pdf" download="自然人税收管理系统扣缴客户端用户操作手册（专项附加扣除信息采集篇）V1.0.pdf">下载文件</a></span>
            </div>
          </div>

        </div>
      </div>

    </div>
</template>

<script>
  import {array_del} from '../../../static/js/puplic'
    export default {
        name: "rapid-measurement",
        data(){
          return{
            mask_layer_show:false,
            excle_dialog_show:false,
            tax_dialog_show:false,
            zn:true,//子女教育
            zn_msg:{
              status:1,
              child:'',//是否有孩子
              child_num:1,//孩子数量
              child_50_num:[],//50%扣除数量
              child_100_num:[],//100%扣除数量
              result:0
            },
            jx:false,//继续教育
            jx_msg:{
              status:1,
              degree:'',//是否学位教育
              degree_class:'',//学位教育类型
              degree_money:0,//学位教育扣除
              fm_cc:'',
              zyzg:'',//是否职业资格
              zyzg_class:'',//职业资格类型
              zyzg_money:0,//职业资格扣除
              result:0
            },
            zfdk:false,//住房贷款
            zfdk_msg:{
              status:1,
              loan:'',//是否住房贷款
              loan_class:'',//住房贷款类型
              hq_ch:'',//婚前扣款类型
              hh_ch:'',//婚后扣款类型
              result:0
            },
            fwzj:false,//房屋租金
            fwzj_msg:{
              status:1,
              fwstatus:'',//是否租房
              fw_city:'',//租房城市
              dk_or_zf:'',//选择贷款或者租房
              result:0,
            },
            sylr:false,//赡养老人
            sylr_msg:{
              status:1,
              parent:"",//是否有60岁父母
              grandparent:'',//是否有儿女双亡的祖父母
              single_children:'',//是否是独生子女
              sylr_cc:0,//赡养老人扣除
              result:0
            },
            dbyl:false,//大病医疗
            dbyl_msg:{
              status:1,
              if_cc:'',//是否可扣除
              cc_money:0,//可扣除的钱
              result:0
            },
            sub:false,//提交按钮
            total_result:false,//测试结果
            fh_num:0,//几项符合
          }
        },
        mounted(){
          var that=this;
          Array.prototype.indexOf = function (val) {
            for (var i = 0; i < this.length; i++) {
              if (this[i] == val) return i;
            }
            return -1;
          };
          Array.prototype.remove = function (val) {
            var index = this.indexOf(val);
            if (index > -1) {
              this.splice(index, 1);
            }
          };
          //孩子阶段点击
          $("body").on("change",".child_stage",function(){
            if($(this).val()=='h'){
              $(this).parent().next().hide();
            }else{
              $(this).parent().next().show();
            }
          });
          //孩子扣除比例点击
          $("body").on("change",".child-proportion",function(){
              // console.log($(this).attr("data-num"));
              if($(this).val()!='a'){
                if($(this).val()=='b'){
                  that.zn_msg.child_100_num.remove($(this).attr("data-num"));
                  that.zn_msg.child_50_num.push($(this).attr("data-num"));
                }else if($(this).val()=='c'){
                  that.zn_msg.child_100_num.push($(this).attr("data-num"));
                  that.zn_msg.child_50_num.remove($(this).attr("data-num"));
                }
              }else{
                that.zn_msg.child_100_num.remove($(this).attr("data-num"));
                that.zn_msg.child_50_num.remove($(this).attr("data-num"));
              }

          })
        },
        methods:{
          //上一题
          prev_ques:function(){
            if(this.zn){
              if(this.zn_msg.status>1){
                this.zn_msg.status=this.zn_msg.status-1;
              }
            }
            if(this.jx){
              console.log(this.zn_msg.status);
              if(this.jx_msg.status==1){
                if(this.zn_msg.status==1){
                  this.zn_msg.status=1;
                }else{
                  this.zn_msg.status=3;
                }
                this.zn_msg.child_50_num=[];
                this.zn_msg.child_100_num=[];
                this.zn=true;
                this.jx=false;
              }else{
                this.jx_msg.status=this.jx_msg.status-1;
              }
            }
          },
          //下一题
          next_ques:function(){
            var that=this;
            if(this.zn){
              // if(this.zn_msg.child==''){
              //   alert("请选择")
              // }else{
                if(this.zn_msg.child=='有'){
                  this.zn_msg.status=this.zn_msg.status+1;
                }else{
                  this.zn_msg.result=0;
                  this.zn=false;
                  this.jx=true;
                }
              // }
              if(this.zn_msg.status>3){
                this.zn_msg.result=Number(this.zn_msg.child_50_num.length)*500+Number(this.zn_msg.child_100_num.length)*1000;
                this.zn=false;
                this.jx=true;
              }

            }
            if(this.jx&&this.jx_msg.degree!=""){
              if(this.jx_msg.status==1){
                  if(this.jx_msg.degree=="是"){
                    this.jx_msg.status=2
                  }else{
                    this.jx_msg.status=4;
                    this.jx_msg.degree_money=0;
                  }
              }else if(this.jx_msg.status==2){
                  if(this.jx_msg.degree_class=="f"){
                    this.jx_msg.degree_money=0;
                    this.jx_msg.status=4;
                  }else if(this.jx_msg.degree_class=="d"||this.jx_msg.degree_class=="e"){
                    this.jx_msg.degree_money=400;
                    this.jx_msg.status=4;
                  }else{
                    this.jx_msg.status=3;
                  }

              }else if(this.jx_msg.status==3){
                if(this.jx_msg.fm_cc=="a"){
                  this.jx_msg.degree_money=0;
                }else{
                  this.jx_msg.degree_money=400;
                }
                this.jx_msg.status=4;
              }else if(this.jx_msg.status==4){
                  if(this.jx_msg.zyzg=="是"){
                    this.jx_msg.status=5;
                  }else{
                    this.jx=false;
                    this.zfdk=true;
                    this.jx_msg.result=this.jx_msg.degree_money;

                  }
              }else if(this.jx_msg.status==5){
                  if(this.jx_msg.zyzg_class=="a"){
                    this.jx_msg.zyzg_money=3600;
                  }
                  this.jx=false;
                  this.zfdk=true;
                  this.jx_msg.result=Number(this.jx_msg.degree_money)+Number(this.jx_msg.zyzg_money);

              }
              // console.log(this.jx_msg.result);
            }
            if(this.zfdk&&this.zfdk_msg.loan!=""){
              if(this.zfdk_msg.status==1){
                if(this.zfdk_msg.loan=="有"){
                  this.zfdk_msg.status=2
                }else{
                  this.zfdk=false;
                  this.fwzj=true;
                }
              }else if(this.zfdk_msg.status==2){
                if(this.zfdk_msg.loan_class=="b"||this.zfdk_msg.loan_class=="a"){
                  this.zfdk_msg.result=1000;
                  this.zfdk=false;
                  this.fwzj=true;
                }else if(this.zfdk_msg.loan_class=="d"){
                  this.zfdk_msg.status=3
                }else if(this.zfdk_msg.loan_class=="c"){
                  this.zfdk_msg.status=4
                }
              }else if(this.zfdk_msg.status==3){
                if(this.zfdk_msg.hq_ch=="a"){
                  this.zfdk_msg.result=0;
                  this.zfdk=false;
                  this.fwzj=true;
                }else if(this.zfdk_msg.hq_ch=="b"){
                  this.zfdk_msg.result=1000;
                  this.zfdk=false;
                  this.fwzj=true;
                }
              }else if(this.zfdk_msg.status==4){
                if(this.zfdk_msg.hh_ch=="a"){
                  this.zfdk_msg.result=0;
                  this.zfdk=false;
                  this.fwzj=true;
                }else if(this.zfdk_msg.hh_ch=="b"){
                  this.zfdk_msg.result=500;
                  this.zfdk=false;
                  this.fwzj=true;

                }else if(this.zfdk_msg.hh_ch=="c"){
                  this.zfdk_msg.result=1000;
                  this.zfdk=false;
                  this.fwzj=true;

                }

              }
              // console.log(this.zfdk_msg.result)
            }
            if(this.fwzj&&this.fwzj_msg.fwstatus!=""){
              if(this.fwzj_msg.status==1){
                if(this.fwzj_msg.fwstatus=="是"){
                  this.fwzj_msg.status=2
                }else if(this.fwzj_msg.fwstatus=="否"){
                  this.fwzj=false;
                  this.sylr=true;
                }
              }else if(this.fwzj_msg.status==2){
                if(this.fwzj_msg.fw_city=='a'){
                  this.fwzj_msg.result=1500;
                }else if(this.fwzj_msg.fw_city=='b'){
                  this.fwzj_msg.result=1100;
                }else if(this.fwzj_msg.fw_city=='c'){
                  this.fwzj_msg.result=800;
                }
                this.fwzj_msg.status=3;
              }else if(this.fwzj_msg.status==3){
                if(this.fwzj_msg.dk_or_zf=='a'){
                  this.fwzj_msg.result=0;
                  this.zfdk_msg.result=this.zfdk_msg.result;
                  this.fwzj=false;
                  this.sylr=true;
                }else if(this.fwzj_msg.dk_or_zf=='b'){
                  this.zfdk_msg.result=0;
                  this.fwzj_msg.result=this.fwzj_msg.result;
                  this.fwzj=false;
                  this.sylr=true;
                }

              }
              // console.log(this.fwzj_msg.result+"or"+this.zfdk_msg.result)
            }
            if(this.sylr&&this.sylr_msg.parent!=""){
              if(this.sylr_msg.status==1){
                if(this.sylr_msg.parent=="有"){
                  this.sylr_msg.status=3;
                }else if(this.sylr_msg.parent=="无"){
                  this.sylr_msg.status=2;
                }
              }else if(this.sylr_msg.status==2){
                if(this.sylr_msg.grandparent=="有"){
                  this.sylr_msg.status=3;
                }else if(this.sylr_msg.grandparent=="无"){
                  this.sylr=false;
                  this.dbyl=true;
                }
              }else if(this.sylr_msg.status==3){
                if(this.sylr_msg.single_children=="是"){
                  this.sylr=false;
                  this.dbyl=true;
                  this.sylr_msg.result=2000;
                }else if(this.sylr_msg.single_children=="否"){
                  this.sylr_msg.status=4;
                }

              }else if(this.sylr_msg.status==4){
                if(this.sylr_msg.sylr_cc>1000){
                  alert("请填写小于1000的数字");
                  return false;
                }else{
                  this.sylr_msg.result=this.sylr_msg.sylr_cc;
                  this.sylr=false;
                  this.dbyl=true;
                }
              }
              // console.log(this.sylr_msg.result)
            }
            if(this.dbyl&&this.dbyl_msg.if_cc!=""){
              if(this.dbyl_msg.status==1){
                if(this.dbyl_msg.if_cc=='a'){
                  this.dbyl_msg.status=2;
                  // this.sub=true;
                }else if(this.dbyl_msg.if_cc=='c'||this.dbyl_msg.if_cc=='b'){
                  this.sub=true;
                  this.dbyl=false;
                  this.total_result=true;
                  if(this.zn_msg.result!=0){
                    this.fh_num=this.fh_num+1;
                  }
                  if(this.jx_msg.result!=0){
                    this.fh_num=this.fh_num+1;
                  }
                  if(this.zfdk_msg.result!=0){
                    this.fh_num=this.fh_num+1;
                  }
                  if(this.fwzj_msg.result!=0){
                    this.fh_num=this.fh_num+1;
                  }
                  if(this.sylr_msg.result!=0){
                    this.fh_num=this.fh_num+1;
                  }
                  if(this.dbyl_msg.result!=0){
                    this.fh_num=this.fh_num+1;
                  }
                }
              }else if(this.dbyl_msg.status==2){
                // this.sub=true;
                if(this.dbyl_msg.cc_money>80000){
                  alert("请填写小于80000的数字");
                }else{
                  this.dbyl_msg.result=this.dbyl_msg.cc_money;
                  this.dbyl=false;
                  this.total_result=true;
                }
                if(this.zn_msg.result!=0){
                  this.fh_num=this.fh_num+1;
                }
                if(this.jx_msg.result!=0){
                  this.fh_num=this.fh_num+1;
                }
                if(this.zfdk_msg.result!=0){
                  this.fh_num=this.fh_num+1;
                }
                if(this.fwzj_msg.result!=0){
                  this.fh_num=this.fh_num+1;
                }
                if(this.sylr_msg.result!=0){
                  this.fh_num=this.fh_num+1;
                }
                if(this.dbyl_msg.result!=0){
                  this.fh_num=this.fh_num+1;
                }
              }
              //console.log(this.dbyl_msg.result)
            }
          },
          //提交测试
          sub_cs:function(){
            this.total_result=true;
          },
          //再测一次
          cs_again:function(){
            this.zn=true;
            this.zn_msg={
                status:1,
                child:'',//是否有孩子
                child_num:1,//孩子数量
                child_50_num:[],//50%扣除数量
                child_100_num:[],//100%扣除数量
                result:0
            };
            this.jx=false;//继续教育
            this.jx_msg={
              status:1,
                degree:'',//是否学位教育
                degree_class:'',//学位教育类型
                degree_money:0,//学位教育扣除
                zyzg:'',//是否职业资格
                zyzg_class:'',//职业资格类型
                zyzg_money:0,//职业资格扣除
                result:0
            };
            this.zfdk=false;//住房贷款
            this.zfdk_msg={
              status:1,
                loan:'',//是否住房贷款
                loan_class:'',//住房贷款类型
                hq_ch:'',//婚前扣款类型
                hh_ch:'',//婚后扣款类型
                result:0
            };
            this.fwzj=false;//房屋租金
            this.fwzj_msg={
              status:1,
                fwstatus:'',//是否租房
                fw_city:'',//租房城市
                dk_or_zf:'',//选择贷款或者租房
                result:0,
            };
            this.sylr=false;//赡养老人
            this.sylr_msg={
              status:1,
                parent:"",//是否有60岁父母
                grandparent:'',//是否有儿女双亡的祖父母
                single_children:'',//是否是独生子女
                sylr_cc:0,//赡养老人扣除
                result:0
            };
            this.dbyl=false;//大病医疗
            this.dbyl_msg={
              status:1,
                if_cc:'',//是否可扣除
                cc_money:0,//可扣除的钱
                result:0
            };
            this.sub=false;//提交按钮
            this.total_result=false;//测试结果
            this.fh_num=0;
          }
        }
    }
</script>

<style scoped>
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
   .excle_download{
    position: fixed;
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
  .radio-div-long{
    text-align: left;
    padding-left:9rem;
    margin-bottom: 1rem!important;
  }
  .child-list{
    text-align: left!important;
    margin-left: 100px;
    margin-bottom: 10px;
  }
  .ques-sel{
    width:100px;
    height:30px;
    font-size: 0.875rem;
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
  .download_btn>a{
    color:#fff;
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
  /*.repid-table>tr:nth-child(odd){*/
    /*background: #EFF3FF;*/
  /*}*/
  .blue-bg{
    background: #EFF3FF;
  }
  .repid-table>tr{
    border-bottom: 1px solid #eee;
  }
  .repid-table>tr>td{
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
    /*margin-right: 1.25rem;*/
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
