<template>
  <div id="app">
    <h1>App</h1>
    <br/>
    <h2>{{count}}</h2>
    <br/>
    <RunningNumber :number="count"></RunningNumber>
    <br/>
    <button class="btn btn-info m-1" @click="count +=100">+</button>
    <button class="btn btn-primary m-1" @click="count -=100">-</button>
  </div>
</template>

<script>
import RunningNumber from "./RunningNumber.vue";
export default {
  components: {
    RunningNumber
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>

<style scoped>
#app {
  padding: 50px;
}

</style>
