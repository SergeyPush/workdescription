import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMaterial from "vue-material";
import VueToast from "vue-toast-notification";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "vue-toast-notification/dist/theme-default.css";

Vue.use(VueMaterial);
Vue.use(VueToast);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
