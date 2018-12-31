import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'//主入口页面
import login from '@/components/login'//登录页
import home from '@/components/page/home'//首页


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
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    }
  ]
})
