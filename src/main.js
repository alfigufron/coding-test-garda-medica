import Vue from "vue";

import "remixicon/fonts/remixicon.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./registerServiceWorker";
import "./assets/sass/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
