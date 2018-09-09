import Vue from "vue";
// import SearchLesson from "./SearchLesson.vue";
import infiniteScrollApp from "./infiniteScrollApp.vue";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(infiniteScrollApp)
}).$mount("#app");
