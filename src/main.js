import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import vuetify from './plugins/vuetify'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import loadHighchartsMore from 'highcharts/highcharts-more';
import theme from './assets/theme.js'

Highcharts.theme = theme
Highcharts.setOptions(Highcharts.theme)
loadHighchartsMore(Highcharts)
Vue.use( HighchartsVue, { Highcharts })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
