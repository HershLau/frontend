import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router/dist/vue-router.common.js'

Vue.use(VueRouter)

import Example from './components/Example.vue'

const router = new VueRouter({
  mode: 'history',
  base: 'vue-laravel-example/public',
  routes: [
    { path: '/', component: Example }
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')