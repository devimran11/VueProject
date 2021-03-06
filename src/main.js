import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

new Vue({
  render: h => h(Test),
}).$mount('#test')
