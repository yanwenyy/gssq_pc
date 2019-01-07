<template>
  <div class="container">
    <div class="main-left inline-block box-sizing">
      <div class="main-left-title">
        <img src="../../../static/img/tax-home-left.png" alt="">
        <span @click="$router.push({name:'home'})">首页</span>
      </div>
      <ul class="left-list-ul">
        <li v-for="item in menu_list">
          <div class="left-list-one" :class="two_menu==item.name? 'left-list-one-act':''"  @click="list_one(item.name)">
            <!--<img :src="item.img" alt="">-->
            <span class="inline-block left-list-one-icon" :class="two_menu==item.name? 'left-list-one-icon-act':''"><span class="fa fa-life-ring"></span></span>
            <div class="inline-block">{{item.name}}</div>
            <img :src="two_menu==item.name? '../../../static/img/left-trange-click.png':'../../../static/img/left-trange.png'" alt="">
          </div>
          <div v-if="two_menu==item.name" class="left-list-two">
            <ul>
              <li v-for="two in item.children">
                <div class="left-list-two-div" :class="three_menu==two.name? 'left-list-two-div-act':''" @click="list_two(two.name)">
                  <img :src="three_menu==two.name? '../../../static/img/left-trange-click-two.png':'../../../static/img/left-trange.png'" alt="">
                  <div class="inline-block">{{two.name}}</div>
                </div>
                <div class="left-list-three" v-if="three_menu==two.name">
                  <div class="left-list-three-list" :class="three_status==three.name? 'left-list-three-list-act':''" @click="three_list(three.name)" v-for="three in two.children">
                    <div class="inline-block"><span :class="three_status==three.name? 'left-list-three-dot-act':''" class="inline-block left-list-three-dot"></span></div>
                    <div class="inline-block left-list-three-div">
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
      <div class="bread-nav">
        <!--<span class="fa fa-address-book"></span>-->
        <img src="../../../static/img/tax-home-right.png" alt="">
        首页>六项专项扣除
      </div>
      <div class="main-right-body">
        <div class="main-right-body-title">
          <div class="inline-block" :class="right_tab_status==1? 'main-right-body-title-act':''" @click="right_tab(1)">政策原文</div>
          <div class="inline-block" :class="right_tab_status==2? 'main-right-body-title-act':''" @click="right_tab(2)">要点解读</div>
          <div class="inline-block" :class="right_tab_status==3? 'main-right-body-title-act':''" @click="right_tab(3)">示范案例</div>
          <div class="inline-block" :class="right_tab_status==4? 'main-right-body-title-act':''" @click="right_tab(4)">视频</div>
        </div>
        <div class="main-right-msg box-sizing">
          <div v-for="i in 40">街坊邻居是深V而二手深V对的深V是发达</div>
        </div>
        <div class="main-right-footer">
          <div class="inline-block iknown">我懂了</div>
          <div class="inline-block not-known orange">我没懂，去向专家提问</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "tax-counseling-employees",
        data(){
          return{
            //右边tab栏显示状态
            right_tab_status:1,
            //左边菜单栏模拟数据
            menu_list:[
              {name:"纳税人身份",img:"../../../static/img/tax-left1.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'},{name:'三级菜单2'}
                    ]},
                  {name:"二级菜单2",children:[
                      {name:'三级菜单'}
                    ]}
                ]},
              {name:"所得项目",img:"../../../static/img/tax-left2.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'}
                    ]}
                ]},
              {name:"扣除项目",img:"../../../static/img/tax-left3.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'}
                    ]}
                ]},
              {name:"税收优惠",img:"../../../static/img/tax-left4.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'}
                    ]}
                ]},
              {name:"税收抵免",img:"../../../static/img/tax-left5.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'}
                    ]}
                ]},
              {name:"预扣预缴",img:"../../../static/img/tax-left6.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'}
                    ]}
                ]},
              {name:"汇算清缴",img:"../../../static/img/tax-left7.png",children:[
                  {name:"二级菜单",children:[
                      {name:'三级菜单'}
                    ]}
                ]}
            ],
            //左边二级菜单显示状态
            two_menu:"",
            //左边三级级菜单显示状态
            three_menu:"",
            //三级菜单内容
            three_status:''
          }
        },
        methods:{
          //右边tab切换
          right_tab:function(val){
            this.right_tab_status=val;
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
            console.log(this.three_menu)
          },
          //三级菜单点击
          three_list:function(val){
            this.three_status=val;
          }
        }
    }
</script>

<style scoped>

</style>
