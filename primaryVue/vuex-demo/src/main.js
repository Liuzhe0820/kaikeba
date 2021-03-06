import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false
router.beforeEach((to,fom,next)=>{
  if(store.state.userInfo||to.name==='login'){
    next()
  }else{
    next({
      path:'login'
    })
  }
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
