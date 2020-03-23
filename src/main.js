import Vue from 'vue'
import App from './App.vue'
import store from './store'
import simplestore from './simplestore';

Vue.config.productionTip = false

new Vue({
  store,
  simplestore,
  render: h => h(App)
}).$mount('#app')
