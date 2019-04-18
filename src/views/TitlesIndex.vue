<template>
  <div class="titles">
    <h1>All Titles</h1>
    <div v-for="title in titles.results">
      <h2>{{ title.title }}</h2>
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
      this.titles = response.data;
    });
  },
  methods: {}
};
</script>