<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <h1>Lists: {{ Lists }}</h1>
    <div v-for="list in lists">
      <h2>{{ list.name }}</h2>
      
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