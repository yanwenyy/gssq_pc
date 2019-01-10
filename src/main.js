// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Public from '../static/js/puplic'
import 'font-awesome/css/font-awesome.min.css'
import './icons/index.js'
import paging from "../static/js/paging"
import ajaxfile from "../static/js/ajaxfile"

Vue.config.productionTip = false
Vue.use(Public)
Vue.use(paging)
Vue.use(ajaxfile)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
