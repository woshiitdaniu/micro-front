import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps,start } from 'qiankun'

Vue.config.productionTip = false
Vue.prototype.$store = store

//传给子应用2的方法 实现互动
const callMe = (data)=>{
  store.commit('SET_FROM_CHILDEN1_DATA',data)
}
registerMicroApps([{
  name:'childenVue1',
  entry:'//localhost:10000/',
  container:'#childenVue1',
  activeRule: '/childenVue1',
},{
  name:'childenVue2',
  entry:'//localhost:10001/',
  container:'#childenVue2',
  activeRule: '/childenVue2',
  props:{//测试传递给子应用的静态数据
    username:'小明',
    age:'11',
    callMe:callMe
  }
}])
start({
  prefetch:false
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#appparent')

