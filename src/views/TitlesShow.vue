<template>

  <div class="title">
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-area-content h2">
              <h1>Coming Soon!</h1>
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
                  <h2>{{ title.title || title.name }}</h2>
                  <p><span v-for="genre in title.genres">
                    {{ genre.name }} |
                  </span></p>
                  <ul>
                    <li>
                      <div class="transformers-left">
                        Tagline:
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
                        Runtime: 
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
                        {{ title.release_date || title.first_air_date}}
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
                    <!-- <li>
                      <div class="transformers-left">
                        Share:
                      </div>
                      <div class="transformers-right">
                        <a href="#"><i class="icofont icofont-social-facebook"></i></a>
                        <a href="#"><i class="icofont icofont-social-twitter"></i></a>
                        <a href="#"><i class="icofont icofont-social-google-plus"></i></a>
                        <a href="#"><i class="icofont icofont-youtube-play"></i></a>
                      </div>
                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
              <div class="menu-area"> 
                <div class="responsive-menu">
                  <div class="mainmenu">
                    <ul id="primary-menu"> 
                      <a class="active">Lists</a>
                        <li><i class="icofont  icofont-simple-down"></i>
                          <ul>
                            <div v-for="list in lists">
                              <li><p v-on:click="addTitle(list)">{{ list.name }}</p></li>
                            </div> 
                          </ul>
                        </li>
                    </ul> 
                  </div>
                </div>    
              </div> 
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
                  <router-link v-bind:to="'/person/' + cast.id + '/?media_type=person'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ cast.name }}</router-link> &nbsp;&nbsp; : &nbsp;&nbsp; {{ cast.character }}</p>
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
      lists: [],
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
      console.log(response.data);
    });
    axios.get('/api/lists').then(response => {
      this.lists = response.data;
      console.log(this.lists);
    });
  },

  methods: {
    addTitle: function(list) {
      var params = {
        list_id: list.id,
        title_id: this.title.id,
        media_type: this.$route.query.media_type
      };
      axios.post('/api/list_titles', params).then(response => {
        console.log(response.data);
        this.$router.push('/lists/' + response.data.list_id);
      }); 
    }
  },

};
</script>
    



