<template>

  <div class="lists">
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-1">
            <div class="breadcrumb-area-content">
              <h2><p>{{ list.name }}</p></h2>
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
                    {{ title.title }}
                    <div class="transformers-content mtr-30">
                      <ul>
                        <li>
                          <div class="tranformers-left">
                            <img v-bind:src="baseUrlPoster + title.body.poster_path">
                          </div>
                          <div class="transformers-right text-lg-left text-center">
                            <input type="checkbox" v-on:click="deleteTitle(title, list.id)"/>
                            <span>Seen It</span>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                  <div class="col-md-1">
                    <div class="transformers-content">
                      <h2><router-link v-bind:to="'/titles/' + title.body.id + title.media_type"> {{ title.body.original_title || title.body.original_name }}</router-link></h2>
                      <p></p>
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
      list: [],
      baseUrlPoster: "https://image.tmdb.org/t/p/w154"
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