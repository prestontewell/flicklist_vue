<template>

  <div class="title">
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
  <!-- <div id="preloader"></div> -->
    <section class="transformers-area">
        <div class="container">
          <div class="transformers-box">
            <div class="row flexbox-center">
              <div class="col-lg-5 text-lg-left text-center">
                <div class="transformers-content">
                  <img v-bind:src="baseUrlPoster + title.poster_path">
                </div>
              </div>
              <div class="col-lg-7">
                <div class="transformers-content">
                  <h2>{{ title.title }}</h2>
                  <p><span v-for="genre in title.genres">
                    {{ genre.name }} |
                  </span></p>
                  <ul>
                    <li>
                      <div class="transformers-left">
                        Movie:
                      </div>
                      <div class="transformers-right">
                        {{ title.tagline }}
                      </div>
                    </li>
                    <li>
                      <div class="transformers-left">
                        Writer:
                      </div>
                      <div class="transformers-right">
                        {{ title.credits.crew[1].name }}
                      </div>
                    </li>
                    <li>
                      <div class="transformers-left">
                        Director:
                      </div>
                      <div class="transformers-right">
                        {{ title.credits.crew[0].name }}
                      </div>
                    </li>
                    <li>
                      <div class="transformers-left">
                        Time: 
                      </div>
                      <div class="transformers-right">
                        {{ title.runtime }}
                      </div>
                    </li>
                    <li>
                      <div class="transformers-left">
                        Release:
                      </div>
                      <div class="transformers-right">
                        {{ title.release_date }}
                      </div>
                    </li>
                    <!-- <li>
                      <div class="transformers-left">
                        Language:
                      </div>
                      <div class="transformers-right">
                        English, Russian
                      </div>
                    </li> -->
                    <!-- <li>
                      <div class="transformers-left">
                        Cinema:
                      </div>
                      <div class="transformers-right">
                        HB Movies  |  HW Town <a href="#" class="theme-btn">Movies House</a>Grand Seats  |  HB Max
                        <div class="transformers-bottom">
                          <p>May 19, 2018 <span>15h47</span></p>
                          <p>May 19, 2018 <span>15h47</span></p>
                          <p>May 19, 2018 <span>15h47</span></p>
                        </div>
                        
                      </div>
                    </li> -->
                    <li>
                      <div class="transformers-left">
                        Share:
                      </div>
                      <div class="transformers-right">
                        <a href="#"><i class="icofont icofont-social-facebook"></i></a>
                        <a href="#"><i class="icofont icofont-social-twitter"></i></a>
                        <a href="#"><i class="icofont icofont-social-google-plus"></i></a>
                        <a href="#"><i class="icofont icofont-youtube-play"></i></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" class="theme-btn"><i class="icofont icofont-ticket"></i> Add To List </a>
          </div>
        </div>
    </section>
    <section class="details-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="details-content">
              <div class="details-overview">
                <h2>Overview</h2>
                <p>{{ title.overview }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-10 text-center text-lg-left">
            <div class="portfolio-sidebar">
              <div v-for="cast in title.credits.cast">
                <p><img v-bind:src="baseUrlProfile + cast.profile_path">
                  <router-link v-bind:to="'/person/' + cast.id + '/?media_type=person'">     {{ cast.name }}</router-link> : {{ cast.character }}</p>
              </div>
            <!-- <img src="assets/img/sidebar/sidebar1.png" alt="sidebar" />
            <img src="assets/img/sidebar/sidebar2.png" alt="sidebar" />
            <img src="assets/img/sidebar/sidebar4.png" alt="sidebar" /> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<style>
  

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: { credits: { crew: [{name: ""}, {name: ""}], cast:[]},}, 
      genres: [],
      newListId: "",
      newTitleId: "",
      newMediaType: "",
      baseUrlPoster: "https://image.tmdb.org/t/p/w342",
      baseUrlProfile: "https://image.tmdb.org/t/p/w185"
    };
    // body...
  },
  

  created: function() {

    axios.get('/api/titles/' + this.$route.params.id + '/?' + 'media_type=' + this.$route.query.media_type).then(response => { 
      this.title = response.data;
      console.log(this.title.genres[0])
      console.log(response.data);
    });

  
    console.log(this.$route.params.id);
    console.log(this.$route.query.media_type);
  },

  methods: {
    addTitle: function() {
      var params = {
        list_id: this.newListId,
        title_id: this.newTitleId,
        media_type: this.newMediaType
      };
      axios.post('/api/list_titles', params).then(response => {
        console.log(response.data);
        this.$router.push('/lists/' + response.data.list_id);
      }); 
    }
  },

};
</script>
    



