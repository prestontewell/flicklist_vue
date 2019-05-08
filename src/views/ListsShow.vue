<template>

  <div class="lists">
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-area-content h2">
              <h1><p>{{ list.name }}</p></h1>
              <!-- <h1>Movie Detalied Page</h1> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transformers-area">
      <div class="container">
        <div v-for="title in list.titles">  
          <div class="transformers-box">
            <div class="row flexbox-center">
              <div class="col-lg-5 text-lg-left text-center">
                <div class="row flexbox-center">
                  <div class="transformers-content">
                    <img v-bind:src="baseUrlPoster + title.body.poster_path">
                  </div>  
                  <div class="col-lg-7">
                    <div class="transformers-content">
                      <div class="hero-area-content pr-50">
                        <div class="container">
                          <div class="col-lg-12 text-lg-center text-center">
                            <p><h2><router-link v-bind:to="'/titles/' + title.body.id + ' ?media_type=' + title. media_type"> {{ title.body.original_title  || title.body.original_name }}</router-link></h2></p>  
                          </div>
                        </div>
                        <div class="container">
                          <div class="hero-area-content pr-50">
                            <div class="col-lg-12 text-lg-center text-center">
                              <p><h4><span class="check-box">Seen It</span><input type="checkbox"   class="check-box" v-on:click="deleteTitle(title, list.id)"/></h4></p>
                            </div>
                          </div>
                        </div>
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


<style>


  .check-box {
    padding: 10px;
    transform: scale(1.75); 
    
  }


</style>


<script>
import axios from "axios";
export default {
  data: function() {
    return {
      list: [],
      baseUrlPoster: "https://image.tmdb.org/t/p/w185"
    };
  },
  created: function() {
    axios.get("/api/lists/" + this.$route.params.id).then(response => {
      this.list = response.data;
      console.log(this.list.titles);
    });
  },
  methods: {
    deleteTitle: function(title, listId) {
      console.log(title, listId);
      var params = {
        list_id: listId,
        title_id: title.body.id,
      };
      console.log(this.list);
      axios.delete("/api/list_titles/", {params: params}).then(response => {
        var index = this.list.titles.indexOf(title);
        this.list.titles.splice(index, 1);
      });
        
        
      


      
    }

  },
  
};
</script>