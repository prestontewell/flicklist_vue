<template>
  <div class="titles">
    <h1>All Titles</h1>
    <div v-for="title in titles.results">
      <!-- <h2>{{ title.title }}</h2> -->
      <h2><router-link v-bind:to="'/titles/' + title.id + '/?media_type=' + title.media_type">{{ title.title || title.original_name}} </router-link></h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      titles: []
    };
  },
  created: function() {
    axios.get("/api/titles?search=" + this.$route.params.searchInput).then(response => { 
      console.log(response.data);
      this.titles = response.data;
    });
  },
  methods: {}
};
</script>