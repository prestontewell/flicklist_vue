<template>
  <div class="home">
    <!-- hero area start -->
    <section class="hero-area" id="home">
      <div class="container">
        <div class="hero-area-slider">
          <div class="row hero-area-slide">
            <div class="col-lg-6 col-md-5">
              <div class="hero-area-content">
                <img v-bind:src="baseUrlPoster + trending_titles.results[i].poster_path">
              </div>
            </div>
            <div class="col-lg-6 col-md-7">
              <div v-if="completed" class="hero-area-content pr-50">
                <div v-if="trending_titles.results[i].original_title">
                  <h2><router-link v-bind:to="'/titles/' + trending_titles.results[i].id + '?media_type=movie'">{{ trending_titles.results[i].original_title || trending_titles.results[i].original_name }}</router-link></h2>
                </div>
                <div v-else>
                  <h2><router-link v-bind:to="'/titles/' + trending_titles.results[i].id + '?media_type=tv'">{{ trending_titles.results[i].original_title || trending_titles.results[i].original_name }}</router-link></h2>
                </div>
                  
                <!-- <div class="review">
                  <div class="author-review">
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                    <i class="icofont icofont-star"></i>
                  </div>
                  <h4>180k voters</h4>
                </div> -->
                <p>{{ trending_titles.results[i].overview }}</p>
                <!-- <h3>Cast:</h3>
                <div class="slide-cast">
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast1.png" alt="about" />
                  </div>
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast2.png" alt="about" />
                  </div>
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast3.png" alt="about" />
                  </div>
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast4.png" alt="about" />
                  </div>
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast5.png" alt="about" />
                  </div>
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast6.png" alt="about" />
                  </div>
                  <div class="single-slide-cast">
                    <img src="assets/img/cast/cast7.png" alt="about" />
                  </div>
                  <div class="single-slide-cast text-center">
                    5+
                  </div>
                </div> -->
                <div class="slide-trailor">
                  <h3>Watch Trailer</h3>
                  <a class="theme-btn theme-btn2" href="#"><i class="icofont icofont-play"></i> Stream It!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div  class="hero-area-thumb">
          <div v-on:click="changeIndex(-1)" class="thumb-prev">
            <div class="row hero-area-slide">
              <div class="col-lg-6">
                <div class="hero-area-content">
                  <img img src="assets/img/slide2.png" alt="about" >
                </div>
              </div>
              <div class="col-lg-6">
                <div v-if="completed" class="hero-area-content pr-50">
                  <h2>{{ trending_titles.results[i].original_title || trending_titles.results[i].original_name }}</h2>
                  <div class="review">
                    <div class="author-review">
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                    </div>
                    <h4>180k voters</h4>
                  </div>
                  <p>{{ trending_titles.results[i].overview }}</p>
                  <h3>Cast:</h3>
                  <!-- <div class="slide-cast">
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast1.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast2.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast3.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast4.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast5.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast6.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast7.png" alt="about" />
                    </div>
                    <div class="single-slide-cast text-center">
                      5+
                    </div> -->
                  <!-- </div> -->
                  <div class="slide-trailor">
                    <h3>Watch Trailer</h3>
                    <a class="theme-btn theme-btn2" href="#"><i class="icofont icofont-play"></i> Stream It!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-on:click="changeIndex(1)" class="thumb-next">
            <div class="row hero-area-slide">
              <div class="col-lg-6">
                <div class="hero-area-content">
                  <img v-bind:src="baseUrlPoster + trending_titles.results[i+1].poster_path">
                </div>
              </div>
              <div class="col-lg-6">
                <div v-if="completed" class="hero-area-content pr-50">
                  <h2>{{ trending_titles.results[i+1].original_title || trending_titles.results[i].original_name }}</h2>
                  <div class="review">
                    <div class="author-review">
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                      <i class="icofont icofont-star"></i>
                    </div>
                    <h4>180k voters</h4>
                  </div>
                  <p>She is a devil princess from the demon world. She grew up sheltered by her parents and doesn't really know how to be evil or any of the common actions,   She is unable to cry due to Keita's accidental first wish, despite needed for him to wish...</p>
                  <h3>Cast:</h3>
                  <div class="slide-cast">
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast1.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast2.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast3.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast4.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast5.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast6.png" alt="about" />
                    </div>
                    <div class="single-slide-cast">
                      <img src="assets/img/cast/cast7.png" alt="about" />
                    </div>
                    <div class="single-slide-cast text-center">
                      5+
                    </div>
                  </div>
                  <div class="slide-trailor">
                    <h3>Watch Trailer</h3>
                    <a class="theme-btn theme-btn2" href="#"><i class="icofont icofont-play"></i> Tickets</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- hero area end -->
    <section class="portfolio-area pt-60">
      
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
      trending_titles: [],
      lists: [],
      newListName: "",
      baseUrlBackdrop: "http://image.tmdb.org/t/p/original",
      baseUrlPoster: "https://image.tmdb.org/t/p/w500",
      completed: false,
      i: 0
    
    };
  },
  
  created: function() {
    // axios.get('api/lists').then(response => {
    //   this.lists = response.data;
    //   console.log(this.lists);
    // });
    axios.get('api/trending_titles').then(response => {
      this.trending_titles = response.data;
      this.completed = true;
      console.log(this.trending_titles);
      console.log(this.i);
    });
  },


  methods: {
    createList: function() {
      // console.log('this is the New List button');
      var params = {
        name: this.newListName
      };
      axios.post('/api/lists', params).then(response => {
        this.lists.push(response.data);
      });
    },

    changeIndex: function(n) {
      console.log(this.i);
      this.i += n;
      console.log(this.i);
    }
  }
};
  

</script>