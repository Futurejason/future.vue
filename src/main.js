import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//重置css样式
import './assets/css/reset.css'
//fastclick,解决移动端300ms延迟
import FastClick from 'fastclick'
FastClick.attach(document.body);
//引入字体图标
import './assets/font/iconfont.css'
//引入适配font.js
import './assets/js/font.js'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//引入css动画
import animated from 'animate.css' // npm install animate.css --save安装，在引入
Vue.use(animated)
//引入axios请求接口
import axios from 'axios'
Vue.prototype.axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
