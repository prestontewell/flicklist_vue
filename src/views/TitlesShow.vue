<template>
  <div class="title">
    <h1>Title</h1>
    <form v-on:submit.prevent="addTitle()">
      <p>List ID: <input type="text" v-model="newListId"></p>
      <p>Title ID: <input type="text" v-model="newTitleId"></p>
      <p>Media Type: <input type="text" v-model="newMediaType"></p>
      <input type="submit" value="Add To List">
    </form>
    <h2>{{ title.title }}</h2>
    <!-- <h4>Runtime:{{ title.runtime }}</h4> -->
    <h3>Summary: {{ title.overview }}</h3>
    <h3>Cast:</h3>
    <div v-for="cast in title.credits.cast">
      <p>{{ cast.name }} : {{ cast.character }}</p>
    </div>
    <!-- <button v-on:click="addTitle(title)">Add To List</button> -->
    <!-- <p>{{ title.credits.cast }}</p> -->
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
      newMediaType: ""
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
    



