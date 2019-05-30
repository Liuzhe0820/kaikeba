import Vue from 'vue'
import App from './App.vue'
import { Button, Cell } from 'mint-ui'
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
new Vue({
  render: h => h(App),
}).$mount('#app')
