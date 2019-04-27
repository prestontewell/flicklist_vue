<template>
  <div class="titles">
    <h1>All Titles</h1>
    <div v-for="title in titles.results">
      <!-- <h2>{{ title.title }}</h2> -->
      <h2><router-link v-bind:to="'/titles/' + title.id + '/?media_type=' + title.media_type">{{ title.title || title.original_name}} </router-link><img v-bind:src="baseUrl + title.poster_path"></h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      titles: [],
      baseUrl: "https://image.tmdb.org/t/p/w185"
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