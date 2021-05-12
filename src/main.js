import Vue from 'vue';
import axios from "axios";
import VueAxios from "vue-axios";
import App from './App.vue';
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/assets/css/reset.css";
import "@/assets/css/global.css";

library.add(faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
