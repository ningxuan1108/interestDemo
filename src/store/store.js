// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loginStatus:0
  },
  mutations: {
    changeLogin(state,params){
      console.log('登录状态',params)
      state.loginStatus = params;
    }
 
  }
})

export default store
