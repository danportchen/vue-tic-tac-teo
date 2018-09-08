import Vue from "vue";
import SearchLesson from "./SearchLesson.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(SearchLesson)
}).$mount("#app");
