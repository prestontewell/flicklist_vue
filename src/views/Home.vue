<template>
  <div class="home">
    <section class="breadcrumb-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-1">
            <div class="breadcrumb-area-content">
              <h1>Now Showing {{  }}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="transformers-area">
      <div class="container">
        <div>
          <div v-for="list in lists">
            <div class="transformers-box">
            <div class="row flexbox-center">
              <div class="col-lg-5 text-lg-left text-center">
                  <div class="row flexbox-center">
                    <div class="transformers-content">
                    </div>
                  <div class="col-md-10">
                    <div class="transformers-content">
                      <h2><p><router-link v-bind:to="'/lists/' + list.id">{{ list.name }}</router-link></p></h2>
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
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      lists: [],
      newListName: ""
    
    };
  },
  
  created: function() {
    axios.get('api/lists').then(response => {
      this.lists = response.data;
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
    }
  }
};
  

</script>