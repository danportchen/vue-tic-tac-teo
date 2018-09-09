import Vue from "vue";
// import SearchLesson from "./SearchLesson.vue";
import FBlogin from "./FBlogin.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(FBlogin)
}).$mount("#app");
