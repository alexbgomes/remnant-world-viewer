import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import './quasar'

Vue.config.productionTip = false
Vue.use(VueMeta)

new Vue({
  render: h => h(App),
}).$mount('#app')
