<template>
  <div class="container">
    <div class="main-left inline-block box-sizing">
      <div class="main-left-title">
        <img src="../../../static/img/tax-home-left.png" alt="">
        <span @click="$router.push({name:'home'})">首页</span>
      </div>
      <ul class="left-list-ul">
        <li v-for="item in menu_list" :data-last="item.children!=''? 'yes':'no'">
          <div class="left-list-one" :class="two_menu==item.name? 'left-list-one-act':''"  @click="list_one(item.name)">
            <div @click="menu_click(item.children!=''? 'yes':'no',item.labelId)">
              <!--<img :src="item.img" alt="">-->
              <span class="inline-block left-list-one-icon"  :class="two_menu==item.name? 'left-list-one-icon-act':''" ><icon-svg :name="item.icon"></icon-svg></span>
              <div class="inline-block">{{item.name}}</div>
              <img :src="two_menu==item.name? './static/img/left-trange-click.png':'./static/img/left-trange.png'" alt="">
            </div>
          </div>
          <div v-if="two_menu==item.name" class="left-list-two">
            <ul>
              <li v-for="two in item.children">
                <div class="left-list-two-div" :class="three_menu==two.name? 'left-list-two-div-act':''" @click="list_two(two.name)">
                  <div  @click="menu_click(two.children!=''? 'yes':'no',two.labelId)">
                    <img v-if="two.children!=''" :src="three_menu==two.name? './static/img/left-trange-click-two.png':'./static/img/left-trange.png'" alt="">
                    <div class="inline-block">{{two.name}}</div>
                  </div>
                </div>
                <div class="left-list-three" v-if="three_menu==two.name">
                  <div class="left-list-three-list" :class="three_status==three.name? 'left-list-three-list-act':''" @click="three_list(three.name)" v-for="three in two.children">
                    <div class="inline-block"><span :class="three_status==three.name? 'left-list-three-dot-act':''" class="inline-block left-list-three-dot"></span></div>
                    <div class="inline-block left-list-three-div"  @click="menu_click(three.children!=''? 'yes':'no',three.labelId)">
                      {{three.name}}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="main-right inline-block box-sizing">
      <BreadNav msg="个税辅导"></BreadNav>
      <div class="main-right-body">
        <div class="main-right-body-title">
          <div class="inline-block" :class="right_tab_status==1? 'main-right-body-title-act':''" @click="right_tab(1)">政策原文</div>
          <div class="inline-block" :class="right_tab_status==2? 'main-right-body-title-act':''" @click="right_tab(2)">要点解读</div>
          <div class="inline-block" :class="right_tab_status==3? 'main-right-body-title-act':''" @click="right_tab(3)">示范案例</div>
          <div class="inline-block" :class="right_tab_status==4? 'main-right-body-title-act':''" @click="right_tab(4)">视频</div>
        </div>
        <div class="main-right-msg box-sizing">
          <div v-if="right_tab_status==1">
            <div v-html="lesson.content||''">{{}}</div>
          </div>
          <div v-if="right_tab_status==2">
            <div v-html="lesson.knowledge||''">{{}}</div>
          </div>
          <div v-if="right_tab_status==3">
            <div v-html="lesson.cases||''">{{}}</div>
          </div>
          <div v-if="right_tab_status==4" class="box-sizing">
            <div class="inline-block tex-video-list" v-for="i in lesson.videos"  @click="$router.push({name:'video',query:{vid:i.ccId}})">
              <img :src="'http://'+i.coverimgurl" alt="">
              <!--<img src="jsb-tax.oss-cn-beijing.aliyuncs.com/20190110/a05401df51df45969e1b62e3f769011f.png" alt="">-->
              <div>{{i.title}}</div>
            </div>
          </div>
        </div>
        <div class="main-right-footer">
          <div class="inline-block iknown" v-if="!if_know" @click="i_known()">我懂了</div>
          <div class="inline-block iknown-yes" v-if="if_know">我懂了 √</div>
          <div class="inline-block not-known orange" @click="not_known">我没懂，去向专家提问</div>
        </div>
      </div>
    </div>
    <div class="mask-layer" v-show="code_show">
      <div class="code">
        <img src="../../../static/img/code_img_close.png" class="close" @click="close">
        <img src="../../../static/img/code_img.png" class="code_img">
      </div>
    </div>
  </div>
</template>

