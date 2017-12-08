import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import VueRouter from 'vue-router'
import router from './router'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.use(VueRouter)

import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.use(BootstrapVue);import App from './App.vue'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
