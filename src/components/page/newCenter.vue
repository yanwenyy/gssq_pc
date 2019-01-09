<template>
  <div class="container">
    <div class="banner">
      <img src="../../../static/img/banner-gswd.png" alt="">
    </div>
    <div class="new-center-title">新政速递</div>
    <ul class="gswd-ul">
      <li class="gswd_list" v-for="item in 10">
        <div class="new-list-title">《国家税务总局关于个人所得税自行纳税申报有 关问题的公告》国家税务总局【2018】62号</div>
        <div><span class="new-list-line inline-block"></span></div>
        <div class="new-list-msg">
          根据新修改的《中华人民共和国个人所得税法》及其实施条例，现就个人所得税自行纳税申报有关问题公告如下：一、取得综合所得需要办理汇算清缴的纳税申报
          取得综合所得且符合下列情形之一的纳税人，应当依法办理汇算清缴：（一）从两处以上取得综合所得，且综合所得年收入额减除专项扣除后的额减除专项扣除后
          余额超过6万元；
        </div>
        <div class="new-list-footer">
          <span>2019-08-08</span>
          <span class="look_new-detail" @click="$router.push({name:'newDetail'})">查看</span>
        </div>
      </li>
    </ul>
    <div id="page" class="paging"></div>
  </div>
</template>

<script>
    export default {
        name: "new-center",
        mounted(){
          $("#page").paging({
              total: 10,
              numberPage: 1
            },
            function(msg) {
              //回调函数 msg为选中页码
              // tab(msg);

            });
        },
    }
</script>

<style scoped>
  .gswd_list{
    margin-bottom: 2.5rem;
  }
  .new-list-footer{
    display: flex;
    justify-content: space-between;
    font-size: 0.82rem;
  }
  .new-list-footer>span:nth-child(2){
    color:#F99F12;
  }
  .new-list-msg{
    font-size: 0.875rem;
    color:#666;
    line-height:23px;
    margin-bottom: 0.5rem;
  }
  .new-list-title{
    font-size: 0.94rem;
    color:#333;
    font-weight: bold;
    margin-bottom:0.69rem ;
  }
  .new-list-line{
    width:35px;
    height:2px;
    background:rgba(19,181,177,1);
    border-radius:1px;
    vertical-align: top;
  }
  .new-center-title{
    font-size: 1.125rem;
    color:#13B5B1;
    font-weight: bold;
    margin:1.275rem 0;
  }
</style>