<script>
  import BreadNav from '@/components/breadNav';
    export default {
        name: "tax-counseling-employees",
        components:{
        BreadNav
      },
        data(){
          return{
            //是否懂了
            if_know:false,
            //点击我没懂二维码显示
            code_show:false,
            //右边tab栏显示状态
            right_tab_status:1,
            //左边菜单栏模拟数据
            menu_list:[],
            // menu_list:[
            //   {name:"纳税人身份",img:"../../../static/img/tax-left1.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'},{name:'三级菜单2'}
            //         ]},
            //       {name:"二级菜单2",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]},
            //   {name:"所得项目",img:"../../../static/img/tax-left2.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]},
            //   {name:"扣除项目",img:"../../../static/img/tax-left3.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]},
            //   {name:"税收优惠",img:"../../../static/img/tax-left4.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]},
            //   {name:"税收抵免",img:"../../../static/img/tax-left5.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]},
            //   {name:"预扣预缴",img:"../../../static/img/tax-left6.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]},
            //   {name:"汇算清缴",img:"../../../static/img/tax-left7.png",children:[
            //       {name:"二级菜单",children:[
            //           {name:'三级菜单'}
            //         ]}
            //     ]}
            // ],
            //左边二级菜单显示状态
            two_menu:"",
            //左边三级级菜单显示状态
            three_menu:"",
            //三级菜单内容
            three_status:'',
            lesson:{
              content:'',
              knowledge:'',
              cases:'',
              videos:''
            },
            labelId:'',//标签id
          }
        },
        mounted(){
          var that=this;
          this.ajax_nodata(this.http_url.url+"/biz/label/tree",function(data){
            console.log(data);
            that.menu_list=data.list;
          });
          this.two_menu=this.$route.query.one||"";
          this.three_menu=this.$route.query.two||"";
          this.three_status=this.$route.query.three||"";
          if(this.$route.query.labelId!=""){
            this.labelId=this.$route.query.labelId;
            this.ajax_nodata_get(this.http_url.url+'/biz/lesson/info/'+this.labelId,function(data){
              console.log(data);
              if(data.msg=='success'){
                that.lesson.content=data.lesson.content||"";
                that.lesson.knowledge=data.lesson.knowledge||"";
                that.lesson.cases=data.lesson.cases||"";
              }
            })
          }
        },
        methods:{
          //我懂了
          i_known:function(){
            var that=this;
            if(this.labelId!=""){
              this.ajax_nodata_get(this.http_url.url+"/biz/lesson/info/clear/"+this.labelId,function(data){
                console.log(data);
                if(data.code==0){
                  that.if_know=true;
                }
              })
            }
          },
          //左边菜单点击
          menu_click:function(status,id){
            var that=this;
            if(status=="no"){
              that.if_know=false;
              that.lesson.content="";
              that.lesson.knowledge="";
              that.lesson.cases="";
              this.labelId=id;
              this.ajax_nodata_get(this.http_url.url+'/biz/lesson/info/'+id,function(data){
                  // console.log(data);
                  if(data.msg=='success'){
                    that.lesson.content=data.lesson.content||"";
                    that.lesson.knowledge=data.lesson.knowledge||"";
                    that.lesson.cases=data.lesson.cases||"";
                    console.log(data.lesson.ifClear);
                   if(data.lesson.ifClear==1){
                     that.if_know=false;
                   }else if(data.lesson.ifClear==0){
                     that.if_know=true;
                   }
                  }
              })
            }
          },
          //点击我没懂
          not_known:function () {
            this.code_show=true
          },
          //
          close:function(){
            this.code_show=false;
          },
          //右边tab切换
          right_tab:function(val){
            var that=this;
            this.right_tab_status=val;
            if(val==4){
              this.ajax_nodata_get(this.http_url.url+"/biz/lesson/info/video/"+this.labelId,function(data){
                if(data.code==0){
                  console.log(data);
                  that.lesson.videos=data.videos;
                }
              })
            }
          },
          //一级菜单点击
          list_one:function(val){
            if(this.two_menu==val){
              this.two_menu="";
              this.three_menu="";
              this.three_status="";
            }else{
              this.two_menu=val;
              this.three_menu="";
              this.three_status="";
            }
          },
          //二级菜单点击
          list_two:function(val){
            if(this.three_menu==val){
              this.three_menu="";
              this.three_status="";
            }else{
              this.three_menu=val;
              this.three_status="";
            }
          },
          //三级菜单点击
          three_list:function(val){
            this.three_status=val;
          }
        }
    }
</script>

<style scoped>
  .icon-svg{
    position: absolute;
    top:15%;
    left:15%;
    width:70%;
    height:70%;
  }
  .out{
    display: none;
  }
  .tex-video-list{
    width:30%;
    margin-right:3%;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color:#333;
    line-height:1.31rem;
  }
  .tex-video-list>img{
    width:100%;
    height:8.125rem;
    margin-bottom: 1rem;
  }
  .code{
    position: absolute;
    width:300px;
    height:361px ;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
  .code_img{
    width: 100%;
  }
  .close {
    width: 13px;
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 2;
  }
</style>
