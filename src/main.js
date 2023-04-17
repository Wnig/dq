// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import $ from 'jquery'

import VueRouter from 'vue-router'

import Home from './components/Home'
import Education from './components/Education'
import Join from './components/Join'


Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
	routes: [
		{path: "/", component: Home,},
		{path: "/Education", component: Education,},
		{path: "/Join", component: Join,},
	],
	// mode: "history"
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
