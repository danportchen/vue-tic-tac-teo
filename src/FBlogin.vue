<template>
  <div>
    <span>{{connected}}</span>
    <button  v-if="!connected" @click="connect">Connect</button>
    <div v-else>
      <h5>{{username}}</h5>
      <img :src="picture"/>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return {
      connected: false,
      username: "",
      picture: ""
    };
  },
  methods:{
    connect(){
      FB.login(this.statusGet);
    },
    statusGet(result){
      if(result.status === 'connected'){
        this.connected = true;
        FB.api('/me','GET',{ fields:['picture','name'] }, rs => {
          this.username = rs.name;
          this.picture = rs.picture.data.url;
          console.log(rs);
        });
      }
    }
  },
  mounted(){
    FB.init({
      appId: 735549530128183,
      version: "v3.1"
    });
    FB.getLoginStatus(this.statusGet);
  },
};
</script>