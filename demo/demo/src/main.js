import Vue from 'vue'
import ElementUI from 'element-ui';
import '../static/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import axios from 'axios'
import Qs from 'qs'

Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

import App from './App.vue'
Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
