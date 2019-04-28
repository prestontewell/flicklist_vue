<template>
  <div class="person">
    <h1>Bio</h1>
    <!-- <form v-on:submit.prevent="addTitle()">
      <p>List ID: <input type="text" v-model="newListId"></p>
      <p>Title ID: <input type="text" v-model="newTitleId"></p>
      <p>Media Type: <input type="text" v-model="newMediaType"></p>
      <input type="submit" value="Add To List">
    </form> -->
    <h2>{{ title.name }}<img v-bind:src="baseUrlProfile + title.profile_path"></h2>
    <!-- <h4>Runtime:{{ title.runtime }}</h4> -->
    <h3>Biography: {{ title.biography }}</h3>
    <h3>Cast:</h3>
    <div v-for="cast in title.combined_credits.cast">
      <div v-if="cast.title">
        <p>{{ cast.title }} : {{ cast.character }}<img v-bind:src="baseUrlPoster + cast.poster_path"></p>
      </div>
      <div v-else>
        <p>{{ cast.original_name }} : {{ cast.character }}<img v-bind:src="baseUrlPoster + cast.poster_path"></p>
      </div>
        
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
      newMediaType: "",
      baseUrlPoster: "https://image.tmdb.org/t/p/w154",
      baseUrlProfile: "https://image.tmdb.org/t/p/w185"
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
    



