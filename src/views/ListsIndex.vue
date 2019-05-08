<template>
  <div class="home">
    <section class="breadcrumb-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-area-content h2">
                <h1>Now Showing {{  }}</h1>
              </div>
            </div>
          </div>
        </div>
    </section>
    <section class="transformers-area">
        <div class="container">
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
    </section>
    <section class="transformers-area">
      <div class="transformers-box">
        <div class="row flexbox-center">
          <div class="col-lg-5 text-lg-left text-center">
            <div class="menu-area">
              <ul id="primary-menu">
                <li>
                  <form v-on:submit.prevent="createList()">
                    <p>New FlickList: <input type="text" v-model="newListName"></p>
                    <input type="submit" value="Create List">       
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>      
    </section>
  </div> 
</template>


<style></style>

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
    axios.get("api/lists").then(response => {
      this.lists = response.data;
      console.log(this.lists)
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
  },

};

</script>