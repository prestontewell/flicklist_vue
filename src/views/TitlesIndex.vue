<template>
  <div class="titles">
    <h1>All Titles</h1>
    <div v-for="title in titles.results">
      <!-- <h2>{{ title.title }}</h2> -->
      <h2>
        <div v-if="title.media_type === 'person'">
          <p><router-link v-bind:to="'/person/' + title.id + '/?media_type=person'">{{ title.name }}</router-link><img v-bind:src="baseUrlProfile + title.profile_path"></p>
        </div>
        <div v-else>
          <p><router-link v-bind:to="'/titles/' + title.id + '/?media_type=' + title.media_type">{{ title.title || title.original_name }}</router-link><img v-bind:src="baseUrlPoster + title.poster_path"></p>
        </div>
        <!-- <p><router-link v-bind:to="'/titles/' + title.id + '/?media_type=' + title.media_type">{{ title.title || title.original_name }}</router-link><img v-bind:src="baseUrlPoster + title.poster_path"></p> -->
          
      </h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      titles: [],
      baseUrlPoster: "https://image.tmdb.org/t/p/w154",
      baseUrlProfile: "https://image.tmdb.org/t/p/w185"
    };
  },

  computed: {
    searchInput: function() {
      return this.$route.params.searchInput;
    }
  },

  watch: {
    searchInput: function() {
      axios.get("/api/titles?search=" + this.$route.params.searchInput).then(response => {
        console.log(this.searchInput);
        this.titles = response.data;
      });
    }
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