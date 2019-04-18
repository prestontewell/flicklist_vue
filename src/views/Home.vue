<template>
  <div class="home">

    <h1>Lists: {{  }}</h1>
    <div v-for="list in lists">
      <h2><router-link v-bind:to="'/lists/' + list.id">{{ list.name }}</router-link></h2>
      
    </div>
  </div>
</template>


<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      lists: []
    };
  },
  
  created: function() {
    axios.get("api/lists").then(response => {
      this.lists = response.data;
    });
  },



  methods: {}
};
  

</script>