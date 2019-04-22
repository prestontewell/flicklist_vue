<template>
  <div class="title">
    <h1>Title</h1>
    <h2>{{ title.title }}</h2>
    <h4>Runtime:{{title.runtime}}</h4>
    <h4>Summary: {{ title.overview }}</h4>
    <!-- <p>{{title.credits.cast}}</p> -->
  </div>
</template>


<style>
  

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: []
    };
    // body...
  },

  

  created: function() {

    axios.get("/api/titles/" + this.$route.params.id + '/?' + "media_type=" + this.$route.query.media_type).then(response => { 
      this.title = response.data;
    });

    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.query.media_type);
  },


};

</script>
