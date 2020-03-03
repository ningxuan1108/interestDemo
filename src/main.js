import Vue from 'vue'
import App from './App'
import store from './store/store' 
var Fly=require("flyio/dist/npm/wx") 
var fly=new Fly
 //添加全局配置、拦截器等
Vue.prototype.$http=fly //将fly实例挂在vue原型上

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue(App)
app.$mount()
