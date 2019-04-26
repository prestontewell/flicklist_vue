<template>
  <div class="home">

    <h1>Now Showing {{  }}</h1>
    <div v-for="list in lists">
      <h2><router-link v-bind:to="'/lists/' + list.id">{{ list.name }}</router-link></h2>
    </div>
  <form v-on:submit.prevent="createList()">
    <p>New FlickList: <input type="text" v-model="newListName"></p>
    <input type="submit" value="Create List">       
  </form>
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
    console.log(this);
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