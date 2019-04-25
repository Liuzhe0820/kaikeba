import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false
//修改vue实例$bus也是vue   负责派发事件
Vue.prototype.$bus = new Vue();
new Vue({
  render: h => h(App),
}).$mount('#app')
