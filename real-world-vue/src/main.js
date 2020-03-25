import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // import our router from folder router
import store from "./store";

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// for registration all component with lodash
// Automatic Global Registration of Base Components
const requireComponent = require.context('./components', false, /Base[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})


Vue.config.productionTip = false;

new Vue({
  router, // use the router or same as writing (router:router) 
  store,
  render: h => h(App)
}).$mount("#app");