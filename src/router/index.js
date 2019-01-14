import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'//主入口页面
import login from '@/components/login'//登录页
import home from '@/components/page/home'//首页
import taxQuestionsAnswers from '@/components/page/taxQuestionsAnswers'//个税问答(列表)
import taxQADetail from '@/components/page/taxQADetail'//个税问答(详情)
import taxCounselingEmployees from '@/components/page/taxCounselingEmployees'//员工个税辅导
import rapidMeasurement from '@/components/page/rapidMeasurement'//快速测
import taxDeclare from '@/components/page/taxDeclare'//我的个税扣除申报
import newCenter from '@/components/page/newCenter'//新闻中心
import newDetail from '@/components/page/newDetail'//新闻详情
import video from '@/components/page/video'//新闻详情
import taxPlan from '@/components/page/taxPlan'//个税筹划
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      redirect: { name: 'home' },
      meta: { title: '主入口整体布局' },
      children: [
        {path: '/home', component: home, name: 'home', meta: { title: '首页' } },
        {path: '/taxQuestionsAnswers', component: taxQuestionsAnswers, name: 'taxQuestionsAnswers', meta: { title: '个税问答' }},
        {path: '/taxQADetail', component: taxQADetail, name: 'taxQADetail', meta: { title: '个税问答' }},
        {path:'/taxCounselingEmployees',component: taxCounselingEmployees, name: 'taxCounselingEmployees', meta: { title: '员工个税辅导管理' }},
        {path:'/rapidMeasurement',component: rapidMeasurement, name: 'rapidMeasurement', meta: { title: '快速测' }},
        {path:'/taxDeclare',component: taxDeclare, name: 'taxDeclare', meta: { title: '我的个税扣除申报' }},
        {path:'/newCenter',component: newCenter, name: 'newCenter', meta: { title: '新闻中心' }},
        {path:'/newDetail',component: newDetail, name: 'newDetail', meta: { title: '新闻详情' }},
        {path:'/video',component: video, name: 'video', meta: { title: '视频播放' }},
        {path:'/taxPlan',component: taxPlan, name: 'taxPlan', meta: { title: '个税筹划' }}
        ],
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
