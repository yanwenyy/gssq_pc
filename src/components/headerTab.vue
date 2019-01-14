<template>
  <div class="header-tab box-sizing">
    <div class="container">
      <div class="header-tab-list inline-block">
        <router-link :to="{name:'home'}">
          <div class="inline-block" :class="msg=='首页'? 'header-tab-act':''">
            首&nbsp;&nbsp;&nbsp;&nbsp;页
          </div>
        </router-link>
        <router-link :to="{name:'taxCounselingEmployees'}">
          <div class="inline-block" :class="msg=='个税辅导'? 'header-tab-act':''">
            个税辅导
          </div>
        </router-link>
        <router-link :to="{name:'taxQuestionsAnswers'}">
          <div class="inline-block" :class="msg=='个税咨询'? 'header-tab-act':''">
            个税咨询
          </div>
        </router-link>
        <router-link :to="{name:'taxPlan'}">
          <div class="inline-block gsch" :class="msg=='个税筹划'? 'header-tab-act':''">
            个税筹划
          </div>
        </router-link>
      </div>
      <div class="inline-block header-search-group box-sizing">
        <input placeholder="请搜索问题" v-model="search" type="text" class="box-sizing">
        <img class="search-img" src="../../static/img/header-search.png" @click="$router.push({name:'taxQuestionsAnswers',query:{msg:search}})">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "header-tab",
        props: {
          msg: String,
          required: true
        },
        data(){
            return{
              search:''
            }
        },
        methods:{
          //tab切换
          tab_click:function(val){
            this.tab_class=val;
          },
        }
    }
</script>

<style scoped>
  .search-img:hover{
    cursor: pointer;
  }
  .gsch:hover{
    cursor: pointer;
  }
</style>
