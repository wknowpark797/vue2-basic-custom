import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/global-components'
import './plugins/global-example'
import './plugins/inject-layout'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
