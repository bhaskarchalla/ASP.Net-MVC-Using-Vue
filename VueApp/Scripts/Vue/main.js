import Vue from 'vue'
import App from './App.vue'
import Output from './Output.vue'

Vue.component('app-Output',Output);

new Vue({
  el: '#app',
  render: h => h(App)
})
