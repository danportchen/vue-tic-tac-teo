<template>
  <div>
    <span>{{connected}}</span>
    <button @click="connect">Connect</button>
    <infiniteScroll :pictures="pictures" :next="getAlbum"></infiniteScroll>
  </div>
</template>


<script>
import infiniteScroll from "./infiniteScroll";
export default {
  components: {
    infiniteScroll
  },
  data() {
    return {
      connected: false,
      pictures: [],
      after: ""
    };
  },
  methods: {
    connect() {
      FB.login(this.statusGet);
    },
    statusGet(result) {
      if (result.status === "connected") {
        this.connected = true;
        this.getAlbum();
      }
    },
    getAlbum() {
        FB.api(
          "/136856586416330/photos", { fields: ["picture"], after: this.after },
          result => {
            this.pictures = this.pictures.concat(
              result.data.map(item => item.picture)
            );
            this.after = result.paging.cursors.after;
            console.log(result);
            // console.log(this.pictures);
          }
        );
    }
  },
  mounted() {
    FB.init({
      appId: 735549530128183,
      version: "v3.1"
    });
    FB.getLoginStatus(this.statusGet);
  }
};
</script>
