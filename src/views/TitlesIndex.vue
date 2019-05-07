<template>

  <div class="titles">
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-1">
            <div class="breadcrumb-area-content">
              <!-- <h1>Movie Detalied Page</h1> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transformers-area">
      <div class="container">
        <div v-for="title in titles.results">  
          <div class="transformers-box">
            <div class="row flexbox-center">
              <div class="col-lg-5 text-lg-left text-center">
                <div v-if="title.media_type === 'person'">
                  <div class="transformers-content">
                    <img v-bind:src="baseUrlProfile + title.profile_path">
                  </div>
                  <p>{{ title.name }}</p>
                </div>
                <div v-else>
                  <div class="row flexbox-center">
                    <div class="transformers-content">
                      <img v-bind:src="baseUrlPoster + title.poster_path">
                    </div>
                  <div class="col-lg-7">
                    <div class="transformers-content">
                      <h2><router-link v-bind:to="'/titles/' + title.id + '/?media_type=' + title.media_type">{{ title.title || title.original_name }}</router-link></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      console.log(this.titles);
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