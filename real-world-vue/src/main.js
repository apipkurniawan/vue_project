import Vue from "vue";
import App from "./App.vue";
import router from "./router"; // import our router from folder router
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router, // use the router or same as writing (router:router) 
  store,
  render: h => h(App)
}).$mount("#app");