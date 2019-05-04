<template>
  <div class="person">
      <!-- breadcrumb area start -->
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-area-content">
              <!-- <h1>Celebrities Page</h1> -->
            </div>
          </div>
        </div>
      </div>
    </section><!-- breadcrumb area end -->
    <!-- transformers area start -->
    <section class="transformers-area">
      <div class="container">
        <div class="transformers-box">
          <div class="row flexbox-center">
            <div class="col-lg-5 text-lg-left text-center">
              <div class="transformers-content">
                <img v-bind:src="baseUrlProfile + title.profile_path" alt="about" />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="transformers-content mtr-30">
                <h2>{{ title.name }}</h2>
                <!-- <a href="#" class="theme-btn">Biography</a>
                <a href="#">Filmography</a> -->
                <ul>
                  <!-- <li>
                    <div class="transformers-left">
                      Height:
                    </div>
                    <div class="transformers-right">
                      5.7”
                    </div>
                  </li>
                  <li>
                    <div class="transformers-left">
                      Weight:
                    </div>
                    <div class="transformers-right">
                      1136LB
                    </div>
                  </li>
                  <li>
                    <div class="transformers-left">
                      Eye Color:
                    </div>
                    <div class="transformers-right">
                      Black
                    </div>
                  </li>
                  <li>
                    <div class="transformers-left">
                      Hair Color: 
                    </div>
                    <div class="transformers-right">
                      Black
                    </div>
                  </li> -->
                  <li>
                    <div class="transformers-left">
                      Birthday:
                    </div>
                    <div class="transformers-right">
                      {{ title.birthday }}
                    </div>
                  </li>
                  <li>
                    <div class="transformers-left">
                      Place Of Birth:
                    </div>
                    <div class="transformers-right">
                      {{ title.place_of_birth }}
                    </div>
                  </li>
                  <li>
                    <div class="transformers-left">
                      Known For:
                    </div>
                    <div class="transformers-right">
                      {{ title.known_for_department }}
                    </div>
                  </li>
                  <!-- <li>
                    <div class="transformers-left">
                      Follow:
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
        </div>
      </div>
    </section><!-- transformers area end -->
    <!-- details area start -->
    <section class="details-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <div class="details-content">
              <div class="details-overview">
                <h2>Biography</h2>
                <p>{{ title.biography }}</p>
              </div>
              <div class="container">
                <div class="row"> 
                  <div class="portfolio-sidebar">
                    <div class="col-lg-10 text-center text-lg-left">
                      <div v-for="cast in title.combined_credits.cast">
                        <div v-if="cast.title">
                          <p><img v-bind:src="baseUrlPoster + cast.poster_path">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link v-bind:to="'/titles/' + cast.id + '?media_type=' + cast.media_type">{{ cast.title }}</router-link> &nbsp;&nbsp; : &nbsp;&nbsp; {{ cast.character }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="details-reply">
                <h2>Leave a Reply</h2>
                <form action="#">
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="select-container">
                        <input type="text" placeholder="Name"/>
                        <i class="icofont icofont-ui-user"></i>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="select-container">
                        <input type="text" placeholder="Email"/>
                        <i class="icofont icofont-envelope"></i>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="select-container">
                        <input type="text" placeholder="Phone"/>
                        <i class="icofont icofont-phone"></i>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="textarea-container">
                        <textarea placeholder="Type Here Message"></textarea>
                        <button><i class="icofont icofont-send-mail"></i></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="details-comment">
                <a class="theme-btn theme-btn2" href="#">Post Comment</a>
                <p>You may use these HTML tags and attributes: You may use these HTML tags and attributes: You may use these HTML tags and attributes: </p>
              </div> -->
              <!-- <div class="details-thumb">
                <div class="details-thumb-prev">
                  <div class="thumb-icon">
                    <i class="icofont icofont-simple-left"></i>
                  </div>
                  <div class="thumb-text">
                    <h4>Previous Post</h4>
                    <p>Standard Post With Gallery</p>
                  </div>
                </div>
                <div class="details-thumb-next">
                  <div class="thumb-text">
                    <h4>Next Post</h4>
                    <p>Standard Post With Preview Image</p>
                  </div>
                  <div class="thumb-icon">
                    <i class="icofont icofont-simple-right"></i>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <!-- <div class="col-lg-3 text-center text-lg-left">
              <div class="portfolio-sidebar">
                <img src="assets/img/sidebar/sidebar1.png" alt="sidebar" />
                <img src="assets/img/sidebar/sidebar2.png" alt="sidebar" />
                <img src="assets/img/sidebar/sidebar4.png" alt="sidebar" />
              </div>
          </div> -->
        </div>
      </div>
    </section>
    <!-- details area end -->
  </div>
</template>


<style>
  

</style>


<script>
import axios from "axios";

export default {
  data: function() {
    return {
      title: { credits: {},
      },
      newListId: "",
      newTitleId: "",
      newMediaType: "",
      baseUrlPoster: "https://image.tmdb.org/t/p/w154",
      baseUrlProfile: "https://image.tmdb.org/t/p/h632"
    };
    // body...
  },
  

  created: function() {

    axios.get('/api/titles/' + this.$route.params.id + '/?' + 'media_type=' + this.$route.query.media_type).then(response => { 
      this.title = response.data;
      console.log(response.data);
    });

  
    console.log(this.$route.params.id);
    console.log(this.$route.query.media_type);
  },

  methods: {
    addTitle: function() {
      console.log("test");
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
    



