// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import sdk from './sdk';

Vue.config.productionTip = false

/* eslint-disable no-new */
if(sdk.isApp) {
  window.apiready = ()=> {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
}else {
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  })
}
