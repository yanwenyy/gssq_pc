import Vue from 'vue'
export default{
  install:function(Vue,options)
  {
    //接口变量
    Vue.prototype.http_url = {
      test:'http://test.jieshuibao.com/jsb_tax/',
      formal: "http://tax.jieshuibao.com/jsb_tax/",
      url:  "http://tax.jieshuibao.com/jsb_tax/",
    };
    //跳转地址
    Vue.prototype.pass_url = {
      test:'http://test.jieshuibao.com/GSSQ_back',
      formal: "http://tax.jieshuibao.com/manage",
      url:  "http://tax.jieshuibao.com/manage",
    };
    //问答接口变量
    Vue.prototype.http_url_wd = {
      test:'http://test.jieshuibao.com/jsb_webserver/',
      formal: "https://api.jieshuibao.com/",
      url:  "https://api.jieshuibao.com/",
    };
    //头像变量
    Vue.prototype.head_src = Vue.prototype.http_url_wd.url+"showImg/head/";
    //问题图片
    Vue.prototype.question_src = Vue.prototype.http_url_wd.url+"showImg/question/";
    //会员卡图片
    Vue.prototype.showImg_src = Vue.prototype.http_url_wd.url+"showImg/card/";
    //视频封面图片
    Vue.prototype.cover_src = Vue.prototype.http_url_wd.url+"showImg/cover/";
    //证件图片
    Vue.prototype.cert_src = Vue.prototype.http_url_wd.url+"showImg/cert/";
    Vue.prototype.ajax=function(url,data,succ){
      $.ajax({
        type:"POST",
        url:url,
        dataType: "json",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json;charset=utf-8",
          "token":Vue.cookie.get('token'),
        },
        data:JSON.stringify(data),
        success:function(data){
          if(data.code=="401"){
            // window.location.href="../html/register-next.html";
            window.location.href= Vue.prototype.pass_url.url;
          }else{
            succ(data);
          }

        },
        error:function(){
          console.log("程序出错,请重试");
        }
      })
    }
    Vue.prototype.ajax_nodata=function(url,succ){
      $.ajax({
        type:"POST",
        url:url,
        dataType: "json",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json;charset=utf-8",
          "token":Vue.cookie.get('token'),
        },
        success:function(data){
          if(data.code=="401"){
            // window.location.href="../html/register-next.html";
            window.location.href= Vue.prototype.pass_url.url;
          }else{
            succ(data);
          }

        },
        error:function(){
          console.log("程序出错,请重试");
        }
      })
    }
    Vue.prototype.ajax_nodata_get=function(url,succ){
      $.ajax({
        type:"GET",
        url:url,
        dataType: "json",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json;charset=utf-8",
          "token":Vue.cookie.get('token'),
        },
        success:function(data){
          if(data.code=="401"){
            // window.location.href="../html/register-next.html"
            window.location.href= Vue.prototype.pass_url.url;
          }else{
            succ(data);
          }

        },
        error:function(){
          console.log("程序出错,请重试");
        }
      })
    }
    //问答的ajax请求
    Vue.prototype.ajax_wd=function(url,data,succ){
      $.ajax({
        type:"POST",
        url:Vue.prototype.http_url_wd.url+url,
        dataType: "json",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        data:JSON.stringify(data),
        success:function(data){
          if(data.code=="401"){
            // window.location.href="../html/register-next.html"
            window.location.href= Vue.prototype.pass_url.url;
          }else{
            succ(data);
          }

        },
        error:function(){
          console.log("程序出错,请重试");
        }
      })
    }   //日期转换
    Vue.prototype.format=function(shijianchuo){
      function add0(m){return m<10?'0'+m:m };
      var time = new Date(shijianchuo);
      var y = time.getFullYear();
      var m = time.getMonth()+1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
    }
    //用户等级
    Vue.prototype.get_score=function(data,aision,vip){
      var score_img;
      if(aision==0){
        if(vip==0){
          score_img="/static/img/hangxin_vip.png"
        }else{
          score_img="/static/img/hangxin_vip_dateout.png"
        }
      }else{
        if(0<=data&&data<6){
          score_img="/static/img/icon-pthy.png"
        }else if(6<=data&&data<20){
          score_img="/static/img/icon-pthy.png"
        }else if(20<=data&&data<50){
          score_img="/static/img/icon-yphy.png"
        }else if(50<=data&&data<100){
          score_img="/static/img/icon-jphy.png"
        }else if(100<=data&&data<500){
          score_img="/static/img/icon-bjhy.png"
        }else if(500<=data){
          score_img="/static/img/icon-zshy.png"
        }
      }
      return score_img;
    }
    //行业,税种,专题
    Vue.prototype.get_category=function(data,key){
      var categorys='';
      for(var i=0;i<data.length;i++){
        if(data[i].name==key){
          categorys=data[i].children;
        }
      }
      return categorys;
    }
  }
}

