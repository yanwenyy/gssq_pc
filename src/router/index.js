import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'//主入口页面
import login from '@/components/login'//登录页
import home from '@/components/page/home'//首页
import taxQuestionsAnswers from '@/components/page/taxQuestionsAnswers'//个税问答(列表)
import taxQADetail from '@/components/page/taxQADetail'//个税问答(详情)

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
        { path: '/home', component: home, name: 'home', meta: { title: '首页' } },
        { path: '/taxQuestionsAnswers', component: taxQuestionsAnswers, name: 'taxQuestionsAnswers', meta: { title: '个税问答' }},
        {path: '/taxQADetail', component: taxQADetail, name: 'taxQADetail', meta: { title: '个税问答' }}
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
