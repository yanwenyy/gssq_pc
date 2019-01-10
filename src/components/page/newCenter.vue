<template>
  <div class="container">
    <div class="banner">
      <img src="../../../static/img/banner-gswd.png" alt="">
    </div>
    <div class="new-center-title">新政速递</div>
    <ul class="gswd-ul">
      <li class="gswd_list" v-for="item in list" @click="$router.push({name:'newDetail',query:{uuid:item.policyId}})">
        <div class="new-list-title">{{item.title}}</div>
        <div><span class="new-list-line inline-block"></span></div>
        <div class="new-list-msg">
          {{item.content}}
        </div>
        <div class="new-list-footer">
          <span>{{format(item.createTime)}}</span>
          <span class="look_new-detail" @click="$router.push({name:'newDetail'})">查看 <img src="../../../static/img/new-go.png" alt=""></span>
        </div>
      </li>
    </ul>
    <div id="page" class="paging"></div>
  </div>
</template>

<script>
    export default {
        name: "new-center",
        data(){
          return{
            list:[]
          }
        },
        mounted(){
          var that=this;
          this.ajax(this.http_url.url+"/biz/policy/list",{
            'page':'1',
            'limit':'10',
          },function(data){
              console.log(data);
            that.list=data.page.list;
            that.page(data.page.totalPage);
          })
        },
        methods:{
          //分页
          page:function(val){
            var that=this;
            $("#page").paging({
                total: val,
                numberPage: 1
              },
              function(msg) {
                //回调函数 msg为选中页码
                // tab(msg);
                that.ajax(that.http_url.url+"/biz/policy/list",{
                  'page':String(msg),
                  'limit':'10',
                },function(data){
                  that.list=data.page.list;
                })
            });
          }
        }
    }
</script>

<style scoped>
  .look_new-detail>img{
    vertical-align: middle;
    margin-top: -3px;
  }
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
