import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://capstoneprojectbackend-production.up.railway.app";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

// Vue.filter("removeNullProps", function (poster_path) {
//   // sorry for using lodash and ES2015 arrow functions :-P
//   return poster_path.reject(poster_path, (value) => value === null);
// });

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
